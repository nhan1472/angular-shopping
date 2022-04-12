import { Component, OnInit } from '@angular/core';
import { Productservice } from '../../service/product.service';
import { Product } from '../../model/product.model';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  data:Product[]|any=[];
  id: number|any = 0;
  co: number = 0;
  searchText:string|any=""
  sort:string|any=""
  constructor(private productservice: Productservice,private route: ActivatedRoute) { 
    route.params.subscribe(params => { this.id = params['id']; });
  }
  cart:Product[]=[];
  ngOnInit(): void {
    if(this.id)
    {
      this.getid()
    }
    else{
      this.getAll()
    }
    this.cart=this.readData()
  }
  getid()
  {
    this.productservice.getProductsid(this.id).then(res=>{
      if(res==undefined)
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
  getAll(){
    this.productservice.getProducts().then(res=>{
      this.data=res
    })
    .catch(()=>{
      alert("loi roi")
    })
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
      window.location.reload();
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
  nhan(i:number)
  {
    window.location.assign("http://localhost:4200/products/"+i)
  }
}
