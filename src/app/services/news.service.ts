import { Injectable } from '@angular/core';
import { IArticle } from '../types/news';

@Injectable()
export class NewsService {
  private _news: IArticle[] = [
    {
      id: '1',
      title: 'J. Stout Auctions Hosts Successful Fleet Dispersal',
      author: 'Johnathan Doe',
      type: 'market',
      tickers:[],
      content: `<p>In a resounding success for both sellers and buyers in the heavy equipment industry, J. Stout Auctions recently concluded a highly anticipated fleet dispersal event. 
  The auction, renowned for its expertise in handling heavy machinery and equipment, attracted a diverse range of participants eager to acquire quality assets.
  Founded on a reputation for transparency, professionalism, and industry knowledge, J. Stout Auctions continues to set benchmarks in the heavy equipment auction sector. 
  The success of this recent event underscores their ability to facilitate seamless transactions and maximize value for all stakeholders.
  As the industry evolves, J. Stout Auctions remains committed to delivering exceptional service and maintaining its position as a trusted partner for fleet management and asset dispersal.
  Future events promise to build upon this success, offering new opportunities for both buyers and sellers in the heavy equipment market.</p>
    <img src="https://www.ludhianapropertyinvestment.com/application/modules/themes/views/default/assets/images/image-placeholder.png">`,
      createdAt: '06 MAY 2024, 11:28:38 AM',
    },
    {
      id: '2',
      title: 'J. Stout Auctions Achieves Triumph with Fleet Liquidation Event',
      author: 'Emily Smith',
      type: 'market',
      tickers:[],
      content: `<p>J. Stout Auctions recently orchestrated a remarkable feat in the realm of fleet management, successfully conducting a comprehensive liquidation event that garnered widespread acclaim.
       The auction house's meticulous planning and execution ensured a seamless process, attracting a diverse array of buyers eager to capitalize on the opportunity.
       From heavy-duty machinery to commercial vehicles, each item was expertly showcased, maximizing bidder engagement and driving competitive prices.
       With a reputation for transparency and efficiency, J. Stout Auctions delivered exceptional results, solidifying its position as a leader in fleet dispersal solutions.
       This triumphant event not only underscored the company's commitment to excellence but also highlighted its ability to meet the dynamic needs of today's market.</p> <img src="https://www.ludhianapropertyinvestment.com/application/modules/themes/views/default/assets/images/image-placeholder.png" />`,
      createdAt: '15 JUL 2023, 02:45:12 PM',
    },
    {
      id: '3',
      title: 'Apple Inc Quarterly Earnings Report',
      author: 'Alexander Brown',
      tickers: ['AAPL'],
      type: 'symbol',
      content: `<p>Apple Inc. has released its highly anticipated quarterly earnings report, showcasing robust financial performance across key metrics. 
       With revenues surpassing expectations, driven primarily by strong iPhone sales and growth in services and wearables, the tech giant continues to demonstrate resilience and innovation in a competitive market.
       Investor confidence remains high as Apple expands its ecosystem and explores new avenues for growth, including advancements in augmented reality and subscription services.
       Despite global economic challenges, Apple's strategic investments in R&D and marketing have paid off, positioning the company for sustained success in the digital age.
       As consumers increasingly embrace Apple's ecosystem of products and services, the company remains poised to deliver value and innovation to shareholders and customers alike.</p>
       <img src="https://www.ludhianapropertyinvestment.com/application/modules/themes/views/default/assets/images/image-placeholder.png" />
       `,
      createdAt: '28 OCT 2025, 09:15:30 AM',
    },
    {
      id: '4',
      title: 'Tesla Announces New Model',
      author: 'Sophia Garcia',
      tickers: ['TSLA'],
      type: 'symbol',
      content: `<p>Tesla Inc. has officially unveiled its latest innovation with the announcement of a groundbreaking new model set to redefine electric vehicles (EVs).
       The highly anticipated vehicle promises cutting-edge technology, unparalleled performance, and sustainability at its core.
       Featuring sleek design elements and state-of-the-art autonomous driving capabilities, the new Tesla model aims to push the boundaries of automotive engineering. 
       With a focus on range efficiency and eco-friendly materials, Tesla continues to lead the charge in the EV market, setting a new standard for electric mobility worldwide. 
       Anticipation is high among enthusiasts and investors alike as Tesla reaffirms its commitment to shaping the future of transportation with each new release.</p><img src="https://www.ludhianapropertyinvestment.com/application/modules/themes/views/default/assets/images/image-placeholder.png" />`,
      createdAt: '07 MAR 2026, 11:59:59 PM',
    },
  ];

  addedSymbols: string[] = [];

  getNews(): IArticle[] {
    return this._news;
  }

  getArticleById(id: string): IArticle {
    return this._news.find((article) => article.id === id) as IArticle;
  }
}
