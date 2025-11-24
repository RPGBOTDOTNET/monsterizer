import { xdy } from "./dice";

beforeEach(() => {
  vi.resetAllMocks();
});

describe("xdy", () => {
  test("error cases", () => {
    expect(() => {
      xdy(-1, -1);
    }).toThrow();
    expect(() => {
      xdy(1, -1);
    }).toThrow();
    expect(() => {
      xdy(-1, 1);
    }).toThrow();
    expect(() => {
      xdy(1, 1);
    }).toThrow();
    expect(() => {
      xdy(0, 0);
    }).toThrow();
  });

  test("just dice", () => {
    const floorSpy = vi.spyOn(Math, "floor");
    const randomSpy = vi.spyOn(Math, "random");

    randomSpy.mockImplementationOnce(() => 0.7);
    expect(xdy(1, 2)).toEqual(2);
    expect(randomSpy).toHaveBeenCalledTimes(1);
    expect(floorSpy).toHaveBeenLastCalledWith(0.7 * 2);
    randomSpy.mockClear();

    randomSpy.mockImplementation(() => 0.4);
    expect(xdy(2, 6)).toEqual(6);
    expect(randomSpy).toHaveBeenCalledTimes(2);
    expect(floorSpy).toHaveBeenLastCalledWith(0.4 * 6);
    randomSpy.mockClear();
  });
});
