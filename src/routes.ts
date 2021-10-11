import { Router } from "express";

import CadastroContoller from "./controller/CadastroContoller";


const routes = Router();

routes.post('/cadastro', CadastroContoller.create);
routes.put('/cadastro/:id', CadastroContoller.update);
routes.get('/cadastro', CadastroContoller.list);
routes.get('/cadastro/:id', CadastroContoller.find);
routes.delete('/cadastro/:id', CadastroContoller.delete);

export default routes; 