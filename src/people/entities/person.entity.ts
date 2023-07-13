import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  constructor(name) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
}
