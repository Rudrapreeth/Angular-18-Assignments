import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'product',
    loadComponent: () =>
      import('product/Component').then(m => m.ProductComponent),  
  },
  {
    path: 'flight',
    loadComponent: () =>
      import('flight/Component').then(m => m.FlightComponent),  
  },
  {
    path: '**',
    redirectTo: '/flight',  
  }
];
