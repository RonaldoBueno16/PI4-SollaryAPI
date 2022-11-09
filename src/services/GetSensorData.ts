import dados from '../models/dados';

export async function GetValueSensor() {
    return dados.findAll({
        limit: 1,
        order: [['createdAt', 'DESC']]
    })
}

export async function InsertSensorData(panel_chain: number, panel_voltage: number, battery_chain: number) {
    return dados.create({
        panel_chain, panel_voltage, battery_chain 
    })
}