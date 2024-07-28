// screen width:
export const screenWidth = screen.width;
// screen height:
export const screenHeight = screen.height;
// language:
export const language = navigator.language || navigator.userLanguage;
// userAgent:
export const userAgent = navigator.userAgent;
// timezone:
export const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
// CookiesEnabled:
export const cookiesEnabled = navigator.cookieEnabled;
// Is Javascript Enabled:
export const javaScriptEnabled =
  typeof navigator.javaEnabled === "function" && navigator.javaEnabled();
// online status:
export const onlineStatus = navigator.onLine;
// page referrer:
export const referrer = document.referrer;
// is localStorage enabled:
export const localStorageAvailable = typeof Storage !== "undefined";

export function getNetworkInformation() {
  return new Promise((resolve) => {
    const connection =
      navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    resolve(connection);
  });
}
// get clipboard:
export const clipboard = navigator.clipboard;
// get connection:
export const connection = navigator.connection;
// get browser info:
export const browserInfo = (function () {
  const ua = navigator.userAgent;
  let tem: any;
  let M = ua.match(/(opera|chrome|safari|firefox|msie|trident\/?\s)(\d+)/i) || [];
  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return "IE " + (tem[1] || "");
  }
  if (M[1] === "Chrome") {
    tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
    if (tem != null) return tem.slice(1).join(" ").replace("OPR", "Opera");
  }
  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, "-?"];
  if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
  return M.join(" ");
})();
// device platform:
export const platform = navigator.platform;
// device memory:
export const deviceMemory = navigator.deviceMemory || "unknown";
// hardware concurrency:
export const hardwareConcurrency = navigator.hardwareConcurrency;
// plugins:
export const plugins = Array.from(navigator.plugins).map((plugin) => plugin.name);
// get geolocation position:
export const getLocation = navigator.geolocation.getCurrentPosition(
  (position) => {
    console.log("Geolocation:", position.coords.latitude, position.coords.longitude);
  },
  (error) => {
    console.log("Geolocation Error:", error.message);
  }
);
// do not track info
export const doNotTrack = navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack;
// get battery info:
export const getBattery = navigator.getBattery().then((battery) => {
  console.log("Battery Level:", battery.level * 100 + "%");
  console.log("Battery Charging:", battery.charging);
});
// current url:
export const currentUrl = window.location.href;
// history length:
export const historyLength = window.history.length;
// colorDepth:
export const colorDepth = screen.colorDepth;
// touchSupport (for browsers running in mobile/tablets):
export const touchSupport =
  "ontouchstart" in window ||
  navigator.maxTouchPoints > 0 ||
  (!!navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 0);
