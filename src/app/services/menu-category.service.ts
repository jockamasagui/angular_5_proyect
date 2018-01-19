import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { URLSearchParams } from '@angular/http';
import { URL } from './util';

@Injectable()
export class MenuCategoryService {

  constructor(private _httpClient:HttpClient) { }

  public prueba(name:string){

    const params = new URLSearchParams();
    params.set('name',name);

    const headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded; charset=utf-8'});
    
   return this._httpClient.post(URL+"/menuCategory",
    params.toString(),{headers: headers})
  }

}
