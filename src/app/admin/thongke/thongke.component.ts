import { Component, OnInit } from '@angular/core';
import { Productservice } from '../../service/product.service';
import { Thongke } from 'src/app/model/thongke.model';
@Component({
  selector: 'app-thongke',
  templateUrl: './thongke.component.html',
  styleUrls: ['./thongke.component.scss']
})
export class ThongkeComponent implements OnInit {
data:Thongke[]|any=[]
  constructor(private productservice: Productservice) { }

  ngOnInit(): void {
    this.getThongke()
  }
  getThongke()
  {
    this.productservice.getThongke().then(res=>{
      this.data=res
    })
  }

}
