import { Module } from '@nestjs/common';
import { PrismaService } from './config/database/prisma.service';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './modules/products/products.module';

@Module({
  imports: [ConfigModule.forRoot(), ProductsModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
