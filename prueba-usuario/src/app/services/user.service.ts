import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //private http= inject(HttpClient)

  constructor(private http:HttpClient) { }

  private API_ENDPOINT = 'https://66734d606ca902ae11b3c8b1.mockapi.io/';  
  private PLATZI_ENDPOINIT='https://api.escuelajs.co/api/v1/';


  registerUser(dataSent:object):Observable<any>{
 return this.http.post<any>(this.API_ENDPOINT+"personas", dataSent);
  }
   authUser(dataSent:Object):Observable<any>{
      return this.http.post<any>(this.PLATZI_ENDPOINIT+"auth/login",dataSent);

      }

  }

