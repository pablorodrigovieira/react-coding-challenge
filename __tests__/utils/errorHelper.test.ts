import { onError } from "@/utils/errorHelper";

describe("onError", () => {
  it("should logs the error message to the console", () => {
    const consoleErrorMock = jest.spyOn(console, "error").mockImplementation(() => {});

    const sampleError = new Error("Test error");
    onError(sampleError);

    expect(consoleErrorMock).toHaveBeenCalledWith(
      expect.stringContaining("An error occurred: Test error")
    );

    consoleErrorMock.mockRestore();
  });
});
