import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProxyComponent } from './proxy/proxy.component';
import { InstallComponent } from './install/install.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'proxy', component: ProxyComponent },
  { path: 'install', component: InstallComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
