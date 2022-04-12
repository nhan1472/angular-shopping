import { Component, OnInit } from '@angular/core';
import  { User } from'../../model/user.model';
import { Productservice } from '../../service/product.service';
@Component({
  selector: 'app-thongtin',
  templateUrl: './thongtin.component.html',
  styleUrls: ['./thongtin.component.scss']
})
export class ThongtinComponent implements OnInit {
  user:User= new User
  a:boolean=true
  constructor(private productservice: Productservice) { }

  ngOnInit(): void {
    this.user=this.readData()
  }
  thaydoi()
  {
    this.a=!this.a
  }
  Luu()
  {
    this.productservice.pacthtt(this.user).then(res=>{
      alert(res)
    }
    )
    localStorage.removeItem("user");
      this.saveData()
    this.a=!this.a
  }
  saveData(){
    localStorage.setItem('user',JSON.stringify(this.user));
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
