import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpOptionsClass } from 'src/app/core/classes/httpOptions';
import { Mixin } from 'src/app/core/decorator/mixin';
import { environment } from 'src/environments/environment';

@Mixin([HttpOptionsClass])

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiUrl = environment.api_url;
  constructor(private http: HttpClient) { }
  
  getHttpOptions!: (options?: any) => any;

  //ROLES CRUD 

  

//  
getRoles(){
  const url = this.apiUrl + `/roles`;
    return this.http.get(url);
}

  getAllRoles(){
    const url = this.apiUrl + `/roles`;
    return this.http.post(url, {} );
  }

  deleteRole(id:any){
    const url = this.apiUrl + `/role/${id}`;
    return this.http.delete(url);
  }

  createRole(body:any){
    const url = this.apiUrl + `/role`;
    return this.http.post(url, body);
  }

  updateRole(id:string, body:any){
    const url = this.apiUrl + `/role/${id}`;
    return this.http.put(url, body);
  }

  getSingleRole(id:any){
    const url = this.apiUrl + `/role/${id}`;
    return this.http.get(url);
  }

  // USERS CRUD

  getAllUsers(body:any){
    const url = this.apiUrl + `/users`;
    return this.http.post(url , body );
  }

  createUser(body:any){
    const url = this.apiUrl + `/user`;
    return this.http.post(url, body);
  }

  updateUser(id:string, body:any){
    const url = this.apiUrl + `/user/${id}`;
    return this.http.put(url, body);
  }

  deleteUser(id:any){
    const url = this.apiUrl + `/user/${id}`;
    return this.http.delete(url);
  }
  getSingleUser(id:any){
    const url = this.apiUrl + `/user/${id}`;
    return this.http.get(url);
  }


}
