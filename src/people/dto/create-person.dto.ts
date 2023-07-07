import { ApiProperty } from '@nestjs/swagger';

export class CreatePersonDto {
  @ApiProperty({
    type: String,
    description: 'name',
    example: 'Antonio',
  })
  name: string;
}
