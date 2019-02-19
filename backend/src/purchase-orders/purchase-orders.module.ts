import { Module } from '@nestjs/common';
import { PurchaseOrdersService } from './purchase-orders.service';
import { PurchaseOrdersController } from './purchase-orders.controller';

@Module({
  providers: [PurchaseOrdersService],
  controllers: [PurchaseOrdersController]
})
export class PurchaseOrdersModule {}
