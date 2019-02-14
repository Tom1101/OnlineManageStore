import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { NewProductComponent } from './products/new-product/new-product.component';
import { ProductsComponent } from './products/products.component';
import { PurchaseOrdersComponent } from './purchase-orders/purchase-orders.component';
import { NewPurchaseOrderComponent } from './purchase-orders/new-purchase-order/new-purchase-order.component';
import { SalesOrdersComponent } from './sales-orders/sales-orders.component';
import { NewSalesOrderComponent } from './sales-orders/new-sales-order/new-sales-order.component';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    MiscellaneousModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    NewProductComponent,
    ProductsComponent,
    PurchaseOrdersComponent,
    NewPurchaseOrderComponent,
    SalesOrdersComponent,
    NewSalesOrderComponent,
  ],
})
export class PagesModule {
}
