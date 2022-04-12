import { Component, OnInit } from '@angular/core';
import { Productservice } from '../../service/product.service';
import { Product } from '../../model/product.model'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data:Product[]|any=[];
  constructor(private productservice: Productservice) { }
  cart:Product[]=[];
  ngOnInit(): void {
    this.getAll()
    this.cart=this.readData()
  }
  getAll(){
    this.productservice.getProduct().then(res=>{
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
