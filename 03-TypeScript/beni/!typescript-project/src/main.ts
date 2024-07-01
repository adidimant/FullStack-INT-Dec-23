import * as Collector from "./regular-collector-classes.js";

// 'main' - method that listens to the custom 'acme-sdk-loaded' event. It activates the sdk collection, and is the ONLY function that is outside a class.
// THIS FUNCTION SHOULD BE IN THE END OF THE SCRIPT:
async function main(): Promise<any> {
  // start the collectors
  const ScreenWidth = new Collector.ScreenWidthCollector();
  const ScreenHeight = new Collector.ScreenHeightCollector();
  const Language = new Collector.LanguageCollector();
  const UserAgent = new Collector.UserAgentCollector();
  const TimeZone = new Collector.TimeZoneCollector();
  const CookiesEnabled = new Collector.CookiesEnabledCollector();
  const JavaScriptEnabled = new Collector.JavaScriptEnabledCollector(); // this is not actually javascript, its a mistake from 'instructions.md', its Java - not javascript.
  const OnlineStatus = new Collector.OnlineStatusCollector();
  const Referrer = new Collector.ReferrerCollector();
  const LocalStorageAvailable = new Collector.LocalStorageAvailableCollector();
  const GetNetworkInformation = new Collector.GetNetworkInformationCollector();
  const Clipboard = new Collector.ClipboardCollector();
  const Connection = new Collector.ConnectionCollector();
  const BrowserInfo = new Collector.BrowserInfoCollector();
  const Platform = new Collector.PlatformCollector();
  const HardwareConcurrency = new Collector.HardwareConcurrencyCollector();
  const Plugins = new Collector.PluginsCollector();
  const GetLocation = new Collector.GetLocationCollector();
  const DoNotTrack = new Collector.DoNotTrackCollector();
  const GetBattery = new Collector.GetBatteryCollector();
  const CurrentUrl = new Collector.CurrrentUrlCollector();
  const HistoryLength = new Collector.HistoryLengthCollector();
  const ColorDepth = new Collector.ColorDepthCollector();
  const TouchSupport = new Collector.TouchSupportCollector();

  const regularCollectors = [
    ScreenWidth,
    ScreenHeight,
    Language,
    UserAgent,
    TimeZone,
    CookiesEnabled,
    JavaScriptEnabled,
    OnlineStatus,
    Referrer,
    LocalStorageAvailable,
    GetNetworkInformation,
    Clipboard,
    Connection,
    BrowserInfo,
    Platform,
    HardwareConcurrency,
    Plugins,
    GetLocation,
    DoNotTrack,
    GetBattery,
    CurrentUrl,
    HistoryLength,
    ColorDepth,
    TouchSupport,
  ];

  regularCollectors.forEach((c) => {
    c.startCollect();
    c.getData();
  });

  setInterval(() => {
    regularCollectors.forEach((c) => {
      c.startCollect();
      c.getData();
    });
  }, 60000);
}
// start the function when custom event has finished loading
window.addEventListener("sdkLoaded", main);
main();
