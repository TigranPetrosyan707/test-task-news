import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IArticle } from 'src/app/types/news';
import { NewsService } from '../../../../services/news.service';

@Component({
  standalone: true,
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss'],
  imports: [NgIf],
})
export class ArticleDetailComponent implements OnInit {
  article!: IArticle;

  constructor(
    private _route: ActivatedRoute,
    private _newsService: NewsService
  ) {}

  ngOnInit() {
    console.log(this._route.snapshot)
    const id = this._route.snapshot.paramMap.get('id');
    this.article = this._newsService.getArticleById(id as string);
  }
}
