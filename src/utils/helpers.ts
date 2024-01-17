import { PAGES_TITLES } from "@/constants/frontend";
import { onError } from "@/utils/errorHelper";
import message from "@/constants/languages/en.json";

/**
 * Retrieves the title associated with a given pathname from the PAGES_TITLES array.
 * If no matching path is found, returns an empty string.
 *
 * @param {string} pathname - The current pathname to match against in PAGES_TITLES.
 * @returns {string} - The corresponding title or empty string if not found.
 */
export function getTitleFromPath(pathname: string): string {
  try {
    return PAGES_TITLES.find((page) => page.path === pathname)?.label || "";
  } catch (error) {
    if (error instanceof Error) {
      onError(error);
    } else {
      console.error(`${message.error.unexpected_error} on getTitleFromPath`, error);
    }
    throw error;
  }
}

/**
 * Gets the current year as a string for use in a copyright notice.
 * @returns {string} The current year as a string.
 */
export function getCurrentYear(): string {
  try {
    const currentYear: number = new Date().getFullYear();
    return currentYear.toString();
  } catch (error) {
    if (error instanceof Error) {
      onError(error);
    } else {
      console.error(`${message.error.unexpected_error} on getCurrentYear`, error);
    }
    throw error;
  }
}
