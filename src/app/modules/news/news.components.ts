import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IArticle } from 'src/app/types/news';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  news: IArticle[] = [];
  filteredNews: IArticle[] = [];
  filterType: 'market' | 'symbol' = 'market';
  searchedQueries: string[] = [];
  showDropdown: boolean = false
  
  constructor(private _newsService: NewsService, private _router: Router) {}

  ngOnInit() {
    this.news = this._newsService.getNews();
    this.filterByType(this.filterType);
  }

  filterByType(type: 'market' | 'symbol'): void {
    this.filterType = type;
    this.filteredNews = this.news.filter((article) => article.type === type);
  }

  openArticle(id: string): void {
    this._router.navigate(['/articles', id]);
  }

  filterBySymbol(symbols: string[]): void {
    if(!symbols.length) {
      this.filteredNews = this.news.filter((article) => article.type === 'symbol');
      return;
    }

    this.filteredNews = this.news.filter(article =>
      article.tickers.some(ticker =>  symbols.includes(ticker)))
  }
}
