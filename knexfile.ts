//confiuração de conexão com banco de dados
export default {
    development: {
        client: 'mysql2',
        connection: {
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'db_xp'
        }
    },
};