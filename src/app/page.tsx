
import QuoteCarousel from '@/components/news/news';
import Header from '@/components/header/header';

import React from 'react';

export default function Home() {
  const letters = ['H', 'A', 'P', 'S', 'I', 'R', 'E']; // Letters to display

  return (
      <div>
        <Header/>
        <QuoteCarousel/>
      </div>
  );
}
