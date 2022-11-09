import { Request, Response } from "express";
import { GetValueSensor } from "../../services/GetSensorData";

export const SensorLastRecord = async (req: Request, res: Response) => {
    try {
        const response = await GetValueSensor();

        return res.status(200).json(response);

    } catch (error) {
        return res.status(500).json({
            success: false,
            data: {}
        })
    }
}