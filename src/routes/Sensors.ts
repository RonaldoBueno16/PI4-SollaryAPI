import { Router } from "express";
import { InsertController } from "../controllers/SolarPanel/InsertSensorData";
import { SensorLastRecord } from "../controllers/SolarPanel/SensorLastRecord";

const router = Router();

router.get('/api/v1/sensor_lastrecord', SensorLastRecord);
router.post('/api/v1/sensor', InsertController);

module.exports = router;