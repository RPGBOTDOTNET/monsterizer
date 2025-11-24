import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { downloadFile } from "./download-file";

describe("downloadFile()", () => {
  let originalCreateElement: typeof document.createElement;

  beforeEach(() => {
    originalCreateElement = document.createElement;

    // Create a mock element with the properties/methods used by downloadFile
    const fakeAnchor = {
      setAttribute: vi.fn(),
      style: { display: "" },
      click: vi.fn(),
    } as unknown as HTMLAnchorElement;

    // Spy on appendChild and removeChild
    vi.spyOn(document.body, "appendChild").mockImplementation(
      (el: Node): Node => el,
    );
    vi.spyOn(document.body, "removeChild").mockImplementation(
      (el: Node): Node => el,
    );

    // Replace createElement to return our fake anchor for 'a'
    vi.spyOn(document, "createElement").mockImplementation(
      (tagName: string) => {
        if (tagName === "a") return fakeAnchor as unknown as HTMLElement;
        return originalCreateElement.call(document, tagName);
      },
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("creates an anchor, sets attributes, clicks it and removes it", () => {
    const filename = "test.txt";
    const text = "hello world";

    downloadFile(filename, text);

    // The createElement mock should have been called for 'a'
    expect(vi.mocked(document.createElement).mock.calls[0][0]).toBe("a");

    // retrieve the fake anchor returned by our mock
    const created = vi.mocked(document.createElement).mock.results[0].value;

    expect(created.setAttribute).toHaveBeenCalledWith(
      "href",
      expect.stringContaining("data:text/plain"),
    );
    expect(created.setAttribute).toHaveBeenCalledWith("download", filename);
    expect(created.style.display).toBe("none");
    expect(created.click).toHaveBeenCalled();

    // ensure appended and removed
    expect(document.body.appendChild).toHaveBeenCalled();
    expect(document.body.removeChild).toHaveBeenCalled();
  });
});
