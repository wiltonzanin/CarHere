import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';

import Usuario from './usuarios';
import Imagens_carro from './imagens_carro';

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

    @ManyToOne(() => Usuario, usuario => usuario.carros)
    @JoinColumn({ name: 'id_usuario' })
    usuario: Usuario;

    @OneToMany(() => Imagens_carro, imagens_carro => imagens_carro.carro, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'id_carro' })
    images: Imagens_carro[]
}