import { Component, OnInit } from '@angular/core';
import { Productservice } from '../../service/product.service';
import { Product } from '../../model/product.model';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-productid',
  templateUrl: './productid.component.html',
  styleUrls: ['./productid.component.scss']
})
export class ProductidComponent implements OnInit {
  data:Product[]|any=[];
  id: number|any = 0;
  co: number = 0;
  a: number = 0;
 
  searchText:string|any=""
  sort:string|any=""
  constructor(private productservice: Productservice,private route: ActivatedRoute) { 
    route.params.subscribe(params => { this.id = params['id']; });
    
  }
  cart:Product[]=[];
  ngOnInit(): void {
    this.getidmenu()
    this.cart=this.readData()
  }

  getidmenu()
  {
    this.productservice.getmenuid(this.id).then(res=>{
      this.data=res
    })
  }
  nhan(i:number)
  {
    window.location.assign("http://localhost:4200/menu/"+i)
  }
  addcart(i:Product)
  {
    let d:number=0
    this.cart.forEach(e=>{
      if(e.id==i.id)
      {
        e.sl++
        d=1
      }
    })
    if(d==1)
    {
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
  readData(){
    let data = localStorage.getItem('cart')
    if(data !=null)
    {
      return JSON.parse(data);
    }
    return [];
  }
}
