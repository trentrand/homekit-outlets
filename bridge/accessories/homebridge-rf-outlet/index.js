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
var Service, Characteristic;
var Config = (function () {
    function Config() {
        this.type = 'Light'; // only 'Light' is supported right now, submit a PR!
        this.manufacturer = '';
        this.model = '';
        this.serial = '';
    }
    return Config;
}());
var OutletAccessory = (function () {
    function OutletAccessory(log, config) {
        var _this = this;
        // Set the power state of this outlet
        this.setPowerState = function (powerStateOn, callback) {
            var state = powerStateOn ? "on" : "off";
            _this.log("Turning " + _this.config.name + " " + state);
        };
        // React to the 'identify' HAP-NodeJS Accessory request
        // https://github.com/KhaosT/HAP-NodeJS/blob/master/lib/Accessory.js#L32-L38
        this.identify = function (callback) {
            _this.log(_this.config.name + " was identified.");
            callback();
        };
        // Register this outlets required (and optional) services
        this.getServices = function () {
            var outletService;
            if (_this.config.type == "Light") {
                outletService = new Service.Lightbulb(_this.config.name);
            }
            outletService.getCharacteristic(Characteristic.On)
                .on('set', _this.setPowerState.bind(_this));
            var informationService = new Service.AccessoryInformation();
            informationService
                .setCharacteristic(Characteristic.Manufacturer, _this.config.manufacturer)
                .setCharacteristic(Characteristic.Model, _this.config.model)
                .setCharacteristic(Characteristic.SerialNumber, _this.config.serial);
            return [informationService, outletService];
        };
        // Register accessory information
        this.config = config;
        this.log = log;
        this.log("Starting device " + this.config.name + "...");
    }
    return OutletAccessory;
}());
module.exports = function (homebridge) {
    Service = homebridge.hap.Service;
    Characteristic = homebridge.hap.Characteristic;
    homebridge.registerAccessory("homebridge-outlet", "Outlet", OutletAccessory);
};
