import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PainterService {

  constructor(private _http:HttpClient) { }

  AddPainter(fullname,country){

    this._http.post("http://localhost:3000/api/painter/add",{fullname:fullname,country:country}).subscribe((x)=>{
      alert("İşlem başarılı!")
    })
  }

  GetAllPainters(){
    return this._http.get("http://localhost:3000/api/painter/getall");
  }

  DeletePainter(id){
   return  this._http.post("http://localhost:3000/api/painter/delete",{id:id})
  }
}
