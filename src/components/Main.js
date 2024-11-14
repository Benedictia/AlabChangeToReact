// components/Main.js
import React from 'react';
import Article from './Article';  // Import Article component

function Main() {
  // Example content for articles
  const articles = [
    {
      title: "On the Street in Brooklyn",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      imageUrl: "https://ps-react-curriculum.herokuapp.com/fashionblog/blog-image-1.jpg"
    },
    {
      title: "Vintage in Vogue",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      imageUrl: "https://ps-react-curriculum.herokuapp.com/fashionblog/blog-image-2.jpg"
    }
  ];

  return (
    <main>
      {articles.map((article, index) => (
        <Article
          key={index}
          title={article.title}
          content={article.content}
          imageUrl={article.imageUrl}
        />
      ))}
    </main>
  );
}

export default Main;
