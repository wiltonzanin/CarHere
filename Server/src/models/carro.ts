import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

import Usuario from './usuarios'

@Entity('carro')
export default class Carro {
    @PrimaryGeneratedColumn('increment')
    id_carro: number;

    @Column()
    marca: string;

    @Column()
    modelo: string;

    @Column()
    motorizacao: string;

    @Column()
    ano: number;

    @Column()
    combustivel: string;

    @Column()
    fotoCarro: string;

    @ManyToOne(() => Usuario, usuario => usuario.carros)
    @JoinColumn({ name: 'id_usuario' })
    usuario: Usuario;
}