import { Column,Entity, PrimaryGeneratedColumn, BaseEntity, ManyToOne, JoinColumn} from 'typeorm'
import { Pedido } from "./Pedido";


@Entity("tab_pedido_item")
export class PedidoItem extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name:"cd_produto"})
    produto: number;

    @Column({name:"quant"})
    quantidade: number;
    
    @Column({name:"vl_unit"})
    valorUnitario: number;

    @Column({name:"vl_total"})
    subTotal: number;

    @ManyToOne(() => Pedido, pedido => pedido.itens)
    @JoinColumn({name:"cd_pedido"})
    pedido: Pedido;
    
}