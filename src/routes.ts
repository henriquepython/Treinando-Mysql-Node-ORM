import { Router } from "express";

import CadastroController from "./controller/CadastroController";
import {ClienteController} from "./controller/ClienteController";
import { PedidoController } from "./controller/PedidoController";
import { ProdutoController } from "./controller/ProdutoController";




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

const produtoController = new ProdutoController();
routes.post('/produtos', produtoController.create);
routes.get('/produtos', produtoController.list);
routes.get('/produtos/:id', produtoController.find);

const pedidoController = new PedidoController();
routes.post('/pedidos', pedidoController.create);
routes.get('/pedidos', pedidoController.list);
routes.get('/pedidos/grid/:nome', pedidoController.view);
routes.get('/pedidos/:id', pedidoController.find);


export default routes; 