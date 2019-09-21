import Env from "../public/js/env.js";

const getNavigatorLanguageEnUk = () => {
  const languageStr = "en-uk";
  return languageStr;
};

const getNavigatorLanguageEmpty = () => {
  const languageStr = "";
  return languageStr;
};

test("getNavigatorLanguage", () => {
  const env = new Env();
  env.getNavigatorLanguage = getNavigatorLanguageEnUk;
  expect(env.getNavigatorLanguage()).toMatch("en-uk");
});

test("getLanguageAndCountryFromBrowser", () => {
  const env = new Env();
  env.getNavigatorLanguage = getNavigatorLanguageEnUk;
  expect(env.getLanguageAndCountryFromBrowser()).toEqual({
    language: "en",
    country: "uk"
  });
});

test("getDefaultLanguage", () => {
  const env = new Env();
  env.getNavigatorLanguage = getNavigatorLanguageEnUk;
  expect(env.getDefaultLanguage()).toMatch("en");
});

test("getDefaultCountry", () => {
  const env = new Env();
  env.getNavigatorLanguage = getNavigatorLanguageEnUk;
  expect(env.getDefaultCountry()).toMatch("uk");
});

test("getDefaultLanguageAndCountry when navigator.language empty", () => {
  const env = new Env();
  env.getNavigatorLanguage = getNavigatorLanguageEmpty;
  expect(env.getDefaultLanguageAndCountry()).toEqual({
    language: "en",
    country: "us"
  });
});