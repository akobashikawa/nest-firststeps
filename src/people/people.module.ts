import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeopleService } from './people.service';
import { PeopleController } from './people.controller';
import { Person } from './entities/person.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Person])],
  exports: [TypeOrmModule],
  controllers: [PeopleController],
  providers: [PeopleService],
})
export class PeopleModule {}
