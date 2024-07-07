import { EventsManager } from "./classes/eventsManager.js"
import { screenWidth } from "./classes/regular_collectors/screenWidth.js"
import { screenHeight } from "./classes/regular_collectors/screenHeight.js"
import { language } from "./classes/regular_collectors/language.js"
import { userAgent } from "./classes/regular_collectors/userAgent.js"
import { timeZone } from "./classes/regular_collectors/timeZone.js"
import { cookiesEnabled } from "./classes/regular_collectors/cookiesEnabled.js"
import { javaScriptEnabled } from "./classes/regular_collectors/javaScriptEnabled.js"
import { onlineStatus } from "./classes/regular_collectors/onlineStatus.js"
import { referrer } from "./classes/regular_collectors/referrer.js"
import { localStorageEnable } from "./classes/regular_collectors/localStorage.js"
import { networkInformation } from "./classes/regular_collectors/networkInformation.js"
import { clipboard } from "./classes/regular_collectors/clipboard.js"
import { browserInfo } from "./classes/regular_collectors/browserInfo.js"
import { platform } from "./classes/regular_collectors/platform.js"
import { deviceMemory } from "./classes/regular_collectors/deviceMemory.js"
import { hardwareConcurrency } from "./classes/regular_collectors/hardwareConcurrency.js"
import { plugins } from "./classes/regular_collectors/plugins.js"
import { geolocation } from "./classes/regular_collectors/geolocation.js"
import { doNotTrack } from "./classes/regular_collectors/doNotTrack.js"
import { battery } from "./classes/regular_collectors/battery.js"
import { currentUrl } from "./classes/regular_collectors/currentUrl.js"
import { historyLength } from "./classes/regular_collectors/historyLength.js"
import { colorDepth } from "./classes/regular_collectors/colorDepth.js"
import { touchSupport } from "./classes/regular_collectors/touchSupport.js"
import { mouseMove } from "./classes/continous_collectors/mouseMove.js"
import { keyboardPressing } from "./classes/continous_collectors/keyboardPressing.js"
import { clicksPressing } from "./classes/continous_collectors/clicksPressing.js"
import { deviceMotion } from "./classes/continous_collectors/deviceMotion.js"
import { deviceOrientation } from "./classes/continous_collectors/deviceOrientation.js"
const chBox = document.getElementById('chxCollectData');
const h3Text = document.getElementById('h3Text');

async function main() {
  let config = null
  let collectors
  try {
    const currentConfig = window.localStorage.getItem("configuration");
    if (currentConfig) {
      let currentConfigData = JSON.parse(currentConfig);
      if(currentConfigData['SDK_ENABLED']){
        EventsManager.IsEnabled = true;
        chBox.checked = true;
        h3Text.innerText = 'Collect data enabled';
      }else{
        EventsManager.IsEnabled = false;
        chBox.checked = false;
        h3Text.innerText = 'Collect data disabled';
      }
    }
  } catch (error) {
    console.error(error);
  }

  const fetchConf = async () => {
    try {
      config = await EventsManager.getConfig("customerId")
      if (config) {
        localStorage.setItem("configuration", JSON.stringify(config))
      } else {
        console.error("Failed to fetch configuration")
      }
    } catch (error) {
      console.error(error)
    }
  }
  
  chBox.addEventListener('change',async ()=>{
    if(chBox.checked){
      EventsManager.IsEnabled = true;
      fetchConf();
      await new Promise(resolve => setTimeout(resolve, 100));
      collectors.forEach((collector => collector.startCollect()));
      h3Text.innerText = 'Collect data enabled';
    }else{
      EventsManager.IsEnabled = false;
      fetchConf();
      await new Promise(resolve => setTimeout(resolve, 100));
      collectors.forEach((collector => collector.finishCollect()));
      h3Text.innerText = 'Collect data disabled';
    }
  });
  fetchConf()
  setInterval(async () => {
    fetchConf()
  }, 60000)
  await new Promise(resolve => setTimeout(resolve, 100));
  collectors = [
    new screenWidth(), //0
    new screenHeight(), //1
    new language(),  //2
    new userAgent(), //3
    new timeZone(), //4                    
    new cookiesEnabled(), //5
    new javaScriptEnabled(),  //6
    new onlineStatus(), //7
    new referrer(), //8
    new localStorageEnable(), //9
    new networkInformation(), //10
    new clipboard(), //11
    new browserInfo(), //12
    new platform(), //13
    new deviceMemory(), //14
    new hardwareConcurrency(),  //15
    new plugins(),  //16
    new geolocation(), //17
    new doNotTrack(), //18
    new battery(), //20
    new currentUrl(), //21
    new historyLength(), //22
    new colorDepth(), //23
    new touchSupport(), //24
    new mouseMove(50), //25
    new keyboardPressing(50), //26
    new clicksPressing(10), //27
    new deviceMotion(40), //28
    new deviceOrientation(40) //29
  ]

  document.addEventListener("acme-sdk-loaded", async () => {
    if(EventsManager.IsEnabled){
      collectors.forEach(collector => collector.startCollect())
    }
    setInterval(() => {
      // screenWidth
      document.getElementById("screenWidth").innerHTML =
        'Screen width: <span style="color: red">' +
        collectors[0].getData() +
        "</span>"
      // screenHeight
      document.getElementById("screenHeight").innerHTML =
        'Screen height: <span style="color: red">' +
        collectors[1].getData() +
        "</span>"
      // language
      document.getElementById("language").innerHTML =
        'Language: <span style="color: red">' +
        collectors[2].getData() +
        "</span>"
      // userAgent
      document.getElementById("userAgent").innerHTML =
        'User agent: <span style="color: red">' +
        collectors[3].getData() +
        "</span>"
      // timeZone
      document.getElementById("timeZone").innerHTML =
        'TimeZone: <span style="color: red">' +
        collectors[4].getData() +
        "</span>"
      // cookiesEnabled
      document.getElementById("cookiesEnabled").innerHTML =
        'Cookies enabled: <span style="color: red">' +
        collectors[5].getData() +
        "</span>"
      // javaScriptEnabled
      document.getElementById("javaScriptEnabled").innerHTML =
        'Javascript Enabled: <span style="color: red">' +
        collectors[6].getData() +
        "</span>"
      // onlineStatus
      document.getElementById("onlineStatus").innerHTML =
        'Online status: <span style="color: red">' +
        collectors[7].getData() +
        "</span>"
      // referrer
      document.getElementById("referrer").innerHTML =
        'Referrer: <span style="color: red">' +
        collectors[8].getData() +
        "</span>"
      // localStorage
      document.getElementById("localStorage").innerHTML =
        'LocalStorage: <span style="color: red">' +
        collectors[9].getData() +
        "</span>"
      // networkInformation
      document.getElementById("networkInformation").innerHTML =
        'Network information: <span style="color: red">' +
        collectors[10].getData() +
        "</span>"
      // clipboard
      try {
        document.getElementById("clipboard").innerHTML =
          'Clipboard: <span style="color: red">' +
          collectors[11].getData() +
          "</span>"
      } catch (error) {
        console.error("Document is not focused")
      }
      //browserInfo
      document.getElementById("browserInfo").innerHTML =
        'BrowserInfo: <span style="color: red">' +
        collectors[12].getData() +
        "</span>"
      // platform
      document.getElementById("platform").innerHTML =
        'Platform: <span style="color: red">' +
        collectors[13].getData() +
        "</span>"
      // deviceMemory
      document.getElementById("deviceMemory").innerHTML =
        'Device memory: <span style="color: red">' +
        collectors[14].getData() +
        "</span>"
      // hardwareConcurrency
      document.getElementById("hardwareConcurrency").innerHTML =
        'Hardware concurrency: <span style="color: red">' +
        collectors[15].getData() +
        "</span>"
      // plugins
      document.getElementById("plugins").innerHTML =
        'Plugins: <span style="color: red">' +
        collectors[16].getData() +
        "</span>"
      // geolocation
      document.getElementById("geolocation").innerHTML =
        'geolocation: <span style="color: red">' +
        collectors[17].getData() +
        "</span>"
      // doNotTrack
      document.getElementById("doNotTrack").innerHTML =
        'Do not track: <span style="color: red">' +
        collectors[18].getData() +
        "</span>"
      // battery
      document.getElementById("battery").innerHTML =
        'Battery: <span style="color: red">' +
        collectors[19].getData() +
        "</span>"
      // currentUrl
      document.getElementById("currentUrl").innerHTML =
        'Current Url: <span style="color: red">' +
        collectors[20].getData() +
        "</span>"
      // historyLength
      document.getElementById("historyLength").innerHTML =
        'History length: <span style="color: red">' +
        collectors[21].getData() +
        "</span>"
      // colorDepth
      document.getElementById("colorDepth").innerHTML =
        'Color depth: <span style="color: red">' +
        collectors[22].getData() +
        "</span>"
      // touchSupport
      document.getElementById("touchSupport").innerHTML =
        'Touch support: <span style="color: red">' +
        collectors[23].getData() +
        "</span>"

      // mouseMove
      let MouseMovements = ""
      const mouseMoveData = collectors[24].getData()
      if (Array.isArray(mouseMoveData) && mouseMoveData !== null) {
        mouseMoveData.forEach(
          obj => (MouseMovements += "<br>" + JSON.stringify(obj) + ",")
        )
        document.getElementById("mouseMove").innerHTML =
          'Mouse move: <span style="color: red">' + MouseMovements + "</span>"
      }else{
         document.getElementById("mouseMove").innerHTML ='Mouse move: <span style="color: red"> null </span>'
      }

      // keyboardPressing
      let keyboardPressing = ""
      const keyboardPressingData = collectors[25].getData()
      if (
        Array.isArray(keyboardPressingData) &&
        keyboardPressingData !== null
      ) {
        keyboardPressingData.forEach(obj => {
          keyboardPressing += "<br>" + JSON.stringify(obj) + ","
        })
        document.getElementById("keyboardPressing").innerHTML =
          'Keyboard pressing: <span style="color: red">' +
          keyboardPressing +
          "</span>"
      }else{
        document.getElementById("keyboardPressing").innerHTML ='Keyboard pressing: <span style="color: red"> null </span>'
      }

      // clicksPressing
      let clicksPressing = ""
      const clicksPressingData = collectors[26].getData()
      if (Array.isArray(clicksPressingData) && clicksPressingData !== null) {
        clicksPressingData.forEach(
          obj => (clicksPressing += "<br>" + JSON.stringify(obj) + ",")
        )
        document.getElementById("clicksPressing").innerHTML =
          'Clicks pressing: <span style="color: red">' +
          clicksPressing +
          "</span>"
      }else{
        document.getElementById("clicksPressing").innerHTML =
          'Clicks pressing: <span style="color: red">  null </span>'
      }

      // deviceMotion
      let deviceMotion = ""
      const deviceMotionData = collectors[27].getData()
      if (Array.isArray(deviceMotionData) && deviceMotionData !== null) {
        deviceMotionData.forEach(
          obj => (deviceMotion += "<br>" + JSON.stringify(obj) + ",")
        )
        document.getElementById("deviceMotion").innerHTML =
          'Device motion: <span style="color: red">' + deviceMotion + "</span>"
      }else{
        document.getElementById("deviceMotion").innerHTML =
          'Device motion: <span style="color: red"> null </span>'
      }

      // deviceOrientation
      let deviceOrientation = ""
      const deviceOrientationData = collectors[28].getData()
      if (
        Array.isArray(deviceOrientationData) &&
        deviceOrientationData !== null
      ) {
        deviceOrientationData.forEach(obj => {
          deviceOrientation += "<br>" + JSON.stringify(obj) + ","
        })
        document.getElementById("deviceOrientation").innerHTML =
          'Device orientation: <span style="color: red">' +
          deviceOrientation +
          "</span>"
      }else{
        document.getElementById("deviceOrientation").innerHTML =
          'Device orientation: <span style="color: red"> null </span>'
      }
    }, 1000)
    console.log("load complete")
  })
  const event = new CustomEvent("acme-sdk-loaded")
  document.dispatchEvent(event)
  
}
main()

