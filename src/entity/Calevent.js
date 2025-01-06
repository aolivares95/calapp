import "reflect-metadata";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Calevent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  uuid: string;

  @Column()
  title: string;

  @Column()
  start: string;

  @Column()
  end: string;

  @Column()
  allday: boolean;
}
