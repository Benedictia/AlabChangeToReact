// components/Article.js
import React from 'react';

function Article({ title, content, imageUrl }) {
  return (
    <article>
      <header>
        <h2>{title}</h2>
      </header>
      <section>
        <img src={imageUrl} alt={title} />
        <p>{content}</p>
      </section>
    </article>
  );
}

export default Article;

