import { onError } from "@/utils/errorHelper";
import message from "@/constants/languages/en.json";

/**
 * Filters and orders an array of feed-data entries based on the release year and title.
 *
 * @param {IFeedEntry[]} entries - The array of feed-data entries to be filtered and ordered.
 * @param {number} yearLimit - The minimum release year for filtering entries.
 * @returns {IFeedEntry[] | undefined } - Filtered and ordered entries array or undefined based on the filters.
 */
export const filterAndOrderDataByYearLimit = (
  entries: IFeedEntry[],
  yearLimit: number
): IFeedEntry[] | undefined => {
  try {
    if (entries && entries.length > 0) {
      // Filter entries where releaseYear is greater than or equal to 2010
      const filteredEntries = entries.filter((entry: IFeedEntry) => entry.releaseYear >= yearLimit);

      // Sorted by the title attribute value in ascending alphanumeric order
      return filteredEntries.sort((a: IFeedEntry, b: IFeedEntry) =>
        a.title.localeCompare(b.title, "en")
      );
    }
    return entries;
  } catch (error) {
    if (error instanceof Error) {
      onError(error);
    } else {
      console.error(`${message.error.unexpected_error} on filterAndOrderDataByYearLimit`, error);
    }
    throw error;
  }
};

/**
 * Filters an array of feed-data entries by a specified program type.
 *
 * @param entries - An array of IFeedEntry objects.
 * @param programType - The program type used for filtering.
 * @returns {IFeedEntry[] | undefined } array of filtered feed-data entries or undefined, or the original array if empty.
 */
export const filterEntriesByProgramType = (
  entries: IFeedEntry[],
  programType: string
): IFeedEntry[] | undefined => {
  try {
    if (entries && entries.length > 0) {
      // Filter entries by programType
      return entries.filter((entry: IFeedEntry) => entry.programType === programType);
    }
    return entries;
  } catch (error) {
    if (error instanceof Error) {
      onError(error);
    } else {
      console.error(`${message.error.unexpected_error} on filterEntriesByProgramType`, error);
    }
    throw error;
  }
};

/**
 * Retrieves feed data filtered by program type.
 *
 * @param {IFeedEntry[]} feedData - The array of feed entries.
 * @param {string} programType - The program type to filter by.
 * @returns {IFeedEntry[]} An array containing the first 21 entries filtered by program type,
 *                        or an empty array if the filtered array is undefined.
 */
export const getFeedDataByProgramType = (
  feedData: IFeedEntry[],
  programType: string
): IFeedEntry[] => {
  try {
    const filtered = feedData && filterEntriesByProgramType(feedData, programType);
    // Return the first 21 entries or empty array in case filtered array is undefined.
    return filtered ? filtered.slice(0, 21) : [];
  } catch (error) {
    if (error instanceof Error) {
      onError(error);
    } else {
      console.error(`${message.error.unexpected_error} on filterEntriesByProgramType`, error);
    }
    throw error;
  }
};
