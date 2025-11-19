const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const mqtt = require('mqtt')
const bodyParser = require('body-parser');
const cors = require('cors')

dotenv.config()

const app = express()
app.use(bodyParser.json());
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))

const mqttClient = mqtt.connect('mqtt://test.mosquitto.org');

mqttClient.on('connect', () => {
  console.log('Connected to MQTT broker');
});

app.post('/send-message', (req, res) => {
  const topic = process.env.MQTT_TOPIC;
  const message = req.body.message;

  mqttClient.publish(topic, message, (err) => {
    if (err) {
      console.error('Failed to publish message', err);
      res.status(500).send('Failed to publish message');
    } else {
      res.send('Message published successfully');
    }
  });
});

app.get("/config", (req, res) => {
  res.json({
    url: process.env.APP_URL,
  });
});

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`)
})

module.exports = app;
