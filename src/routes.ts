import { Router } from "express";

import CadastroContoller from "./controller/CadastroContoller";


const routes = Router();

routes.post('/cadastro', CadastroContoller.create);

routes.put('/cadastro', CadastroContoller.update);

routes.get('/cadastro', CadastroContoller.list);

export default routes; 