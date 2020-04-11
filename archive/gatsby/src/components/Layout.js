import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default ({ children }) => (
  <div id="app">
    <Header />
    <main id="mainContent">
      {children}
    </main>
    <Footer />
  </div>
)
