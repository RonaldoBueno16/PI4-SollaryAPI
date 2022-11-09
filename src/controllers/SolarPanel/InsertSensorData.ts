import { Request, Response } from "express";
import { InsertSensorData } from "../../services/GetSensorData";

interface BodyParameters {
    panel_chain: number;
    panel_voltage: number;
    battery_chain: number;
}

export const InsertController = async (req: Request, res: Response) => {
    const body: BodyParameters = req.body as BodyParameters;
    
    try {
        const response = await InsertSensorData(body.panel_chain, body.panel_voltage, body.battery_chain);

        return res.status(200).json({
            success: true,
            data: {...response.dataValues}
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            data: {}
        })
    }
}