import { Injectable } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import { Observable} from 'rxjs';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {

  constructor(private http: HttpClient) { }

obtnerDatos():Observable<any>{
  return this.http.get('./assets/data/data.json');}
}
