import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class GetNewsService {
  constructor(public http:HttpClient) { }
  getnews(){
    return this.http.get("http://newsapi.org/v2/everything?q=spacex&sortBy=popularity&apiKey=d36c6382e9dc49329f04b9fa11338fb7");
  }
}
