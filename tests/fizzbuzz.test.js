const {
  isFizzy,
  isBuzzy,
  fizzyBuzzy,
  fizzBuzz,
  FIZZ,
  BUZZ,
  FIZZBUZZ,
} = require("../fizzbuzz");

describe("isFizzy should return true when n is divisible by 3", () => {
  it("should return true when n is 3", () => {
    expect(isFizzy(3)).toBe(true);
  });
  it("should return true when n is 6", () => {
    expect(isFizzy(6)).toBe(true);
  });
  it("should return false when n is 4", () => {
    expect(isFizzy(4)).toBe(false);
  });
});

describe("isBuzzy should return true when n is divisible by 5", () => {
  it("should return true when n is 5", () => {
    expect(isBuzzy(5)).toBe(true);
  });
  it("should return true when n is 10", () => {
    expect(isBuzzy(10)).toBe(true);
  });
  it("should return false when n is 4", () => {
    expect(isBuzzy(4)).toBe(false);
  });
});

describe("fizzyBuzzy should return fizz when n is divisible by 3", () => {
  it("should return fizz when n is 3", () => {
    expect(fizzyBuzzy(3)).toBe("fizz");
  });
  it("should return fizz when n is 6", () => {
    expect(fizzyBuzzy(6)).toBe("fizz");
  });
  it("should return '' when n is 4", () => {
    expect(fizzyBuzzy(4)).toBe("");
  });
});

describe("fizzyBuzzy should return buzz when n is divisible by 5", () => {
  it("should return buzz when n is 5", () => {
    expect(fizzyBuzzy(5)).toBe("buzz");
  });
  it("should return buzz when n is 10", () => {
    expect(fizzyBuzzy(10)).toBe("buzz");
  });
  it("should return '' when n is 4", () => {
    expect(fizzyBuzzy(4)).toBe("");
  });
});

describe("fizzyBuzzy should return fizzbuzz when n is divisible by 3 and 5", () => {
  it("should return fizzbuzz when n is 15", () => {
    expect(fizzyBuzzy(15)).toBe("fizzbuzz");
  });
  it("should return fizzbuzz when n is 30", () => {
    expect(fizzyBuzzy(30)).toBe("fizzbuzz");
  });
  it("should return '' when n is 4", () => {
    expect(fizzyBuzzy(4)).toBe("");
  });
});

describe("fizzBuzz should return an object with fizz, buzz, and fizzBuzz counts", () => {
  it("should return an object with fizz, buzz, and fizzBuzz counts", () => {
    expect(fizzBuzz(15)).toEqual({
      count: 15,
      fizz: 4,
      buzz: 2,
      fizzBuzz: 1,
    });
  });
});

describe("FIZZ, BUZZ, and FIZZBUZZ should be defined", () => {
  it("should return an object with fizz, buzz, and fizzBuzz counts", () => {
    expect(FIZZ).toBeDefined();
    expect(BUZZ).toBeDefined();
    expect(FIZZBUZZ).toBeDefined();
  });

  it("FIZZ should be 'fizz'", () => {
    expect(FIZZ).toBe("fizz");
  });

  it("BUZZ should be 'buzz'", () => {
    expect(BUZZ).toBe("buzz");
  });

  it("FIZZBUZZ should be 'fizzbuzz'", () => {
    expect(FIZZBUZZ).toBe("fizzbuzz");
  });
});
