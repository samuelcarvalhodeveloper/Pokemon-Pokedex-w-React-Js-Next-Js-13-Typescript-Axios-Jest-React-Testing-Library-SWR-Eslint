import { jest } from "@jest/globals";

export function mockConsoleErrorToNotDisplayAnyErrorInConsoleOnTestExecution(
  // eslint-disable-next-line no-undef
  console: Console,
): void {
  console.error = jest.fn();
}
