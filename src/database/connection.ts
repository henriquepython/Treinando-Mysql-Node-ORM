//ação de disponibilizar o banco
import knex from "knex";
import knexFile from "../../knexfile";
export default knex(knexFile['development']);
console.log("Conexão realizada com sucesso !");