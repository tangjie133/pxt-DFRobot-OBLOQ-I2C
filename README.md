# NaturalScience

[A WIFI-IoT module that can be easily used on IFTTT ThingSpeak  EasyIoT.](无)
## Basic usage

* Wi-Fi configuration module：connect the network via configuration module

```blocks

    microIoT.microIoT_WIFI("dfrobotGuest", "dfrobot2020")

```

* MQTT platform access configuration: access to Easyiot_ CN, EasyIOT_ EN, SIOT platforms via configuration module

```blocks

    input.onButtonPressed(Button.A, function () {
        microIoT.microIoT_SendMessage("mess", microIoT.TOPIC.topic_0)
    })
    microIoT.microIoT_WIFI("dfrobotGuest", "dfrobot2020")
    microIoT.microIoT_MQTT(
        "yourIotId",
        "yourIotPwd",
        "yourIotTopic",
        microIoT.SERVERS.China
    )
    microIoT.microIoT_add_topic(microIoT.TOPIC.topic_1, "yourIotTopic")

```
* IFTTT platform configuration: access to IFTTT via configuration module  

```blocks

    input.onButtonPressed(Button.A, function () {
    microIoT.microIoT_http_post("Hi", "DFRobot", "2020")
    })
    microIoT.microIoT_WIFI("dfrobotGuest", "dfrobot2020")
    microIoT.microIoT_http_IFTTT("yourEvent", "yourKey")

```
* ThingSpeak platform configuration: send information to ThingSpeak via configuration module 

```blocks

    input.onButtonPressed(Button.A, function () {
    microIoT.microIoT_http_TK_GET("your write api key", "2020")
    })
    microIoT.microIoT_WIFI("dfrobotGuest", "dfrobot2020")


```

## License

MIT

Copyright (c) 2020, microbit/micropython Chinese community  

## Supported targets

* for PXT/microbit