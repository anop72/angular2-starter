import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent, Angular2StarterAppComponent } from './';
import { DataBindingComponent } from './binding/data-binding';

export const routes: RouterConfig = [
  {path: '', redirectTo: 'app'},
  {path: 'app', component: Angular2StarterAppComponent},
  {path: 'data', component: DataBindingComponent},
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
