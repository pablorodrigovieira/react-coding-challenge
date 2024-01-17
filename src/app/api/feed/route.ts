import { RESPONSE_CODES } from "@/constants/backend";
import feed from "@/constants/feed-data/sample.json";
import message from "@/constants/languages/en.json";

export const GET = () => {
  try {
    return new Response(JSON.stringify(feed), {
      status: RESPONSE_CODES.SUCCESS,
    });
  } catch (e: any) {
    return new Response(`${message.error.failed_to_fetch} feed-data`, {
      status: RESPONSE_CODES.INTERNAL_SERVER_ERROR,
    });
  }
};
