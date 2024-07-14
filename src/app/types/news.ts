export interface IArticle {
  id: string;
  title: string;
  author: string;
  tickers: string[];
  type: 'symbol' | 'market';
  content: string;
  createdAt: string
}
