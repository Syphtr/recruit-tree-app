import {
  Controller,
  Post,
  Get,
  Body,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProxyCurlService } from './proxy-curl.service';
import { SearchProxyCurlDto } from './dto/search-proxy-curl.dto';
import { Express } from 'express';

@Controller('proxy-curl')
export class ProxyCurlController {
  constructor(private readonly proxyCurlService: ProxyCurlService) {}

  @Post('search')
  async search(@Body() searchParams: SearchProxyCurlDto) {
    return this.proxyCurlService.search(searchParams);
  }

  @Get('hello')
  getHello() {
    return 'hello';
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    const fileContent = file.buffer.toString('utf-8');

    try {
      const data = JSON.parse(fileContent);
      // Handle the parsed data (e.g., save to the database using Prisma)
      this.proxyCurlService.saveProfiles(data.results);

      return {
        success: true,
        message: 'File content parsed and processed successfully',
        data: data.results,
      };
    } catch (error) {
      console.error('Error parsing file content:', error);
      return { success: false, message: 'Error parsing file content' };
    }
  }

  @Post('cleanDb')
  cleanDb() {
    try {
      this.proxyCurlService.cleanDb();
      return 'Db clean';
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  }
}
