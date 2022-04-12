import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product.model';
import { Productservice } from '../../service/product.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { Res } from 'src/app/model/res.model';
import { Hoadon } from 'src/app/model/hoadon.model';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
cart:Product[]=[]
sl:number=0
ary:Hoadon[]|any=[]
a:Res[]|any = []
tt:number=0
token:string=""
user:User=new User
  constructor(private router:Router,private productservice: Productservice) { }

  ngOnInit(): void {
    this.cart=this.readData()
    this.user=this.readData1()

    this.cart.forEach(e=>{
      this.sl+=e.sl
      this.tt+=e.sl*e.price
    })
    this.ary.push({
      id:this.user.id,
      sl: this.sl,
      tt:this.tt,
      cart:this.cart
    })
  }
  removeCart(i:Product)
  {
    if(confirm(`ban co muon xoa khong${i.name}`)==true)
    {
    this.cart.forEach((e,a)=>{
      if(e.img==i.img)
      {
        this.cart.splice(a,1)
      }
    })
    localStorage.removeItem("cart");
    this.saveData(this.cart)
    location.reload();

  }
  }
  saveData(arr:Product[]){
    localStorage.setItem('cart',JSON.stringify(arr));
  }
  readData(){
    let data = localStorage.getItem('cart')
    if(data !=null)
    {
      return JSON.parse(data);
    }
    return [];
  }
  readData1(){
    let data = localStorage.getItem('user')
    if(data !=null)
    {
      return JSON.parse(data);
    }
    return [];
  }
  tangsl(i:Product)
  {
    
    this.cart.forEach((e,a)=>{
      if(e.id==i.id)
      {
        e.sl++
      }
    })
    localStorage.removeItem("cart");
    this.saveData(this.cart)
    location.reload();
  }
  giamsl(i:Product)
  {
    if(i.sl==1)
    {
      i.sl=1
      localStorage.removeItem("cart");
      this.saveData(this.cart)
      location.reload();
    }
    else{
      this.cart.forEach((e,a)=>{
        if(e.id==i.id)
        {
          e.sl--
        }
      })
      localStorage.removeItem("cart");
      this.saveData(this.cart)
      location.reload();
    }
   
  }
  dathang()
  {
    if( this.cart.length==0)
    {
      alert("không có sản phẩm trong giỏ")
    }
    else{
      if(this.productservice.checkLogin())
      {
        this.productservice.postCart(this.ary[0]).then(res=>{
          this.a=res
          alert(this.a.mes)
          localStorage.removeItem("cart");
          location.reload()
        })
      }
      else{
        alert("bạn chưa đăng nhập")
      }
    }

  }
}
