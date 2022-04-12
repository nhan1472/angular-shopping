import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/model/admin.model';
import { Product } from 'src/app/model/product.model';
import { User } from 'src/app/model/user.model';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  a:number=0
  cart:Product[]=[]
  user:User=new User
  admin:Admin=new Admin
  co:number=0
  co1:number=0
  constructor() { }

  ngOnInit(): void {
    this.cart=this.readData()
    this.a=this.cart.length
    this.user=this.readData1()
    if(this.readData1()==0)
    {
      this.co=1
    }
    if(this.readData2()!=0)
    {
      this.admin=this.readData2()
      this.co1=1
    }
  }
  logout()
  {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    location.reload()
  }
  logout1()
  {
    localStorage.removeItem("admin");
    localStorage.removeItem("token1");
    location.reload()
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
    return 0
  }
  readData2(){
    let data = localStorage.getItem('admin')
    if(data !=null)
    {
      return JSON.parse(data);
    }
    return 0
  }
}
