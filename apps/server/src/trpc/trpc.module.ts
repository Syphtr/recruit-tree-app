import { Module } from '@nestjs/common';
import { TrpcService } from './trpc.service';
import { TrpcRouter } from './trpc.router';
import { ProxyCurlModule } from '../proxy-curl/proxy-curl.module';

@Module({
  imports: [ProxyCurlModule],
  controllers: [],
  providers: [TrpcRouter, TrpcService],
})
export class TrpcModule {}
