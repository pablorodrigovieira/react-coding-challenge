import message from "@/constants/languages/en.json";

/**
 * Handles and logs errors.
 * @param error - The error to be handled.
 * @returns void
 * This function currently displays an alert with the error message.
 * for now, it's just an alert but to use in production we could use something like Sentry for error handler
 *
 * @example
 *
 *  try {
 *  } catch (e) {
 *     if(e instanceof Error){
 *       onError(e);
 *     }
 * }
 *
 * */
export function onError(error: Error): void {
  console.error(`${message.error.an_error_occurred}: ${error.message}`);
}
