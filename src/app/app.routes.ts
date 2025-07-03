import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./@pages/main/main.page').then( m => m.MainPage)
  },
  {
    path: 'list/:id',
    loadComponent: () => import('./@pages/main/lists/shopping-list/shopping-list.page').then( m => m.ShoppingListPage)
  },
];
