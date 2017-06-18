# HomeKit Controlled Outlet Switches
> Self-contained HomeKit server for controlling wireless electrical outlets over radio frequency

## Install

After installing homebridge globally, install your HomeKit outlets server with

`npm install`

## Run

After completing the [Install](#install) dependency task, start your HomeKit server with

`npm start`

Follow the on-screen instructions to pair your iOS device with the HomeKit server.

## Configuration

Add one accessory to your `config.json` per each individual power outlet you'd like to control.

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
