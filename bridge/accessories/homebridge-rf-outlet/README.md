# Homebridge RF Outlet (Accessory Plugin)

This is an accessory plugin for [Homebridge](https://github.com/nfarina/homebridge) providing an interface to manage and control radio frequency (433 Mhz by default) power outlets.

## Install

After installing homebridge globally, install this plugin with

`npm install -g homebridge-rf-outlet`

## Configuration

Add one accessory to your `config.json` for each individual radio frequency power outlet you'd like to control.

### Example config.json

```json
{
  "bridge": {
    "name": "Outlet Bridge",
    "username": "FC:10:A7:DD:90:B5",
    "port": 51826,
    "pin": "380-81-301"
  },
  "description": "Self-contained HomeKit server for controlling wireless electrical outlets over radio frequency",
  "accessories": [
    {
      "accessory": "Outlet",
      "name": "Bedroom Lamp",
      "type": "Light",
      "manufacturer": "Ikea",
      "model": "SKEBY Lamp",
      "serial": "",
      "rf_on": 4480259,
      "rf_off": 4480268
    }
  ],
  "platforms": []
}

```

## License

Copyright 2017 by Trent Rand <contact@trentrand.com>. Licensed under MIT.
