import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.components';
import { NewsService } from '../../services/news.service';
import { ArticleDetailComponent } from './components/article-details/article-detail.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';

@NgModule({
  declarations: [NewsComponent],
  imports: [
    CommonModule,
    FilterBarComponent,
    RouterModule.forChild([
      { path: '', component: NewsComponent },
      { path: ':id', component: ArticleDetailComponent },
    ]),
  ],
  providers: [NewsService],
})
export class NewsModule {}
