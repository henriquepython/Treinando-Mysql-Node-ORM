import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTabPedidoItem1634133141146 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tab_pedidoitem",
                columns:[
                    {name: "id", type: "integer", isPrimary: true, isGenerated: true, generationStrategy: "increment"},
                    {name: "cd_produto", type: "integer", length: "5"},
                    {name: "quant", type: "numeric", precision: 8, scale:2},
                    {name: "vl_unit", type: "numeric", precision: 8, scale:2},
                    {name: "vl_total", type: "numeric", precision:8, scale:2},
                    {name: "cd_pedido", type: "integer", length: "5"}
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tab_pedidoitem")
    }

}
