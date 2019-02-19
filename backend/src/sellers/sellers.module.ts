import { Module } from '@nestjs/common';
import { SellersService } from './sellers.service';
import { SellersController } from './sellers.controller';

@Module({
  providers: [SellersService],
  controllers: [SellersController]
})
export class SellersModule {}
