export type collectors =  string | number | number[] |  boolean | object| customMouseEvent | Array<customMouseEvent>;

export type configurationObj = {
    COLLECTORS_INTERVAL: number, 
    DEFAULT_BUFFER_CONTINOUS_COLLECTORS: number, 
    SDK_ENABLED: boolean
}

export type keyupEvent = {
    'isTrusted': boolean,
    'key': string,
    'code': string,
    'location': number,
    'ctrlKey':boolean
}

export type customMouseEvent = {
    'clientX': MouseEvent['clientX'], 
    'clientY': MouseEvent['clientY']
}

export type customClickEvent = {
    'Mouse Button': number,
    'Client Position': number[],
    'Page position': number[],
    'Mouse position': number[],
    'Click count': number,
}

export type customDeviceMotion = {
    'Acceleration along X axis:': number | null,
    'Acceleration along Y axis:': number | null,
    'Acceleration along Z axis:': number | null,
    'Acceleration including gravity along X axis:': number | null,
    'Acceleration including gravity along y axis:': number | null,
    'Acceleration including gravity along z axis:': number | null,
    'Rotation rate around Z axis (alpha):': number | null,
    'Rotation rate around X axis (beta):': number | null,
    'Rotation rate around Y axis (gamma):': number | null,
    'Data interval:': number
}

export type customDeviceOrientation = {
    'Absolute': boolean,
    'Alpha' : number | null,
    'Beta' : number | null,
    'Gamma' : number | null
}

export type connectionObj = {
    'onchange': string | null,
    'effectiveType': string,
    'rtt': number,
    'downlink': number,
    'saveData': boolean
}

export type BatteryManagerObj = {
    "Battery Level:": string,
    "Battery Charging:": boolean
}
