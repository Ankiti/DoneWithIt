import Constants from "expo-constants";

const settings = {
  dev: {
    apiUrl: "http://10.32.50.204/api",
  },
  staging: {
    apiUrl: "http://10.32.50.204:19000/api",
  },
  prod: {
    apiUrl: "http://10.32.50.204:19000/api",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === "staging") return settings.staging;
  return settings.prod;
};

export default getCurrentSettings();
