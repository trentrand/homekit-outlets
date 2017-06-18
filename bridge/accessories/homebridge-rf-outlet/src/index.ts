'use strict';

// Example Accessory Configuration (see config-example.json) -
//   {
//     "accessory": "Outlet",
//     "name": "Bedroom Lamp",
//     "type": "Light",
//     "manufacturer": "Ikea",
//     "model": "SKEBY Lamp",
//     "serial": "",
//     "rf_on": 4480259,
//     "rf_off": 4480268
//   }

let Service: any, Characteristic: any;

export = function (homebridge: any) {
  Service = homebridge.hap.Service;
  Characteristic = homebridge.hap.Characteristic;
  homebridge.registerAccessory("homebridge-outlet", "Outlet", OutletAccessory);
}

class Config {
  name: string;
  type: 'Light' = 'Light'; // only 'Light' is supported right now, submit a PR!
  manufacturer?: string = '';
  model?: string = '';
  serial?: string = '';
  rf_on: string;
  rf_off: string;
}

class OutletAccessory {
  log: (message: any) => void;
  config: Config;
  powerState: boolean;

  constructor(log: (message: any) => void, config: Config) {
    // Register accessory information
    this.config = config;

    // Register accessory default power state as 'off'
    this.powerState = false;

    this.log = log;
    this.log("Starting device " + this.config.name + "...");
  }

  // Get the power state of this outlet
  getPowerState = (callback: any) => {
    this.log('Power state for ' + this.config.name + ' is ' + this.powerState);
    callback(null, this.powerState);
  }

  // Set the power state of this outlet
  setPowerState = (powerState: boolean, callback: any) => {
      this.powerState = powerState;
      this.log("Turning " + this.config.name + " " + (this.powerState == true ? "on" : "off"));
      callback(null);
  }

  // React to the 'identify' HAP-NodeJS Accessory request
  // https://github.com/KhaosT/HAP-NodeJS/blob/master/lib/Accessory.js#L32-L38
  identify = (callback: any) => {
      this.log(this.config.name + " was identified.");
      callback();
  }

  // Register this outlets required (and optional) services
  getServices = () => {
    var outletService;
    if (this.config.type == "Light")  {
      outletService = new Service.Lightbulb(this.config.name);
      // Bind state value to required Lightbulb charactertisics
      outletService.getCharacteristic(Characteristic.On)
        .on('get', this.getPowerState.bind(this))
        .on('set', this.setPowerState.bind(this));
    }

    var informationService = new Service.AccessoryInformation()
      .setCharacteristic(Characteristic.Manufacturer, this.config.manufacturer)
      .setCharacteristic(Characteristic.Model, this.config.model)
      .setCharacteristic(Characteristic.SerialNumber, this.config.serial);

    return [informationService, outletService];
  }
}
