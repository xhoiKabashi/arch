"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { MessageSquareQuote } from 'lucide-react';


const quotes = [
  {
    id: 1,
    text: "Eget cursus purus. Ut tempor iaculis dolor, eget pharetra lorem gravida vel. Nunc dignissim mauris ac est fermentum, et sodales sem interdum. Integer ac augue urna.",
    author: "KALI BOWLER",
    role: "Architect",
  },
  {
    id: 2,
    text: "Design is intelligence made visible, a perfect balance of art and engineering.",
    author: "JANE DOE",
    role: "Designer",
  },
  {
    id: 3,
    text: "Great design is eliminating unnecessary details while ensuring functionality.",
    author: "JOHN SMITH",
    role: "Engineer",
  },
];

const QuoteCarousel = () => {
  return (
    <div className=" py-5">
      <div className="container mx-auto px-4">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          loop={true}
        >
          {quotes.map((quote) => (
            <SwiperSlide key={quote.id}>
              <div className="bg-white p-8 rounded-lg text-center mx-auto max-w-lg transform transition duration-300 hover:scale-105">
                <div className="text-center w-full flex  justify-center py-4">
                  <MessageSquareQuote />
                </div>
                <p className="text-gray-700 italic text-lg mb-6">
                  {quote.text}
                </p>
                <p className="text-gray-900 font-bold text-xl">
                  {quote.author}
                </p>
                <p className="text-gray-500 text-sm">{quote.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default QuoteCarousel;