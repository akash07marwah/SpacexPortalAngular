import { Component, OnInit } from '@angular/core';
import {GetNewsService} from '../get-news.service'
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(public getNews:GetNewsService) { }
  news;
  ngOnInit(): void {
    this.getNews.getnews().subscribe(res=>{
      this.news=res;
    });
  }
}
