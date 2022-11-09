import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
    'pi',
    'root',
    'R1Avvjp6nqy1',
    {
        host: '198.100.155.70',
        dialect: 'mysql'
    }
)

sequelize.authenticate().then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
}).catch(error => {
    console.error("Falha ao conectar com o banco de dados: ", error);
})

export default sequelize;