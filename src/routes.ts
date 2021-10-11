import { Router } from "express";

import CadastroContoller from "./controller/CadastroContoller";


const routes = Router();

routes.post('/cadastro', CadastroContoller.create);

export default routes; 