import { Module } from '@nestjs/common';
import { SalesOrdersService } from './sales-orders.service';
import { SalesOrdersController } from './sales-orders.controller';

@Module({
  providers: [SalesOrdersService],
  controllers: [SalesOrdersController]
})
export class SalesOrdersModule {}
