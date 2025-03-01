import { useState } from 'react';

const Carousel = () => {
  const images = [
    "https://placehold.co/500x300?text=Image+1",
    "https://placehold.co/500x300?text=Image+2",
    "https://placehold.co/500x300?text=Image+3"
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`carousel image ${currentIndex + 1}`}
          className="w-full object-cover"
        />
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#4C51BF] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:bg-[#6B74E1] hover:scale-110 focus:outline-none"
      >
        &#8249;
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#4C51BF] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:bg-[#6B74E1] hover:scale-110 focus:outline-none"
      >
        &#8250;
      </button>
    </div>
  );
};

export default Carousel;
