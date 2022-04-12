import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import  { User } from'../../model/user.model';
import  { Res } from'../../model/res.model';
import { Productservice } from '../../service/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user:User=new User
  a:Res[]|any = []
  co:any=0
  constructor(private router:Router,private productservice: Productservice) { }

  ngOnInit(): void {
    if(this.readData2()!=0||this.readData1()!=0)
    {
      this.co=1
    }
  }
  onSubmit(frm:NgForm)
  {
    if(!frm.valid)
    {
      alert("bạn cần điền hêt thông tin")
    }
    else{
      this.productservice.postUserLogin(this.user).then(res=>{
        this.a=res
        alert(this.a.mes)
        if(this.a.co==1)
        {
          this.saveData(this.a.data)
          this.saveToken(this.a.token)
          location.reload()
          this.router.navigate(['thongtin']);
        }
      })
    }
  }
  saveData(arr:User[]){
    localStorage.setItem('user',JSON.stringify(arr));
  }
  saveToken(arr:string)
  {
    localStorage.setItem('token',JSON.stringify(arr));
  }
  readData2(){
    let data = localStorage.getItem('user')
    if(data !=null)
    {
      return JSON.parse(data);
    }
    return 0
  }
  readData1(){
    let data = localStorage.getItem('admin')
    if(data !=null)
    {
      return JSON.parse(data);
    }
    return 0
  }
}
