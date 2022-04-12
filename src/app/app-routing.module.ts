import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChitietComponent } from './page/chitiet/chitiet.component';
import { HomeComponent } from './page/home/home.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { CartComponent } from './page/cart/cart.component';
import { ProductComponent } from './page/product/product.component';
import { RegisterComponent } from './page/register/register.component';
import { LoginComponent } from './page/login/login.component';
import { ThongtinComponent } from './page/thongtin/thongtin.component';
import {AuthGuard} from './auth.guard'
import {AuthadminGuard} from './auth.guardadmin'
import { HoadonComponent } from './page/hoadon/hoadon.component';
import { ProductidComponent } from './page/productid/productid.component';
import { SanphamadminComponent } from './admin/sanphamadmin/sanphamadmin.component';
import { LoginadminComponent } from './admin/loginadmin/loginadmin.component';
import { DonhangadminComponent } from './admin/donhangadmin/donhangadmin.component';
import { ThongkeComponent } from './admin/thongke/thongke.component';


const routes: Routes = [
  {path:'',component:HomeComponent,},
  {path:'product/:id',component:ChitietComponent,},
  {path:'cart',component:CartComponent,},
  {path:'products',component:ProductComponent,},
  {path:'products/:id',component:ProductComponent,},
  {path:'menu/:id',component:ProductidComponent,},
  {path:'register',component:RegisterComponent,},
  {path:'login',component:LoginComponent,},
  {path:'thongtin',  canActivate:[AuthGuard],component:ThongtinComponent,},
  {path:'hoadon',  canActivate:[AuthGuard],component:HoadonComponent,},
  {path:'sanpham',  canActivate:[AuthadminGuard],component:SanphamadminComponent,},
  {path:'donhang',  canActivate:[AuthadminGuard],component:DonhangadminComponent,},
  {path:'thongke',  canActivate:[AuthadminGuard],component:ThongkeComponent,},
  {path:'loginadmin', component:LoginadminComponent,},


  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
