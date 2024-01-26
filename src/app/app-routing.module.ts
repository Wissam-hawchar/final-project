import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CoupensComponent } from './components/coupens/coupens.component';
import { MediaComponent } from './components/media/media.component';
import { ProductsComponent } from './components/products/products.component';
import { PagesComponent } from './components/pages/pages.component';
import { SettingsComponent } from './components/settings/settings.component';
import { StatisticsComponent } from './components/statistics/statistics.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'coupens', component: CoupensComponent },
  { path: 'media', component: MediaComponent },
  { path: 'pages', component: PagesComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'statistics', component: StatisticsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
