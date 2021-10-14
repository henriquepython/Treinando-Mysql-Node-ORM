import { Router } from "express";

import CadastroController from "./controller/CadastroController";
import {ClienteController} from "./controller/ClienteController";




const routes = Router();

routes.post('/cadastro', CadastroController.create);
routes.put('/cadastro/:id', CadastroController.update);
routes.get('/cadastro', CadastroController.list);
routes.get('/cadastro/:id', CadastroController.find);
routes.delete('/cadastro/:id', CadastroController.delete);

const clienteController = new ClienteController();
routes.get('/clientes', clienteController.list);
routes.get('/clientes/:id', clienteController.find);
routes.get('/clientes/cidades/:nome', clienteController.listCity);

routes.post('/clientes', clienteController.create);
routes.put('/clientes/:id', clienteController.update);
routes.delete('/clientes/:id', clienteController.delete);
routes.post('/clientes/:id/telefones', clienteController.addTel);


export default routes; 