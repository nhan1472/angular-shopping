import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import  { User } from'../../model/user.model';
import  { Res } from'../../model/res.model';
import { Productservice } from '../../service/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 user:User=new User
 a:Res[]|any = []
  constructor(private router:Router,private productservice: Productservice) { }

  ngOnInit(): void {
  }
  onSubmit(frm:NgForm)
  {
    if(!frm.valid)
    {
      alert("bạn cần điền hêt thông tin")
    }
    else{
      this.productservice.postUser(this.user).then(res=>{
        this.a=res
        alert(this.a.mes)
        if(this.a.co==1)
        {
          this.router.navigate(['login']);
        }
      })
    }
  }

}
