import { Request, Response } from 'express';
import {getCustomRepository} from 'typeorm';

import {CadastroRepository} from "../repositories/CadastroRepository";



export default {
    async create(req: Request, res: Response) {
        const {nome, cpf} = req.body;
        var data = {cpf, nome};
        
        const repository = getCustomRepository(CadastroRepository);
        data = await repository.save(data); 

        return res.status(201).json({ data:data});
    },
    async list(req: Request, res: Response) {
        const repository = getCustomRepository(CadastroRepository);
        const data = await repository.find();
        
        return res.status(200).json({ data:data });
    },
    async find(req: Request, res: Response) {
        const { id } = req.params;
        const repository = getCustomRepository(CadastroRepository);
        const cadastro = await repository.findOne(id);
        
        return res.status(200).json({ data:cadastro });
    },
    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { nome, cpf } = req.body;
        const data = {cpf, nome};

        const repository = getCustomRepository(CadastroRepository);
        await repository.update( id, data);

        return res.status(200).json({ data:"cadastro atualizado com sucesso!"});
    },
    async delete(req: Request, res: Response) {
        const { id } = req.params;
        const repository = getCustomRepository(CadastroRepository);
        await repository.delete( id);
        
        
        return res.status(200).json({ message: 'Registro excluido com sucesso!'});
    }
}