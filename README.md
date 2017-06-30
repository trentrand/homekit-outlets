# HomeKit Controlled Outlet Switches
> Self-contained HomeKit server for controlling wireless electrical outlets over radio frequency

## E2E Installation Guide:
1. Install the Raspbian operting system on your raspberry pi (username: pi / password: raspberry) and plugin an ethernet cord from your Raspberry Pi to your router.
2. Update apt-get package manager by executing `sudo apt-get update`
3. Install git using apt-get by executing `sudo apt-get install git`. Along the way, you may be prompted to type [Y/n]; in which case, simply press the 'Y' key.
4. Install Node (Raspberry Pi 3 / armv6l version) by executing the following commands -
```
wget https://nodejs.org/dist/v6.9.5/node-v6.9.5-linux-armv6l.tar.xz
tar xJvf node-v6.9.5-linux-armv6l.tar.xz
sudo mkdir -p /opt/node
sudo mv node-v6.9.5-linux-armv6l/* /opt/node/
sudo update-alternatives --install "/usr/bin/node" "node" "/opt/node/bin/node" 1
sudo update-alternatives --install "/usr/bin/npm" "npm" "/opt/node/bin/npm" 1
```
5. Now that Node is installed, install homebridge by following the instructions listed on the following website, https://github.com/nfarina/homebridge/wiki/Running-HomeBridge-on-a-Raspberry-Pi

## Hardware Setup

## Install

Install global dependencies with

`npm run-script install-globals`

Then install your HomeKit outlets server with

`npm install`

## Setup your configuration file

Before homekit-outlets can work, you must register your wireless outlet on/off radio frequency codes.

To find out your outlet's on/off codes, make sure all outlets are paired to your controller, then follow the on-screen instructions presented to you after starting the pairing helper with

  > Web app coming soon

## Run

After completing the [Install](#install) dependency tasks, start your HomeKit server with

`npm start`

Follow the on-screen instructions to pair your iOS device with the HomeKit server.

This server must remain running for HomeKit to work. For this reason, we suggest serving it on a device like the Raspberry Pi 3.

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
      "rf_on": 4265267,
      "rf_off": 4265276
    }
  ],
  "platforms": []
}

```
## Mounting Pi to filesystem
```bash
sshfs pi@homebridge.local:// /Mount -ovolname=Mount

```

## License

Copyright 2017 by Trent Rand <contact@trentrand.com>. Licensed under MIT.
