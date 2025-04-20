'use client';
import React, { useState, useEffect } from 'react';

interface ContentItem {
  heading: string;
  paragraph: string;
  imageSrc: string;
  imageAlt: string;
}

const contentItems: ContentItem[] = [
  {
    heading: 'Innovate with Cutting-Edge Technology',
    paragraph:
      'Explore our advanced solutions designed to transform your business and drive growth. Experience the future today.',
    imageSrc: 'https://cdn.pixabay.com/photo/2016/11/23/14/37/blur-1853262_1280.jpg', // Replace with your image path
    imageAlt: 'Cutting-Edge Technology',
  },
  {
    heading: 'Unlock Your Potential with Expert Solutions',
    paragraph:
      'Our expert team provides tailored solutions to meet your unique challenges. Achieve your goals with our proven strategies.',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKlVbjMC47k5GnFlPelhgrzlWjA5f6Bdb8zQ&s', // Replace with your image path
    imageAlt: 'Expert Solutions',
  },
  {
    heading: 'Experience Seamless Digital Transformation',
    paragraph:
      'Transform your business with our seamless digital solutions. Enhance efficiency and stay ahead of the competition.',
    imageSrc: 'https://cdn.pixabay.com/photo/2023/07/19/08/09/ai-generated-8136384_640.jpg', // Replace with your image path
    imageAlt: 'Digital Transformation',
  },
];

const HeroCarousel: React.FC = () => {
  const [enterAnimation, setEnterAnimation] = useState<boolean>(true);
  const [exitAnimation, setExitAnimation] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
//HOOK FOR ANIMATION 
  useEffect(() => {
    let intervalId: NodeJS.Timeout;//this is actually a timeout 
    let animationInterval: NodeJS.Timeout;//this is actually an interval
    //function to update text and images
    const updateValues = () => {
      setEnterAnimation(true);
      setExitAnimation(false);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
      intervalId = setTimeout(() => {
        setEnterAnimation(false);
        setExitAnimation(false);
        intervalId = setTimeout(() => {
          setEnterAnimation(false);
          setExitAnimation(true);
          intervalId = setTimeout(() => {
          }, 1000);
        }, 3000);
      }, 1000);
    };
    animationInterval = setInterval(updateValues, 5000);//interval to repeat in 5000, because 1000 + 3000 + 1000
    updateValues();//initial exicution

    return () => {
      clearInterval(animationInterval);
      clearTimeout(intervalId);//clearing 
    }; 
  }, []);




  const { heading, paragraph, imageSrc, imageAlt } = contentItems[currentIndex];

  return (
    <>
      <div className="w-full h-screen bg-linear-to-r from-indigo-500 to-yellow-300 flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="text-white text-left md:text-left">
            <h1 className={`text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-500 to-white text-transparent bg-clip-text ${enterAnimation && "animate-slideIn"} ${exitAnimation && "animate-slideOut"}`}>
              {heading}
            </h1>
            <p className={`text-lg mb-8 ${enterAnimation && "animate-slideIn"} ${exitAnimation && "animate-slideOut"}`}>{paragraph}</p>
            <div className="space-x-4">
              <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Start Now
              </button>
              <button className="bg-transparent hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded border border-yellow-500 hover:border-transparent focus:outline-none focus:shadow-outline">
                Try Free Demo
              </button>
            </div>
          </div>

          {/* Image */}
          <div className={`${enterAnimation && "animate-slideIn"} ${exitAnimation && "animate-slideOut"}`}>
            <img
              src={imageSrc}
              alt={imageAlt}
              width={500}
              height={300}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
      {/*ANIMATIONS*/}
      <style jsx>
        {
          `
@keyframes slideOut{
  0% {
    transform: translateX(-100%) translateY(-100%);
    opacity: 0;
    }
  100% {
    transform: translateX(0) translateY(0);
    opacity: 1;
  }
}
  
.animate-slideOut{
  animation: slideOut 1s ease-out reverse;
}

@keyframes slideIn {
  0% {
    transform: translateX(100%) translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0) translateY(0);
    opacity: 1;
  }
}

.animate-slideIn {
  animation: slideIn 1s ease-out;
}
`
        }
      </style>

    </>
  );
};

export default HeroCarousel;
