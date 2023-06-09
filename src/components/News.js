import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    pageSize :8,
    category:'general',
  }
  static propTypes = {
    pageSize : PropTypes.number,
    category:PropTypes.string,
  } 

  constructor(props){
    super(props);
    console.log("Hello I am a cosntructor from news Component");
    this.state={
           articles:[],
           loading :false,
           page :1
    }
    document.title= ` ${this.props.category}- NewsMonkey`;
   }
   async updateNews(){
    const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=13292e8973c042f8988b7aaa93141cfc&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data= await fetch(url);
    let parsedData =await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles, totalResults:parsedData.totalResults,loading:false})
  
   }
   async componentDidMount(){
    // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=13292e8973c042f8988b7aaa93141cfc&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data= await fetch(url);
    // let parsedData =await data.json()
    // console.log(parsedData);
    // this.setState({articles: parsedData.articles, totalResults:parsedData.totalResults,loading:false})
    this.updateNews();
  }
  handlePrevClick = async () => {
    // console.log("Previous");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=13292e8973c042f8988b7aaa93141cfc&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true})
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // console.log(parsedData);
    // this.setState({
    //     page: this.state.page - 1,
    //     articles: parsedData.articles,
    //     loading:false
    // })
    //mounting == birth of your component 
    //update == gorwth of your component
    //unmount == death of your component
    this.setState({page :this.state.page - 1});
    this.updateNews();
}
   handleNextClick = async () => {
    console.log("Next");
    // if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {
    // }
    // else {
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catergory}&apiKey=13292e8973c042f8988b7aaa93141cfc&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
    //     this.setState({loading:true})
    //     let data = await fetch(url);
    //     let parsedData = await data.json()
    //     console.log(parsedData);
    //     this.setState({
    //         page: this.state.page + 1,
    //         articles: parsedData.articles,
    //         loading:false
    //     })
    // }
    this.setState({page :this.state.page + 1});
    this.updateNews();
}



  render() {
    return (
      <div className ="container my-3">
        <h2 className="text center">NewsMonkey-Top {this.props.category}  Headlines</h2>
        {this.state.loading &&<Spinner/>}
        {!this.state.loading &&this.state.articles.map((element)=>{
           return <div className="row">
          <div className="col md-4" key ={element.url}>
        <NewsItem  title ={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage}
        newsUrl={element.url} author={element.author} date ={element.publishedAt} source={element.source.name}/>
        </div>
        </div>
        })}
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr;Previous  </button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}    

export default News