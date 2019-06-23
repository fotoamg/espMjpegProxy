# esp32cam local proxy
Makes it possible to open esp32 cam stream in multiple devices/browsers.
Controll buttons still work global way as there is one camera stream and image resolution set globally.

## Current Functionalities

* hardcoded local ip/port way of reaching camera and this proxy
* multiple connection
* global image size control

## TODO

* Add configurable one place or dynamic render for IP adresses/port, currently hardcoded CAM and proxy URL


# Pictures of the page

![Image of Screen](doc/screensmall1.jpg)

## Original esp32cam tutorial page
https://randomnerdtutorials.com/esp32-cam-video-streaming-face-recognition-arduino-ide/

## Where to buy
https://www.banggood.com/Geekcreit-ESP32-CAM-WiFi-bluetooth-Camera-Module-Development-Board-ESP32-With-Camera-Module-OV2640-p-1394679.html

## How to fix build issues
The buffertools depenceny of the mjpeg proxy has a lots of visual studio related requirements.
I faced many issues installing so I collected here some hints if you have build errors like me, you can find solution here:
https://catalin.me/how-to-fix-node-js-gyp-err-cant-find-python-executable-python-on-windows/

https://github.com/nodejs/node-gyp/issues/307

Happy troubleshooting ;)
