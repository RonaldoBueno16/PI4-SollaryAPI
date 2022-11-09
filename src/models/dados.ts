import { DataTypes } from 'sequelize';
import sequelize from "../config/sequelize";

const Model = sequelize.define('dados', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    panel_chain: {
        type: DataTypes.FLOAT
    },
    panel_voltage: {
        type: DataTypes.FLOAT
    },
    battery_chain: {
        type: DataTypes.FLOAT
    }
});

Model.sync().then(() => {
    console.log("Tabela criada com sucesso");
})

export default Model;