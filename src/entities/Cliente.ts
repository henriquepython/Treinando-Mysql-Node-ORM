import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm'
import { ClienteTelefone } from './ClienteTelefone';
import { Endereco } from './Endereco';

@Entity("tab_cliente")
export class Cliente{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({name:"cpf_cnpj"})
    cpfCnpj: string;

    @Column()
    nome: string;

    @Column()
    ativo: boolean;

    @OneToOne(()=>Endereco, {cascade: true, eager: true})
    @JoinColumn({name:"cd_endereco"})
    endereco:Endereco;

    @OneToMany(() => ClienteTelefone, tel => tel.cliente,
    {cascade: true, eager: true})
    telefones: ClienteTelefone[];

    @CreateDateColumn({name:"dt_inclusao"})
    dataInclusao:Date;

    @UpdateDateColumn({name:"dt_alteracao"})
    dataAlteracao:Date;

}