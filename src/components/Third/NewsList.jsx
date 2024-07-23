import React, { useState, useEffect } from 'react';
import axios from "axios";
import { StyledParagraph, NewsListContainer, NewsListItem, NewsLink, NewsImage } from './styled'; // 스타일 임포트
import Title from "../common/Title"; 

const NewsList = () => {
  const [data, setData] = useState([]); 
  const [category, setCategory] = useState(''); 

  const { VITE_NEWS_API_KEY } = import.meta.env;

  const changeCategory = (newCategory) => {
    setCategory(newCategory);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr&category=${category}&apiKey=${VITE_NEWS_API_KEY}`
      );
      console.log("NEWS_LIST실습:", response);
      setData(response.data.articles); 
    } catch (error) {
      console.log("에러!!", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category]); 

  return (
    <NewsListContainer>
      
      <Title title="멋사 NEWS" />
      
      <StyledParagraph>
        <span onClick={() => changeCategory('')}>전체&emsp;</span>
        <span onClick={() => changeCategory('sports')}>스포츠&emsp;</span>
        <span onClick={() => changeCategory('entertainment')}>연예&emsp;</span>
        <span onClick={() => changeCategory('business')}>경제</span>
      </StyledParagraph>
      
      {data.length > 0 ? (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {data.map((article, index) => {
            console.log(article.urlToImage); // 이미지 URL을 콘솔에 로그
            return (
              <NewsListItem key={index}>
                <NewsLink href={article.url} target="_blank" rel="noopener noreferrer">
                  <NewsImage 
                    src={article.urlToImage} 
                    onError={(e) => e.target.src = 'https://via.placeholder.com/100'} 
                  />
                  <span>{article.title}</span>
                </NewsLink>
              </NewsListItem>
            );
          })}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </NewsListContainer>
  );
};

export default NewsList;

//뉴스 리스트 api 과제 제출