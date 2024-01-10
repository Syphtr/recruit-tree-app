import { Module } from '@nestjs/common';
import { ProxyCurlService } from './proxy-curl.service';
import { ProxyCurlController } from './proxy-curl.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [ProxyCurlController],
  providers: [ProxyCurlService],
  exports: [ProxyCurlService],
})
export class ProxyCurlModule {}
