import { Request, Response } from "express";
import { getConnection, getCustomRepository } from "typeorm";
import { PedidoRepository} from "../repositories/PedidoRepository";
import {PedidoView} from "../entities/PedidoView";

export class PedidoController {
    async create (req: Request, res:Response) {
        const { cliente, dataHora, valorTotal, Itens } = req.body;
        const repository = getCustomRepository(PedidoRepository);

        var pedido = { cliente, dataHora, valorTotal, Itens };

        console.log(pedido)

        pedido = await repository.save(pedido);

        return res.status(200).json(pedido);
    }
    async list (req: Request, res:Response) {
        const repository = getCustomRepository(PedidoRepository);


        const data = await repository.find();
        return res.status(200).json({ data:data });
    }
    async find (req: Request, res:Response) {
        return res.status(200).json ({ data:"precisa implementar" });
    }
    async view (req: Request, res:Response){
        const { nome } = req.params;

        const data = await getConnection()
        .getRepository(PedidoView)
        .createQueryBuilder("pedidos")
        .where("pedidos.nome = :nome", { nome: nome })
        .getMany();

        return res.status(200).json({ data:data});
    }
}