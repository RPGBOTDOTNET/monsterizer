import type { Monster } from "../../types";
import parseImportData from "./parse-import-data";

it("handles empty import data", () => {
  expect(() => {
    parseImportData("", {} as unknown as Monster);
  }).toThrow();
  expect(parseImportData("{}", {} as unknown as Monster)).toEqual({});
});

it("handles missing properties", () => {
  const importData = "{}";
  const exampleObject = { foo: "" } as unknown as Monster;
  expect(parseImportData(importData, exampleObject)).toEqual(exampleObject);
});

it("omits unexpected properties", () => {
  const importData = '{ "bar": 1 }';
  const exampleObject = { foo: "" } as unknown as Monster;
  expect(parseImportData(importData, exampleObject)).toEqual(exampleObject);
});

it("retains property values from import data", () => {
  const importData = '{ "foo": 1 }';
  const exampleObject = { foo: "" } as unknown as Monster;
  expect(parseImportData(importData, exampleObject)).toEqual({ foo: 1 });
});
