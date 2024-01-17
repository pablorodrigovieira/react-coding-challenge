import { onError } from "@/utils/errorHelper";
import { filterAndOrderDataByYear } from "@/utils/filters";
import { RESPONSE_CODES } from "@/constants/backend";
import message from "@/constants/languages/en.json";

export const fetchFeedData = async () => {
  try {
    /**
     * IMPORTANT: You can uncomment the line below to test the Loading component.
     * Make sure you're at series or movies page.
     * */
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    /**
     * IMPORTANT: You can uncomment the line below to test the Error component.
     * Make sure you're at series or movies page.
     * */
    // throw new Error('Testing the error component.');

    const res = await fetch("http://localhost:3000/api/feed");
    if (res && res.status === RESPONSE_CODES.SUCCESS) {
      const data = await res.json();
      if (data && data.entries) {
        /**
         * Filter the entries
         * Where the entry has a releaseYear attribute value >= 2010
         * Sorted by the title attribute value in ascending alphanumeric order
         * */
        return filterAndOrderDataByYear(data.entries, 2010);
      }
    }
  } catch (error) {
    if (error instanceof Error) {
      onError(error);
    } else {
      console.error(`${message.error.unexpected_error} on fetchFeedData`, error);
    }
    throw error;
  }
};
