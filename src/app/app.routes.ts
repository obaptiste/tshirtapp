import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { BookingsComponent } from './bookings';
import { ProductsComponent } from './products';
import { ContactComponent } from './contact';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'bookings', component: BookingsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'detail', loadChildren: './+detail#DetailModule'},
  { path: 'barrel', loadChildren: './+barrel#BarrelModule'},
  { path: '**',    component: NoContentComponent },
];
