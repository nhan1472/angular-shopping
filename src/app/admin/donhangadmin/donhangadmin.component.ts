import { Component, OnInit } from '@angular/core';
import { Donhang } from 'src/app/model/donhang.model';
import { Productservice } from '../../service/product.service';
@Component({
  selector: 'app-donhangadmin',
  templateUrl: './donhangadmin.component.html',
  styleUrls: ['./donhangadmin.component.scss']
})
export class DonhangadminComponent implements OnInit {
  data:Donhang|any=new  Donhang
  constructor(private productservice: Productservice) { }
  menu:number|any=4
  co:boolean=false
  ngOnInit(): void {
    this.getdonhang()
  }
  getdonhang()
  {
    this.productservice.getDonhang().then(res=>{
      this.data=res
    })
  }
  giao(i:any)
  {
    this.productservice.patchgiao(i).then(res=>{
      location.reload()
    })
  }
  xong(i:any)
  {
    this.productservice.patchxong(i).then(res=>{
      location.reload()
    })
  }
}
