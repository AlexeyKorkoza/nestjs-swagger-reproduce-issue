import {Controller, Post, UseInterceptors} from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiConsumes,
} from '@nestjs/swagger';
import {FileInterceptor} from "@nestjs/platform-express";

import { AppService } from './app.service';
import { SportDto } from './sport.dto';
import { ResponseDto } from './response.dto';

@Controller('sports')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  @ApiCreatedResponse({
    type: ResponseDto,
  })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    type: SportDto,
  })
  @UseInterceptors(FileInterceptor('file'))
  postHello() {
    return {
      message: 'Success',
    };
  }
}
