import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from './entities/person.entity';

@Injectable()
export class PeopleService {
  constructor(
    @InjectRepository(Person)
    private PeopleRepository: Repository<Person>,
  ) {}

  create(createPersonDto: CreatePersonDto) {
    const person = this.PeopleRepository.create(createPersonDto);
    return this.PeopleRepository.save(person);
  }

  findAll(): Promise<Person[]> {
    return this.PeopleRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} person`;
  }

  update(id: number, updatePersonDto: UpdatePersonDto) {
    return `This action updates a #${id} person`;
  }

  async remove(id: number): Promise<void> {
    const person = await this.PeopleRepository.findOneBy({ id });
    if (!person) {
      throw new NotFoundException(`Registro no encontrado: ${id}`);
    }
    await this.PeopleRepository.remove(person);
  }
}
