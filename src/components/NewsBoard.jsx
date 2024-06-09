import { useState ,useEffect } from 'react'
import NewsItem from './NewsItem';

const NewsBoard = ({category}) => {
  const [articles , setArticals] = useState([]);  

   
  useEffect(()=>{
    const apiKey = 'cc167ff12b874351bf63e3b363fc88c5';
    if (!apiKey) {
      console.log('API key is missing');
      console.log(apiKey);
      return;
    }
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`;
    fetch(url).then(response=>response.json()).then(data=>setArticals(data.articles));
  },[category]);

  return (
    <div className='justify-content-around ' style={{background :'#cde8ff' , marginTop :'100px'}}>
      <h2 className='text-center '>Latest <span className='badge bg-danger'>News</span></h2>
      {
      (articles.length>1)?articles.map((news ,index)=>{
        return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} pat={news.publishedAt}/>
     }):<p className='text-center fs-4 mt-4'>No Result Found</p>
    }
      
    </div>
  )
}

export default NewsBoard
