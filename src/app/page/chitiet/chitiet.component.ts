import { Component, OnInit } from '@angular/core';
import { Productservice } from '../../service/product.service';
import { Product } from '../../model/product.model';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { Res } from 'src/app/model/res.model';
import { NgForm } from '@angular/forms';
import { Binhluan } from 'src/app/model/Binhluan.model';
@Component({
  selector: 'app-chitiet',
  templateUrl: './chitiet.component.html',
  styleUrls: ['./chitiet.component.scss']
})
export class ChitietComponent implements OnInit {
   id: number|any = 0;
   data:Product[]|any=[];
   data1:User= new User;
   ary:Binhluan[]|any=[]
   cart:any[]=[]
   co:number=0
   co1:number=0
   sl:number=1
   binhluan:string=""
  constructor(private productservice: Productservice,private route: ActivatedRoute) {
    route.params.subscribe(params => { this.id = params['id']; });
   }
 
  ngOnInit(): void {
    this.getid()
    this.check()
    this.data1=this.readData()
    this.cart=this.readData1()
  }
  onBinhluan(frm:NgForm)
  {
    if(!frm.valid)
    {
      alert("bạn cần nhập nội dung")
    }
    else{
      this.ary.push({
        id:this.data1.id,
        name:this.data1.name,
        idm:this.id,
        noidung:this.binhluan
      })
      this.productservice.postBinhluan(this.ary[0]).then(res=>{
        alert(res)
        location.reload()
      })
 
    }
  }
  getid()
  {
    this.productservice.getProductid(this.id).then(res=>{
      if(!res)
      {
        this.co=1
      }
      else{
        this.data=res
      }
      
    })
    .catch(()=>{
      alert("loi roi")
    })
  } 
  tangsl()
  {
    this.data.data.sl++
  }
  giamsl()
  {
    if(this.sl==1)
    {
      this.data.data.sl=1
    }
    else{

this.data.data.sl--
    }
   
  }
  readData(){
    let data = localStorage.getItem('user')
    if(data !=null)
    {
      return JSON.parse(data);
    }
    return [];
  }
  check()
  {
    if(this.productservice.checkLogin())
    {
      this.co1=1
    }
  }
  addcart(i:Product)
  {
    let d:number=0
    this.cart.forEach(e=>{
      if(e.id==i.id)
      {
        e.sl=i.sl
        d=1
      }
    })
    if(d==1)
    {
      alert("thêm vào giỏ hàng thành công")
      localStorage.removeItem("cart");
      this.saveData(this.cart)
    }
    else{
      this.cart.push(i)
      this.saveData(this.cart);
      location.reload();
    }

  }
  saveData(arr:Product[]){
    localStorage.setItem('cart',JSON.stringify(arr));
  }
  readData1(){
    let data = localStorage.getItem('cart')
    if(data !=null)
    {
      return JSON.parse(data);
    }
    return [];
  }
}
