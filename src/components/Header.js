
import React from 'react';

function Header() {
  return (
    <header>
      <h1>Sarte's List</h1>
      <h2>Better-Dressed People</h2>
      <nav aria-label="Main Navigation" role="navigation">
        <ul className="nav top-nav">
          <li><a href="#Women's">Women's</a></li>
          <li><a href="#Men's">Men's</a></li>
          <li><a href="#On the Street">On the Street</a></li>
          <li><a href="#The Catwalk">The Catwalk</a></li>
          <li><a href="#AdWatch">AdWatch</a></li>
          <li><a href="#About">About</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
