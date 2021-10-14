import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { ProdutoRepository} from "../repositories/ProdutoRepository";

export class ProdutoController {
    async create (req: Request, res:Response) {
        const { codigoBarras, nome, valorUnitario } = req.body;
        const repository = getCustomRepository(ProdutoRepository);

        var produto = {codigoBarras, nome, valorUnitario};

        produto = await repository.save(produto);

        return res.status(200).json(produto);
    }
    async list (req: Request, res:Response) {
        const repository = getCustomRepository(ProdutoRepository);

        const data = await repository.save(produto);
    }
}