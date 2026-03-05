import { screen, render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { HelloWorld } from "../src/styles/PageFormat";

describe("HelloWorld", () => {
    it("displays the correct message", () => {
        expect(HelloWorld()).toBe("Hello, World!");
    });
});