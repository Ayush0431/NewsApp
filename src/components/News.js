import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor(){
    super();
    console.log("Hello I am a cosntructor from news Component");
    this.state={
           articles:[],
           loading :false
    }
   }
  async componentDidMount(){
    let url ="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=13292e8973c042f8988b7aaa93141cfc"
    let data= await fetch(url);
    let parsedData =await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
  }




  render() {
    return (
      <div className="container my-4">
        <h2>NewsMonkey - Top Headlines</h2>
        {this.state.articles.map((element)=>{
           return <div className="row">
          <div className="col md-4" key ={element.url}>
        <NewsItem  title ={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage}
        newsUrl={element.url}/>
        </div>
        </div>
        })}
        
      </div>
    )
  }
}

export default News