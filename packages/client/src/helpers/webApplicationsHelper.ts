export const CHROME_NVDA = "Chrome + NVDA";
export const EDGE_NVDA = "Edge + NVDA";
export const FIREFOX_JAWS = "Firefox + Jaws";
export const CHROME_JAWS = "Chrome + Jaws";
export const SAFARI_VOICEOVER = "Safari + VoiceOver";
export const CHROME_VOICEOVER = "Chrome + VoiceOver";
export const SAMSUNG_INTERNET_TALKBACK = "Samsung Internet + Talkback";
export const ANDROID_BROWSER_TALKBACK = "Android browser + Talkback";
export const CHROME_TALKBACK = "Chrome + Talkback";

export enum APPLICATIONS {
  WEB_APPLICATION = "web_application",
  MOBILE_NATIVE_APPLICATION = "mobile_native_application",
  MOBILE_HYBRID_APPLICATION = "mobile_hybrid_application"
}

export enum APPLICATIONS_DISPLAY_NAMES {
  WEB_APPLICATION = "Web application",
  MOBILE_NATIVE_APPLICATION = "Mobile native application",
  MOBILE_HYBRID_APPLICATION = "Mobile hybrid application"
}

export enum PLATFORMS {
  WINDOWS = "windows",
  MACOS = "macos",
  ANDROID_PHONE = "android_phone",
  ANDROID_TABLET = "android_tablet",
  IOS = "ios",
  IPAD_OS = "ipad_os",
}

export enum PLATFORM_DISPLAY_NAMES {
  WINDOWS = "Windows",
  MACOS = "MacOS",
  ANDROID_PHONE = "Android (phone)",
  ANDROID_TABLET = "Android (tablet)",
  IOS = "iOS",
  IPAD_OS = "iPadOS",
}

export const MOST_POPULAR_CONFIGURATIONS: Record<PLATFORMS, string[]> = {
  [PLATFORMS.WINDOWS]: [
    CHROME_NVDA,
    FIREFOX_JAWS,
  ],
  [PLATFORMS.ANDROID_PHONE]: [
    CHROME_TALKBACK,
  ],
  [PLATFORMS.IOS]: [
    SAFARI_VOICEOVER,
  ],
  [PLATFORMS.MACOS]: [
    SAFARI_VOICEOVER,
  ],
  [PLATFORMS.ANDROID_TABLET]: [],
  [PLATFORMS.IPAD_OS]: [],
};

export const createOptionsForCategory = (category: PLATFORMS) => {
  switch (category) {
    case PLATFORMS.WINDOWS:
      return [
        CHROME_NVDA,
        EDGE_NVDA,
        FIREFOX_JAWS,
        CHROME_JAWS,
      ];
    case PLATFORMS.MACOS:
      return [
        SAFARI_VOICEOVER,
        CHROME_VOICEOVER
      ];
    case PLATFORMS.ANDROID_PHONE:
      return [
        CHROME_TALKBACK,
        SAMSUNG_INTERNET_TALKBACK,
      ];
    case PLATFORMS.ANDROID_TABLET:
      return [
        CHROME_TALKBACK,
        ANDROID_BROWSER_TALKBACK
      ];
    case PLATFORMS.IOS:
      return [
        SAFARI_VOICEOVER,
        CHROME_VOICEOVER
      ];
    case PLATFORMS.IPAD_OS:
      return [
        CHROME_VOICEOVER,
        SAFARI_VOICEOVER,
      ];
    default:
      return [];
  }
};

export const getWebApplications = () => ({
  [APPLICATIONS.WEB_APPLICATION]: {
    [PLATFORMS.WINDOWS]: createOptionsForCategory(PLATFORMS.WINDOWS),
    [PLATFORMS.MACOS]: createOptionsForCategory(PLATFORMS.MACOS),
    [PLATFORMS.ANDROID_PHONE]: createOptionsForCategory(PLATFORMS.ANDROID_PHONE),
    [PLATFORMS.ANDROID_TABLET]: createOptionsForCategory(PLATFORMS.ANDROID_TABLET),
    [PLATFORMS.IOS]: createOptionsForCategory(PLATFORMS.IOS),
    [PLATFORMS.IPAD_OS]: createOptionsForCategory(PLATFORMS.IPAD_OS),
  },
  [APPLICATIONS.MOBILE_NATIVE_APPLICATION]: null,
  [APPLICATIONS.MOBILE_HYBRID_APPLICATION]: null,
})

export const getPlatformDisplayName = (platform: PLATFORMS): string => {
  const platformKey = platform.toUpperCase();
  return PLATFORM_DISPLAY_NAMES[platformKey as keyof typeof PLATFORM_DISPLAY_NAMES] || "Unknown Platform"
};

export const getApplicationDisplayName = (application: APPLICATIONS): string => {
  const applicationKey = application.toUpperCase();
  return APPLICATIONS_DISPLAY_NAMES[applicationKey as keyof typeof APPLICATIONS_DISPLAY_NAMES] || "Unknown Application";
};

export const checkIfPopularConfiguration = (platform: PLATFORMS, option: string): boolean => {
  const popularConfigs = MOST_POPULAR_CONFIGURATIONS[platform];
  return popularConfigs ? popularConfigs.includes(option) : false;
};


