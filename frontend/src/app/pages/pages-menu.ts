import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Trang chủ',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Sản phẩm',
    icon: 'nb-compose',
    children: [
      {
        title: 'Danh sách sản phẩm',
        icon: 'nb-list',
        link: '/pages/products',
      },
      {
        title: 'Thêm sản phẩm mới',
        icon: 'nb-plus-circled',
        link: '/pages/newProduct',
      }
    ],
  },
  {
    title: 'Mua vào',
    icon: 'nb-arrow-thin-left',
    children: [
      {
        title: 'Danh sách mua vào',
        icon: 'nb-list',
        link: '/pages/purchaseOrders',
      },
      {
        title: 'Thêm mua vào mới',
        icon: 'nb-plus-circled',
        link: '/pages/newPurchaseOrder',
      }
    ],
  },
  {
    title: 'Bán ra',
    icon: 'nb-arrow-thin-right',
    children: [
      {
        title: 'Danh sách bán ra',
        icon: 'nb-list',
        link: '/pages/salesOrders',
      },
      {
        title: 'Thêm bán ra mới',
        icon: 'nb-plus-circled',
        link: '/pages/newSalesOrder',
      }
    ],
  },
  {
    title: 'Cài đặt',
    icon: 'nb-gear',
    children: [
      {
        title: 'Tỷ giá',
        icon: 'nb-bar-chart',
        link: '/pages/salesOrders',
      },
      {
        title: 'Đại lý',
        icon: 'nb-person',
        link: '/pages/newSalesOrder',
      },
      {
        title: 'Giao hàng',
        icon: 'nb-arrow-retweet',
        link: '/pages/newSalesOrder',
      }
    ],
  }
];
