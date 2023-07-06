import { ApiPropertyOptional } from '@nestjs/swagger';

export class HelloDto {
  @ApiPropertyOptional({
    type: String,
    description: 'name',
    example: 'Antonio',
  })
  name: string;
}
