import { expect, test } from "bun:test";
import { idFromString } from "./idFromString";

test("2 + 2", () => {
  const testCases = [
    { input: "", expectedOutput: "" },
    { input: "Test", expectedOutput: "test" },
    { input: "Test test", expectedOutput: "test-test" },
    { input: "test test Test", expectedOutput: "test-test-test" },
    { input: "{teSt}", expectedOutput: "test" },
    { input: "!test @test £test$", expectedOutput: "test-test-test" },
    { input: " test ", expectedOutput: "test" },
  ];

  for (const { input, expectedOutput } of testCases) {
    expect(idFromString(input)).toBe(expectedOutput);
  }
});
