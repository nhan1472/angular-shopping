import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Product } from 'src/app/model/product.model';
import { Productservice } from '../../service/product.service';

@Component({
  selector: 'app-sanphamadmin',
  templateUrl: './sanphamadmin.component.html',
  styleUrls: ['./sanphamadmin.component.scss']
})
export class SanphamadminComponent implements OnInit {
  searchText:string|any=""
  sort:string|any=""
  menu:number|any=0
  co:boolean|any=false
  co1:boolean|any=false
  data:Product|any=new Product
  data1:Product|any=new Product
  data2:Product|any=new Product
  constructor(private productservice: Productservice) { }

  ngOnInit(): void {
    this.getsanpham()
  }
  getsanpham()
  {
    this.productservice.getSanpham().then(res=>{
      this.data=res
    })
  }
  xoa(i:any)
  {

    if(confirm("ban co muon xoa"+i.name))
    {
      this.productservice.deletesanpham(i.id).then(res=>{
        alert(res)
      })
      location.reload()
    }
  }
  sua(i:any)
  {
    this.data2=i
    this.co1=!this.co1
  }
  them()
  {
    this.co=!this.co
  }
  onSubmit(frm:NgForm)
  {
    if(!frm.valid)
    {
      alert("khong de trong")
    }
    else
    {
      this.productservice.themsanpham(this.data1).then(res=>{
        alert(res)
        location.reload()
      })
    }

  }
  onSubmit1(frm:NgForm)
  {
    if(!frm.valid)
    {
      alert("khong de trong")
    }
    else
    {
      this.productservice.suasanpham(this.data2.id,this.data2).then(res=>
        {
          alert(res)
          location.reload()
        }
      )
    }
  }
}
