import { Componente } from './../interfaces/interface';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { 

  }
  getMenu(){
    return this.http.get<Componente>('/assets/data/menu.json');
  }
}
