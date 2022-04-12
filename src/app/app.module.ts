import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './page/home/home.component';
import { ChitietComponent } from './page/chitiet/chitiet.component';
import { CartComponent } from './page/cart/cart.component';
import { ProductComponent } from './page/product/product.component';
import { FilterPipe } from './filter.pipe';
import { Filter1Pipe } from './filter1.pipe';
import { TinhtrangPipe } from './tinhtrang.pipe';
import { SortByPipe } from './sort-by.pipe';
import { RegisterComponent } from './page/register/register.component';
import { LoginComponent } from './page/login/login.component';
import { ThongtinComponent } from './page/thongtin/thongtin.component';
import { HoadonComponent } from './page/hoadon/hoadon.component';
import { ProductidComponent } from './page/productid/productid.component';
import { LoginadminComponent } from './admin/loginadmin/loginadmin.component';
import { SanphamadminComponent } from './admin/sanphamadmin/sanphamadmin.component';
import { DonhangadminComponent } from './admin/donhangadmin/donhangadmin.component';
import { ThongkeComponent } from './admin/thongke/thongke.component';
  
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ChitietComponent,
    CartComponent,
    ProductComponent,
    FilterPipe,
    Filter1Pipe,
    TinhtrangPipe,
    SortByPipe,
    RegisterComponent,
    LoginComponent,
    ThongtinComponent,
    HoadonComponent,
    ProductidComponent,
    LoginadminComponent,
    SanphamadminComponent,
    DonhangadminComponent,
    ThongkeComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,


  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
