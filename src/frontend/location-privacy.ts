import pkg from "pluscodes";
const { encode, decode } = pkg;

export interface PrivacyLocation {
  geoHashtag: string; // #geo + first 6 chars of plus code
  label?: string; // optional human-readable label
  plusCode: string; // full plus code for reference
  centerLat: number; // approximate center latitude
  centerLng: number; // approximate center longitude
  precision: number; // size of the area in km
}

export interface LocationArea {
  southWest: { lat: number; lng: number };
  northEast: { lat: number; lng: number };
  center: { lat: number; lng: number };
}

export interface LocationDescription {
  neighborhood?: string;
  city?: string;
  state?: string;
  country?: string;
  formatted: string;
}

export class LocationPrivacySystem {
  private static readonly GEO_HASHTAG_PREFIX = "#geo";
  private static readonly PRIVACY_CODE_LENGTH = 6;
  private static readonly NOMINATIM_BASE_URL =
    "https://nominatim.openstreetmap.org";
  private static locationCache = new Map<string, LocationDescription>();

  /**
   * Convert GPS coordinates to privacy-friendly geo hashtag
   * Uses only first 6 characters of Plus Code for ~1km precision
   */
  static createPrivacyLocation(
    lat: number,
    lng: number,
    label?: string,
  ): PrivacyLocation {
    // Generate full plus code
    const fullPlusCode = encode({ latitude: lat, longitude: lng });

    // Extract first 6 characters for privacy (before the + sign)
    const privacyCode = fullPlusCode.substring(
      0,
      LocationPrivacySystem.PRIVACY_CODE_LENGTH,
    );

    // Create geo hashtag
    const geoHashtag = `${LocationPrivacySystem.GEO_HASHTAG_PREFIX}${privacyCode.toLowerCase()}`;

    // Get approximate area for the privacy code
    const area = LocationPrivacySystem.getLocationArea(privacyCode);

    return {
      geoHashtag,
      label,
      plusCode: fullPlusCode,
      centerLat: area.center.lat,
      centerLng: area.center.lng,
      precision: LocationPrivacySystem.calculatePrecision(privacyCode),
    };
  }

  /**
   * Convert geo hashtag back to location area
   */
  static parseGeoHashtag(geoHashtag: string): LocationArea | null {
    if (!LocationPrivacySystem.isValidGeoHashtag(geoHashtag)) {
      return null;
    }

    // Extract the privacy code from hashtag (case-insensitive)
    const privacyCode = geoHashtag
      .substring(LocationPrivacySystem.GEO_HASHTAG_PREFIX.length)
      .toUpperCase();

    return LocationPrivacySystem.getLocationArea(privacyCode);
  }

  /**
   * Get the geographical area for a privacy code
   */
  private static getLocationArea(privacyCode: string): LocationArea {
    // Pad the privacy code to make it a valid plus code for decoding
    // We add '00+' to make it decodable, which gives us the larger area
    const paddedCode = privacyCode + "00+";

    try {
      const decoded = decode(paddedCode);

      return {
        southWest: {
          lat: decoded.latitude - decoded.resolution / 2,
          lng: decoded.longitude - decoded.resolution / 2,
        },
        northEast: {
          lat: decoded.latitude + decoded.resolution / 2,
          lng: decoded.longitude + decoded.resolution / 2,
        },
        center: {
          lat: decoded.latitude,
          lng: decoded.longitude,
        },
      };
    } catch (error) {
      console.error("Error decoding privacy code:", error);
      // Fallback to approximate center
      return {
        southWest: { lat: 0, lng: 0 },
        northEast: { lat: 0, lng: 0 },
        center: { lat: 0, lng: 0 },
      };
    }
  }

  /**
   * Calculate approximate precision in kilometers for a privacy code
   */
  private static calculatePrecision(privacyCode: string): number {
    // 6-character codes give roughly 1.1km x 0.9km precision
    // This is much more privacy-friendly than full GPS coordinates
    return 1.0; // approximate km radius
  }

  /**
   * Validate that a string is a proper geo hashtag
   */
  static isValidGeoHashtag(hashtag: string): boolean {
    // Check prefix case-insensitively
    const lowerHashtag = hashtag.toLowerCase();
    if (!lowerHashtag.startsWith(LocationPrivacySystem.GEO_HASHTAG_PREFIX)) {
      return false;
    }

    const code = hashtag.substring(
      LocationPrivacySystem.GEO_HASHTAG_PREFIX.length,
    );

    // Check if it's exactly 6 characters and contains valid Plus Code characters
    // Valid Plus Code characters: 23456789CFGHJMPQRVWX (case insensitive)
    const validChars = /^[23456789cfghjmpqrvwxCFGHJMPQRVWX]{6}$/i;
    return (
      code.length === LocationPrivacySystem.PRIVACY_CODE_LENGTH &&
      validChars.test(code)
    );
  }

  /**
   * Check if a location is within the area of a geo hashtag
   */
  static isLocationInArea(
    lat: number,
    lng: number,
    geoHashtag: string,
  ): boolean {
    const area = LocationPrivacySystem.parseGeoHashtag(geoHashtag);
    if (!area) return false;

    return (
      lat >= area.southWest.lat &&
      lat <= area.northEast.lat &&
      lng >= area.southWest.lng &&
      lng <= area.northEast.lng
    );
  }

  /**
   * Get nearby geo hashtags for broader discovery
   * Returns adjacent area codes for finding nearby issues
   */
  static getNearbyGeoHashtags(
    geoHashtag: string,
    radius: number = 1,
  ): string[] {
    const area = LocationPrivacySystem.parseGeoHashtag(geoHashtag);
    if (!area) return [];

    const nearby: string[] = [geoHashtag];
    const { center } = area;

    // Generate plus codes for surrounding areas
    // This is a simplified approach - in production you'd want more sophisticated nearby calculation
    // Use larger offsets (~2-3km) to ensure different Plus Code grid cells
    const offsets = [
      { latOffset: 0.025, lngOffset: 0 }, // North
      { latOffset: -0.025, lngOffset: 0 }, // South
      { latOffset: 0, lngOffset: 0.025 }, // East
      { latOffset: 0, lngOffset: -0.025 }, // West
      { latOffset: 0.025, lngOffset: 0.025 }, // NE
      { latOffset: 0.025, lngOffset: -0.025 }, // NW
      { latOffset: -0.025, lngOffset: 0.025 }, // SE
      { latOffset: -0.025, lngOffset: -0.025 }, // SW
    ];

    for (const offset of offsets) {
      const nearbyLocation = LocationPrivacySystem.createPrivacyLocation(
        center.lat + offset.latOffset * radius,
        center.lng + offset.lngOffset * radius,
      );

      if (!nearby.includes(nearbyLocation.geoHashtag)) {
        nearby.push(nearbyLocation.geoHashtag);
      }
    }

    return nearby;
  }

  /**
   * Generate a human-readable description of the location area
   */
  static getLocationDescription(geoHashtag: string): string {
    if (!LocationPrivacySystem.isValidGeoHashtag(geoHashtag)) {
      return "Invalid location";
    }

    const code = geoHashtag
      .replace(LocationPrivacySystem.GEO_HASHTAG_PREFIX, "")
      .toUpperCase();
    const precision = LocationPrivacySystem.calculatePrecision(code);

    return `Approximate area: ~${precision}km radius (${geoHashtag})`;
  }

  /**
   * Create a privacy location from current browser geolocation
   */
  static async createFromCurrentLocation(
    label?: string,
  ): Promise<PrivacyLocation> {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error("Geolocation not supported"));
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const privacyLocation = LocationPrivacySystem.createPrivacyLocation(
            latitude,
            longitude,
            label,
          );
          resolve(privacyLocation);
        },
        (error) => reject(error),
        {
          enableHighAccuracy: false, // We don't need high accuracy for privacy codes
          timeout: 10000,
          maximumAge: 300000, // 5 minutes cache is fine
        },
      );
    });
  }

  /**
   * Extract all geo hashtags from text (for parsing posts/issues)
   */
  static extractGeoHashtags(text: string): string[] {
    // Match geo hashtags case-insensitively with valid Plus Code characters
    // Use negative lookbehind to avoid matching hashtags preceded by #
    const regex = /(?<!#)#geo[23456789cfghjmpqrvwxCFGHJMPQRVWX]{6}/gi;
    const matches = text.match(regex) || [];
    return matches.map((match) => match.toLowerCase());
  }

  /**
   * Format location for display in issues/posts
   */
  static formatForDisplay(location: PrivacyLocation): string {
    const parts = [location.geoHashtag];

    if (location.label) {
      parts.push(`(${location.label})`);
    }

    parts.push(`~${location.precision}km area`);

    return parts.join(" ");
  }

  /**
   * Get human-readable location description using reverse geocoding
   * Uses OpenStreetMap Nominatim API (no API key required)
   */
  static async getLocationDescription(
    geoHashtag: string,
  ): Promise<LocationDescription | null> {
    if (!LocationPrivacySystem.isValidGeoHashtag(geoHashtag)) {
      return null;
    }

    // Check cache first
    if (LocationPrivacySystem.locationCache.has(geoHashtag)) {
      return LocationPrivacySystem.locationCache.get(geoHashtag)!;
    }

    try {
      const area = LocationPrivacySystem.parseGeoHashtag(geoHashtag);
      if (!area) return null;

      const response = await fetch(
        `${LocationPrivacySystem.NOMINATIM_BASE_URL}/reverse?` +
          `format=json&lat=${area.center.lat}&lon=${area.center.lng}&` +
          `addressdetails=1&extratags=1&namedetails=1&zoom=14`,
        {
          headers: {
            "User-Agent": "Wukkie.uk/1.0 (Bug Tracker for the World)",
          },
        },
      );

      if (!response.ok) {
        console.warn("Reverse geocoding failed:", response.status);
        return null;
      }

      const data = await response.json();
      if (!data || !data.address) {
        return null;
      }

      const addr = data.address;
      const description: LocationDescription = {
        neighborhood:
          addr.neighbourhood ||
          addr.suburb ||
          addr.district ||
          addr.quarter ||
          addr.residential,
        city:
          addr.city ||
          addr.town ||
          addr.municipality ||
          addr.village ||
          addr.hamlet,
        state:
          addr.state ||
          addr.province ||
          addr.region ||
          addr.county ||
          addr.state_district,
        country: addr.country,
        formatted: data.display_name || "Unknown location",
      };

      // Create a concise formatted string
      const parts = [];
      if (description.neighborhood) parts.push(description.neighborhood);
      if (description.city && description.city !== description.neighborhood) {
        parts.push(description.city);
      }
      if (description.country) parts.push(description.country);

      description.formatted = parts.join(", ") || description.formatted;

      // Cache the result
      LocationPrivacySystem.locationCache.set(geoHashtag, description);

      return description;
    } catch (error) {
      console.warn("Reverse geocoding error:", error);
      return null;
    }
  }

  /**
   * Get a tooltip-friendly location description
   */
  static async getLocationTooltip(geoHashtag: string): Promise<string> {
    const description =
      await LocationPrivacySystem.getLocationDescription(geoHashtag);

    if (!description) {
      return `${geoHashtag} (~1km area)`;
    }

    return `${description.formatted}\n${geoHashtag} (~1km area)`;
  }

  /**
   * Clear the location cache (useful for testing or memory management)
   */
  static clearLocationCache(): void {
    LocationPrivacySystem.locationCache.clear();
  }
}

// Export utility functions for easy use
export const createPrivacyLocation =
  LocationPrivacySystem.createPrivacyLocation;
export const parseGeoHashtag = LocationPrivacySystem.parseGeoHashtag;
export const isValidGeoHashtag = LocationPrivacySystem.isValidGeoHashtag;
export const extractGeoHashtags = LocationPrivacySystem.extractGeoHashtags;
export const getLocationDescription =
  LocationPrivacySystem.getLocationDescription;
export const getLocationTooltip = LocationPrivacySystem.getLocationTooltip;
export const clearLocationCache = LocationPrivacySystem.clearLocationCache;

// Example usage:
/*
// Create privacy location from coordinates
const privacyLoc = createPrivacyLocation(51.5074, -0.1278, 'Central London');
console.log(privacyLoc.geoHashtag); // '#geo9c3xgp' (example)

// Parse geo hashtag back to area
const area = parseGeoHashtag('#geo9c3xgp');
console.log(area?.center); // { lat: ~51.5, lng: ~-0.1 }

// Extract from text
const hashtags = extractGeoHashtags('Found an issue at #geo9c3xgp near the station #infrastructure');
console.log(hashtags); // ['#geo9c3xgp']

// Current location
LocationPrivacySystem.createFromCurrentLocation('My neighborhood')
  .then(loc => console.log('Your area:', loc.geoHashtag));
*/
