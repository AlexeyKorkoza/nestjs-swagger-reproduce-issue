import {ApiProperty} from "@nestjs/swagger";

import {TypeSportEnum} from "./type-sport.enum";

export class SportDto {
  @ApiProperty({ enum: TypeSportEnum })
  typeSport: TypeSportEnum;

  @ApiProperty({ type: 'string', format: 'binary' })
  stats: any;
}
