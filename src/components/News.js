import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  articles= [
    {
        "source": {
            "id": null,
            "name": "CBS Sports"
        },
        "author": "",
        "title": "2023 March Madness TV schedule, announcers: How to watch NCAA Tournament, tipoff times, TV channels, bracket - CBS Sports",
        "description": "The complete television and streaming schedule for how to watch March Madness 2023",
        "url": "https://www.cbssports.com/college-basketball/news/2023-march-madness-tv-schedule-announcers-how-to-watch-ncaa-tournament-tipoff-times-tv-channels-bracket/",
        "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/03/11/f5e056ea-e39b-4081-8804-010010d036eb/thumbnail/1200x675/15292ee21c930bc8628a80515f12508a/march-madness-ncaa-microphone-g.png",
        "publishedAt": "2023-03-13T18:45:00Z",
        "content": "Are you ready for the madness that will be taking placing during the 2023 NCAA Tournament? You better be. March Madness is just about ready to tip off, with the First Four games taking center stage i… [+8949 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "ESPN"
        },
        "author": null,
        "title": "Raiders fill QB need with Jimmy Garoppolo, sources say - ESPN",
        "description": "49ers quarterback Jimmy Garoppolo plans to sign with the Raiders, sources told ESPN's Dianna Russini and Adam Schefter.",
        "url": "https://www.espn.com/nfl/story/_/id/35851697/raiders-fill-qb-need-jimmy-garoppolo-sources-say",
        "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0125%2Fr1122112_1296x729_16%2D9.jpg",
        "publishedAt": "2023-03-13T18:00:26Z",
        "content": "San Francisco 49ers quarterback Jimmy Garoppolo plans to sign with the Las Vegas Raiders, sources told ESPN's Dianna Russini and Adam Schefter.\r\nGaroppolo agreed to a three-year, $67.5 million deal, … [+1857 chars]"
    },
    {
        "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
        },
        "author": "Jada Yuan",
        "title": "Michelle Yeoh makes quite an entrance at the Vanity Fair Oscars party - The Washington Post",
        "description": "Is Brendan Fraser about to cry again? Ke Huy Quan gets excited to see ... Jimmy Kimmel? Ava DuVernay can’t stop directing. Hugh Grant can’t stop, won’t stop. And other highlights from Hollywood’s A-list confab.",
        "url": "https://www.washingtonpost.com/lifestyle/2023/03/13/vanity-fair-oscars-party/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/7IN3FOGBUAI63AVHNKDVKXAYPA.jpg&w=1440",
        "publishedAt": "2023-03-13T17:45:00Z",
        "content": "Comment on this story\r\nBEVERLY HILLS, Calif. The security guard wrangling an unwieldy backup at the metal detectors has a bold proposal: Does anyone want to skip the red carpet?\r\nSilence. Not a singl… [+10529 chars]"
    }
]

  constructor(){
    super();
    console.log("Hello I am a cosntructor from news Component");
    this.state={
           articles:this.articles,
           loading :false
    }
   }
  render() {
    return (
      <div className="container my-4">
        <h2>NewsMonkey - Top Headlines</h2>
        {this.state.articles.map((element)=>{
           return <div className="row">
          <div className="col md-4" key ={element.url}>
        <NewsItem  title ={element.title.slice(0,45)} description={element.description.slice(0,88)} imageUrl={element.urlToImage}
        newsUrl={element.url}/>
        </div>
        </div>
        })}
        
      </div>
    )
  }
}

export default News