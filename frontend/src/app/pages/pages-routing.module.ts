import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {NewProductComponent} from "./products/new-product/new-product.component";
import {ProductsComponent} from "./products/products.component";
import {PurchaseOrdersComponent} from "./purchase-orders/purchase-orders.component";
import {NewPurchaseOrderComponent} from "./purchase-orders/new-purchase-order/new-purchase-order.component";
import {NotFoundComponent} from "./miscellaneous/not-found/not-found.component";
import {SalesOrdersComponent} from "./sales-orders/sales-orders.component";
import {NewSalesOrderComponent} from "./sales-orders/new-sales-order/new-sales-order.component";

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'newProduct',
      component: NewProductComponent,
    },
    {
      path: 'products',
      component: ProductsComponent,
    },
    {
      path: 'purchaseOrders',
      component: PurchaseOrdersComponent,
    },
    {
      path: 'newPurchaseOrder',
      component: NewPurchaseOrderComponent,
    },
    {
      path: 'salesOrders',
      component: SalesOrdersComponent,
    },
    {
      path: 'newSalesOrder',
      component: NewSalesOrderComponent,
    }, {
      path: 'miscellaneous',
      loadChildren: './miscellaneous/miscellaneous.module#MiscellaneousModule',
    }, {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    }, {
      path: '**',
      component: NotFoundComponent,
    }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
