import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import Carro from './carro'

@Entity('imagens_carros')
export default class Image {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    path: string

//////////////////////////////////////////////////////////////////////////////

    @ManyToOne(() => Carro, carro => carro.images)
    @JoinColumn({ name: 'id_carro' })
    carro: Carro

//////////////////////////////////////////////////////////////////////////////

}