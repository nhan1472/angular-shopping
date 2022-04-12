import { Component, OnInit } from '@angular/core';
import { Hoadon } from 'src/app/model/hoadon.model';
import { User } from 'src/app/model/user.model';
import { Productservice } from '../../service/product.service';
@Component({
  selector: 'app-hoadon',
  templateUrl: './hoadon.component.html',
  styleUrls: ['./hoadon.component.scss']
})
export class HoadonComponent implements OnInit {
  data:Hoadon[]|any=[]
  data1:User = new User
  co:boolean=false
  constructor(private productservice: Productservice) { }

  ngOnInit(): void {
    this.data1=this.readData()
    this.getHoadon(this.data1)
  } 
  huy(i:Hoadon)
  {
    if(confirm("bạn có muốn hủy đơn hàng"))
    {
      this.productservice.patchhuy(i).then(res=>{
        location.reload()
      })
    }
  }
  getHoadon(id:any)
  {

    this.productservice.gethoadon1(id).then(res=>{
      this.data=res
    })
  }
  readData(){
    let data = localStorage.getItem('user')
    if(data !=null)
    {
      return JSON.parse(data);
    }
    return [];
  }

}
