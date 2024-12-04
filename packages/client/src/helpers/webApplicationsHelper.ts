export const CHROME_NVDA = "Chrome + NVDA";
export const EDGE_NVDA = "Edge + NVDA";
export const FIREFOX_JAWS = "Firefox + Jaws";
export const SAFARI_VOICEOVER = "Safari + VoiceOver";
export const CHROME_VOICEOVER = "Chrome + VoiceOver";
export const SAMSUNG_INTERNET_TALKBACK = "Samsung Internet + Talkback";
export const ANDROID_BROWSER_TALKBACK = "Android browser + Talkback";
export const CHROME_TALKBACK = "Chrome + Talkback";

export enum APPLICATIONS {
  WEB_APPLICATION = "Web application",
  MOBILE_NATIVE_APPLICATION = "Mobile native application",
  MOBILE_HYBRID_APPLICATION = "Mobile hybrid application"
}

export enum PLATFORMS {
  WINDOWS = "Windows",
  MACOS = "MacOS",
  ANDROID_PHONE = "Android (phone)",
  ANDROID_TABLET = "Android (tablet)",
  IOS = "iOS",
  IPADOS = "iPadOS"
}

export const createOptionsForCategory = (category: PLATFORMS) => {
  switch (category) {
    case PLATFORMS.WINDOWS:
      return [
        CHROME_NVDA,
        EDGE_NVDA,
        FIREFOX_JAWS
      ];
    case PLATFORMS.MACOS:
      return [
        SAFARI_VOICEOVER,
        CHROME_VOICEOVER
      ];
    case PLATFORMS.ANDROID_PHONE:
    case PLATFORMS.ANDROID_TABLET:
      return [
        CHROME_TALKBACK,
        SAMSUNG_INTERNET_TALKBACK,
        ANDROID_BROWSER_TALKBACK
      ];
    case PLATFORMS.IOS:
    case PLATFORMS.IPADOS:
      return [
        SAFARI_VOICEOVER,
        CHROME_VOICEOVER
      ];
    default:
      return [];
  }
};
