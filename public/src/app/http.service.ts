import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {}
   get_All() {
     return this._http.get('/api/pet');
     }
   get_One(id) {
    return this._http.get(`/api/pet/${id}`);
    }
 add_New(newthing) {
   return this._http.post('/api/pet', newthing);
   }
  delete_One(id) {
  return this._http.delete(`/api/pet/${id}`);
  }
  update_One(id,data) {
    return this._http.put(`/api/pet/${id}`,data);
    }
}
