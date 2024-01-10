import { Controller, Post, Body } from '@nestjs/common';
import { ProxyCurlService } from './proxy-curl.service';
import { SearchProxyCurlDto } from './dto/search-proxy-curl.dto';

@Controller('proxy-curl')
export class ProxyCurlController {
  constructor(private readonly proxyCurlService: ProxyCurlService) {}

  @Post('search')
  async search(@Body() searchParams: SearchProxyCurlDto) {
    return this.proxyCurlService.search(searchParams);
  }
}
