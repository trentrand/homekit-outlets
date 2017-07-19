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

6. Clone homekit-outlets to your raspberry pi with,

`git clone http://github.com/trentrand/homekit-outlets.git`

7. Globally install the [homebridge-rf-outlet](https://github.com/trentrand/homebridge-rf-outlet) accessory plugin for Homebridge with,

`sudo npm install -g homebridge-rf-outlet`

8. Setup homekit-outlets to run on startup by following these steps on your homebridge server -

Add the following content to `homebridge` with,

`sudo nano /etc/default/homebridge`

```
# Defaults / Configuration options for homebridge
# The following settings tells homebridge where to find the config.json file and where to persist the data (i.e. pairing and others)
HOMEBRIDGE_OPTS=-U /var/lib/homebridge

# If you uncomment the following line, homebridge will log more
# You can display this via systemd's journalctl: journalctl -f -u homebridge
# DEBUG=*
```

Add the following content to `homebridge.service` with,

`sudo nano /etc/systemd/system/homebridge.service`

```
[Unit]
Description=Node.js HomeKit Server
After=syslog.target network-online.target

[Service]
Type=simple
User=homebridge
EnvironmentFile=/etc/default/homebridge
# Adapt this to your specific setup (could be /usr/bin/homebridge)
# See comments below for more information
ExecStart=/home/pi/.nvm/versions/node/v6.11.0/bin/homebridge $HOMEBRIDGE_OPTS
Restart=on-failure
RestartSec=10
KillMode=process

[Install]
WantedBy=multi-user.target
```

Then execute the following commands,
```
sudo useradd -M --system homebridge
sudo mkdir /var/lib/homebridge
sudo cp -r ~/.homebridge/persist /var/lib/homebridge
sudo chmod -R 0777 /var/lib/homebridge
sudo systemctl daemon-reload
sudo systemctl enable homebridge
sudo systemctl start homebridge
```

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
sudo mkdir ~/Server
sshfs -o idmap=user pi@homebridge.local:/home/pi/developer ~/Server

```

## License

Copyright 2017 by Trent Rand <contact@trentrand.com>. Licensed under MIT.
