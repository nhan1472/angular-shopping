import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Product } from '../model/product.model';
@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private httpCilent:HttpClient|any;
  private API_Sever:string|any="https://json-sever-angular-demo.herokuapp.com/";
  private header : HttpHeaders | any;
  constructor(inject:Injector)
  {
      if(inject)
      {
         this.httpCilent=inject.get(HttpClient);
      }
  }
  public getAll(path:string="")
  {
     return new Promise((thanhcong,thatbai)=>{
        try {
            this.httpCilent.get(this.API_Sever + path )
                .subscribe((res:any)=>{
                    thanhcong(res)
                })
            
        } catch (error) {
            thatbai(error)
        } 
     })
  }
    public getId(path:string="",params:any)
    {
       return new Promise((thanhcong,thatbai)=>{
          try {
              this.httpCilent.get(this.API_Sever + path ,params)
                  .subscribe((res:any)=>{
                      thanhcong(res)
                  })
              
          } catch (error) {
              thatbai(error)
          } 
       })
    }
    public getbody(path:string="",body:any)
    {
       return new Promise((thanhcong,thatbai)=>{
          try {
              this.httpCilent.post(this.API_Sever + path,body)
                  .subscribe((res:any)=>{
                      thanhcong(res)
                  })
              
          } catch (error) {
              thatbai(error)
          } 
       })
    }
    public gettoken(path:string="",token:any)
    {
       return new Promise((thanhcong,thatbai)=>{
          try {
            this.header = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Authorization',
            'Bearer '+token);
              this.httpCilent.get(this.API_Sever + path ,{headers: this.header})
                  .subscribe((res:any)=>{
                      thanhcong(res)
                  })
              
          } catch (error) {
              thatbai(error)
          } 
       })
    }
    public post(path:string="",body:any)
    {
       return new Promise((thanhcong,thatbai)=>{
          try {
              this.httpCilent.post(this.API_Sever + path ,body)
                  .subscribe((res:any)=>{
                      thanhcong(res)
                  })
              
          } catch (error) {
              thatbai(error)
          } 
       })
    }
    public patch(path:string="",body:any)
    {
       return new Promise((thanhcong,thatbai)=>{
          try {
              this.httpCilent.patch(this.API_Sever + path ,body)
                  .subscribe((res:any)=>{
                      thanhcong(res)
                  })
              
          } catch (error) {
              thatbai(error)
          } 
       })
    }
    public delete(path:string="",params:any)
    {
       return new Promise((thanhcong,thatbai)=>{
          try {
            this.httpCilent.delete(this.API_Sever + path ,params)
                  .subscribe((res:any)=>{
                      thanhcong(res)
                  })
              
          } catch (error) {
              thatbai(error)
          } 
       })
    }
  }


