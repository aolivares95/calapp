import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Calevent {
  @Column()
  id: number;

  @Column()
  title: string;

  @Column()
  start: string;

  @Column()
  end: string;

  @Column()
  allday: boolean;
}
