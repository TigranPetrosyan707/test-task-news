import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'articles',
    loadChildren: () =>
      import('./modules/news/news.module').then((m) => m.NewsModule),
  },
  { path: '', redirectTo: 'articles', pathMatch: 'full' },
];
