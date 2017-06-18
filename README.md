# HomeKit Controlled Outlet Switches
> Self-contained HomeKit server for controlling wireless electrical outlets over radio frequency

## Install

After installing homebridge globally, install your HomeKit outlets server with

`npm install`

###### Install Details
This will run the build task in this directories gulpfile, then change current working directory to  `./bridge/accessories/homebridge-rf-outlet/` and run it's gulpfile.

The `homebridge-rf-outlet/` gulpfile compiles the TypeScript source to Javascript.

## Run

After completing the [Install](#install) dependency task, start your HomeKit server with

`npm start`

Follow the on-screen instructions to pair your iOS device with the HomeKit server.

## License

Copyright 2017 by Trent Rand <contact@trentrand.com>. Licensed under MIT.
