import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

import Carro from './carro'

@Entity('autonomia')
export default class Autonomia {
    @PrimaryGeneratedColumn('increment')
    id_autonomia: number;

    @Column()
    kmInicial: number;

    @Column()
    kmFinal: number;

    @Column()
    tipoCombustivel: string;

    @Column()
    litroAbastecidos: number;

    @Column()
    percurso: string;

    @Column()
    mediaConsumo: number;

    @Column({ default: () => `datetime('now', 'localtime')` })
    criado: string;

//////////////////////////////////////////////////////////////////////////////

   @ManyToOne(() => Carro, carro => carro.autonomia)
    @JoinColumn({ name: 'id_carro' })
    carro: Carro; 

//////////////////////////////////////////////////////////////////////////////

}