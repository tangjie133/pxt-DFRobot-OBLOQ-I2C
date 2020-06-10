input.onButtonPressed(Button.A, function () {
    microIoT.microIoT_SendMessage("mess", microIoT.TOPIC.topic_0)
})
input.onButtonPressed(Button.AB, function () {
    microIoT.microIoT_http_TK_GET("2020")
})
input.onButtonPressed(Button.B, function () {
    microIoT.microIoT_http_post("Hi", "DFRobot", "2020")
})
microIoT.microIoT_WIFI("dfrobotGuest", "dfrobot2020")
microIoT.microIoT_MQTT(
"yourIotId",
"yourIotPwd",
"yourIotTopic",
microIoT.SERVERS.China
)
microIoT.microIoT_http_IFTTT("yourEvent", "yourKey")
microIoT.microIoT_ThingSpeak_configura("yourKey")
