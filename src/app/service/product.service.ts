
import { Injectable, Injector } from '@angular/core';
import { BaseService } from './base.service';
import { User } from '../model/user.model';
import { Res } from '../model/res.model';
import { Product } from '../model/product.model';
@Injectable({
  providedIn: 'root'
})
export class Productservice extends BaseService{
    data:any=false
    data1:any=false
 constructor(inject:Injector)
 {
    super(inject)
 }
 suasanpham(params:any,body:any)
 {
    return this.patch("suasanpham/"+params,body)
 }
  themsanpham(body:any)
  {
    return this.post("themsanpham",body)
  }
  getThongke()
    {
        return this.getAll("thongke")
    }
    getSanpham()
    {
        return this.getAll("sanpham")
    }
    deletesanpham(params:any)
    {
     
        return this.delete("xoasanpham/"+params,params)
    }
    patchhuy(body:any)
    {
        return this.patch("hoadon",body)
    }
    patchgiao(body:any)
    {
        return this.patch("hoadon1",body)
    }
    patchxong(body:any)
    {
        return this.patch("hoadon2",body)
    }
    getDonhang()
    {
        return this.getAll("donhang")
    }
    checkLogin()
    {
        let strUser = localStorage.getItem('token');
        if(strUser){
          let user = JSON.parse(strUser);
          this.gettoken("login",user).then(res=>{
                this.data=res
          })
        }
        if(this.data==true)
        {
        return true
        }
        else {
            return false;
        }
     }
     checkLogin1()
     {
         let strUser = localStorage.getItem('token1');
           if(strUser){
            let user = JSON.parse(strUser);
            this.gettoken("loginadmin",user).then(res=>{
                  this.data1=res
            })
          }
          if(this.data1==true)
          {
          return true
          }
          else {
              return false;
          }
      
      }
     pacthtt(body:any)
     {
        return this.patch("sua",body)
     }
     getmenuid(params:any)
     {
        return this.getId("menu/"+params,params)
     }
     gethoadon1(body:any)
     {
        return this.getbody("hoadon",body)
     }
     postCart(body:any)
     {
        return this.post("cart",body)
     }
     postBinhluan(body:any)
     {
        return this.post("binhluan",body)
     }
     getProductid(params:any)
    { 
        return this.getId("products/"+params,params)
       
    }
    getProductsid(params:any)
    { 
        return this.getId("product/"+params,params)
       
    }
    postUser(body:any)
    {
        return this.post("register",body)
    }
    postUserLogin(body:any)
    {
        return this.post("login",body)
    }
    postUserLoginadmin(body:any)
    {
        return this.post("loginadmin",body)
    }
    getProduct()
    {
        return this.getAll("products")
    }
    getProducts()
    {
        return this.getAll("product")
    }
}