import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ProxyCurlModule } from './proxy-curl/proxy-curl.module';

import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { TrpcModule } from './trpc/trpc.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ProxyCurlModule,
    PrismaModule,
    TrpcModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
