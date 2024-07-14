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
      tickers:['GOOG'],
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
      tickers:['AAPL'],
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
    {
      id: '5',
      title: 'New Partnership in Renewable Energy Sector',
      author: 'Jessica Green',
      type: 'market',
      tickers:['ENPH'],
      content: `<p>A new partnership in the renewable energy sector has been announced, marking a significant milestone in sustainable development. 
      The collaboration aims to leverage combined expertise to accelerate innovation and deployment of renewable technologies.
      With a shared commitment to environmental stewardship and technological advancement, this partnership is poised to drive positive change in the energy landscape. 
      Both parties bring unique strengths to the table, ensuring robust solutions that meet the evolving demands of a greener future.</p>
      <img src="https://www.ludhianapropertyinvestment.com/application/modules/themes/views/default/assets/images/image-placeholder.png">`,
      createdAt: '18 SEP 2024, 10:00:00 AM',
    },
    {
      id: '6',
      title: 'SpaceX Launches New Satellite Constellation',
      author: 'Andrew Johnson',
      type: 'market',
      tickers:['TSLA'],
      content: `<p>SpaceX has successfully launched a new satellite constellation, expanding global connectivity and paving the way for enhanced communications services worldwide. 
       The latest deployment underscores SpaceX's commitment to revolutionizing space technology and accessibility, driving innovation in satellite-based solutions.
       With each launch, SpaceX reinforces its leadership in the aerospace industry, pushing boundaries and setting new standards for space exploration and telecommunications.</p> 
       <img src="https://www.ludhianapropertyinvestment.com/application/modules/themes/views/default/assets/images/image-placeholder.png" />`,
      createdAt: '02 JAN 2025, 08:30:15 AM',
    },
    {
      id: '7',
      title: 'Amazon Announces Expansion into Healthcare',
      author: 'Michael Roberts',
      tickers: ['AMZN'],
      type: 'symbol',
      content: `<p>Amazon Inc. has unveiled plans for a major expansion into the healthcare sector, signaling its ambitious foray into a rapidly evolving industry.
       Leveraging its vast resources and technological prowess, Amazon aims to transform healthcare delivery and consumer experience through innovative solutions and partnerships.
       This strategic move underscores Amazon's commitment to addressing complex healthcare challenges and enhancing access to quality care for millions of people.</p>
       <img src="https://www.ludhianapropertyinvestment.com/application/modules/themes/views/default/assets/images/image-placeholder.png" />
       `,
      createdAt: '12 MAY 2025, 03:45:00 PM',
    },
    {
      id: '8',
      title: 'Googles AI Breakthrough in Natural Language Processing',
      author: 'Sophie Lee',
      tickers: ['GOOG'],
      type: 'symbol',
      content: `<p>Google has achieved a significant breakthrough in natural language processing with its latest AI model, demonstrating remarkable capabilities in understanding and generating human-like text.
       This advancement promises to revolutionize various industries, from customer service automation to content creation, by enhancing efficiency and personalization.
       With continued innovation in AI research, Google reinforces its position as a leader in artificial intelligence, driving transformative changes in how we interact with technology.</p>
       <img src="https://www.ludhianapropertyinvestment.com/application/modules/themes/views/default/assets/images/image-placeholder.png" />
       `,
      createdAt: '09 AUG 2025, 11:20:00 AM',
    },
    {
      id: '9',
      title: 'Microsofts Acquisition Strategy in Cloud Computing',
      author: 'David Brown',
      tickers: ['MSFT'],
      type: 'symbol',
      content: `<p>Microsoft Corp. has unveiled its strategic acquisition in the cloud computing sector, enhancing its portfolio of services and capabilities.
       This acquisition underscores Microsoft's commitment to expanding its footprint in cloud infrastructure and advancing digital transformation across industries.
       With a focus on innovation and scalability, Microsoft continues to empower businesses with cutting-edge solutions that drive productivity and agility.</p>
       <img src="https://www.ludhianapropertyinvestment.com/application/modules/themes/views/default/assets/images/image-placeholder.png" />
       `,
      createdAt: '21 FEB 2025, 09:55:00 AM',
    },
    {
      id: '10',
      title: 'Intels Breakthrough in Quantum Computing',
      author: 'Daniel White',
      tickers: ['INTC'],
      type: 'symbol',
      content: `<p>Intel Corporation has achieved a groundbreaking milestone in quantum computing, unveiling a new processor that promises unprecedented speed and efficiency.
       This advancement marks a significant leap forward in computational capabilities, with potential applications ranging from scientific research to cryptography.
       As Intel continues to innovate in quantum technology, the company reinforces its leadership in semiconductor manufacturing and positions itself at the forefront of the next computing revolution.</p>
       <img src="https://www.ludhianapropertyinvestment.com/application/modules/themes/views/default/assets/images/image-placeholder.png" />
       `,
      createdAt: '03 JUL 2025, 04:10:00 PM',
    },
    {
      id: '11',
      title: 'Facebooks Expansion in Virtual Reality',
      author: 'Olivia Martinez',
      tickers: ['FB'],
      type: 'symbol',
      content: `<p>Meta Platforms Inc. (formerly Facebook) has announced a major expansion in virtual reality (VR), unveiling new immersive experiences and technologies.
       With a focus on enhancing social interactions and digital environments, Meta aims to redefine how people connect and engage in virtual spaces.
       This strategic move underscores Meta's vision for the future of social networking and digital interaction, leveraging VR to create meaningful experiences across its platform.</p>
       <img src="https://www.ludhianapropertyinvestment.com/application/modules/themes/views/default/assets/images/image-placeholder.png" />
       `,
      createdAt: '30 SEP 2025, 01:25:00 PM',
    },
    {
      id: '12',
      title: 'Netflixs Innovation in Content Streaming',
      author: 'Emma Johnson',
      tickers: ['NFLX'],
      type: 'symbol',
      content: `<p>Netflix Inc. continues to innovate in content streaming, introducing new features and technologies that enhance viewer engagement and satisfaction.
       With personalized recommendations and interactive content formats, Netflix redefines the entertainment experience, catering to diverse audience preferences.
       As the streaming landscape evolves, Netflix remains at the forefront of digital entertainment, driving growth and setting industry benchmarks in content delivery and viewer experience.</p>
       <img src="https://www.ludhianapropertyinvestment.com/application/modules/themes/views/default/assets/images/image-placeholder.png" />
       `,
      createdAt: '14 NOV 2025, 07:30:00 PM',
    },
    {
      id: '13',
      title: 'Amazons Advancements in Robotics and Automation',
      author: 'Sophia Davis',
      tickers: ['AMZN'],
      type: 'symbol',
      content: `<p>Amazon Inc. continues to advance in robotics and automation, enhancing operational efficiency and logistics capabilities across its global network.
       With investments in AI-powered robotics and autonomous delivery systems, Amazon drives innovation in e-commerce fulfillment and supply chain management.
       This strategic focus on automation underscores Amazon's commitment to improving customer experience and optimizing operational processes at scale.</p>
       <img src="https://www.ludhianapropertyinvestment.com/application/modules/themes/views/default/assets/images/image-placeholder.png" />
       `,
      createdAt: '05 DEC 2025, 10:45:00 AM',
    },
    {
      id: '14',
      title: 'Googles Investment in Sustainable Technologies',
      author: 'Liam Wilson',
      tickers: ['GOOG'],
      type: 'symbol',
      content: `<p>Google has announced significant investments in sustainable technologies, aiming to accelerate the transition to a carbon-neutral future.
       Through renewable energy projects and eco-friendly initiatives, Google promotes environmental sustainability and reduces its carbon footprint.
       This commitment to sustainability reflects Google's broader mission to create a more sustainable world through innovation and responsible business practices.</p>
       <img src="https://www.ludhianapropertyinvestment.com/application/modules/themes/views/default/assets/images/image-placeholder.png" />
       `,
      createdAt: '19 JAN 2026, 09:00:00 AM',
    },
    {
      id: '15',
      title: 'Emerging Trends in Green Building Technologies',
      author: 'Rachel Green',
      type: 'market',
      tickers:['NEE'],
      content: `<p>The green building sector is witnessing emerging trends in sustainable technologies, driving innovation in energy-efficient designs and construction practices.
      From smart building solutions to renewable energy integration, these advancements are reshaping the future of urban development and environmental stewardship.
      With a focus on reducing carbon footprints and enhancing occupant comfort, these trends underscore the industry's commitment to sustainable building practices.</p>
      <img src="https://www.ludhianapropertyinvestment.com/application/modules/themes/views/default/assets/images/image-placeholder.png">`,
      createdAt: '22 MAR 2024, 03:15:00 PM',
    },
    {
      id: '16',
      title: 'E-commerce Boom Fuels Logistics Innovation',
      author: 'Mark Thompson',
      type: 'market',
      tickers:['AMZN'],
      content: `<p>The rapid growth of e-commerce continues to fuel innovation in logistics and supply chain management, driving advancements in automation and last-mile delivery solutions.
       Companies are leveraging technology to optimize warehouse operations and streamline delivery processes, enhancing speed and efficiency.
       This logistical innovation is critical in meeting the evolving demands of online shoppers and sustaining the e-commerce boom.</p> 
       <img src="https://www.ludhianapropertyinvestment.com/application/modules/themes/views/default/assets/images/image-placeholder.png" />`,
      createdAt: '09 AUG 2024, 11:30:00 AM',
    },
    {
      id: '17',
      title: 'Renewable Energy Investments Surge Globally',
      author: 'Daniel Brown',
      type: 'market',
      tickers:['ENPH'],
      content: `<p>Global investments in renewable energy have surged to record levels, driven by government incentives and growing environmental awareness.
       Solar and wind projects dominate the renewable landscape, with investments in energy storage and grid modernization supporting their integration.
       This momentum highlights a shift towards sustainable energy solutions and underscores the economic viability of renewable investments.</p>
       <img src="https://www.ludhianapropertyinvestment.com/application/modules/themes/views/default/assets/images/image-placeholder.png" />
       `,
      createdAt: '17 SEP 2024, 09:00:00 AM',
    },
    {
      id: '18',
      title: 'Blockchain Technology Revolutionizes Supply Chains',
      author: 'Emily Davis',
      type: 'market',
      tickers: ['IBM'],
      content: `<p>Blockchain technology is revolutionizing supply chains by enhancing transparency, traceability, and efficiency in global trade networks.
       From food safety to luxury goods authentication, blockchain-powered solutions are reshaping how businesses manage supply chain operations.
       This technological innovation promises to reduce fraud, streamline processes, and build trust among stakeholders across various industries.</p>
       <img src="https://www.ludhianapropertyinvestment.com/application/modules/themes/views/default/assets/images/image-placeholder.png" />
       `,
      createdAt: '02 NOV 2024, 02:00:00 PM',
    },
    {
      id: '19',
      title: 'Artificial Intelligence in Healthcare Transformation',
      author: 'Jessica Lee',
      type: 'market',
      tickers: ['AAPL'],
      content: `<p>Artificial intelligence is driving transformation in healthcare by improving diagnostics, personalized treatment plans, and operational efficiencies.
       AI-powered applications are enhancing clinical decision-making and patient outcomes, paving the way for more precise and effective healthcare delivery.
       With ongoing advancements in machine learning and data analytics, AI continues to unlock new possibilities in medical research and healthcare innovation.</p>
       <img src="https://www.ludhianapropertyinvestment.com/application/modules/themes/views/default/assets/images/image-placeholder.png" />
       `,
      createdAt: '30 JAN 2025, 10:30:00 AM',
    }
  ];

  addedSymbols: string[] = [];

  getNews(): IArticle[] {
    return this._news;
  }

  getArticleById(id: string): IArticle {
    return this._news.find((article) => article.id === id) as IArticle;
  }
}
