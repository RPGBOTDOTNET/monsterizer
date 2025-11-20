import type { Monster } from "../types";
import languagesText from "./languages-text";

test("returns trimmed languages", () => {
  const m = {
    languages: "Common, Elvish",
    cantSpeak: false,
  } as unknown as Monster;
  expect(languagesText(m)).toEqual("Common, Elvish");
});

test("returns can't speak phrasing when cantSpeak=true", () => {
  const m = { languages: "Draconic", cantSpeak: true } as unknown as Monster;
  expect(languagesText(m)).toEqual("Understands Draconic, but can't speak.");
});

test("returns -- when empty", () => {
  const m = { languages: "   ", cantSpeak: false } as unknown as Monster;
  expect(languagesText(m)).toEqual("--");
});
