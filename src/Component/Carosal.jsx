import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carosal.css';

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow next-arrow" onClick={onClick}>
      <span className="arrow-symbol">
        <img className="arrow1" src="Images/arrow1.png" alt="Next" />
      </span>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev-arrow" onClick={onClick}>
      <span className="arrow-symbol">
        <img src="Images/arrow2.png" alt="Previous" />
      </span>
    </div>
  );
};

const Carosal = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const imageClasses = ['.i1', '.i3', '.i5', '.i6', '.i2', '.i7', '.i4']; 

  // Ensure useEffect updates when currentSlide changes
  useEffect(() => {
    const index = currentSlide % imageClasses.length;
    const element = document.querySelector(imageClasses[index]);

    if (element) {
      element.classList.add('animate');
      setTimeout(() => {
        element.classList.remove('animate');
      }, 2000); // Duration of the animation
    }
  }, [currentSlide, imageClasses]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <PrevArrow />,
    prevArrow: <NextArrow />,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex), // Update currentSlide on slide change
  };

  const slides = [
    {
      image: "Images/frame.png",
    },
    {
      image: "Images/frame.png",
    },
    {
      image: "Images/frame.png",
    },
    {
      image: "Images/frame.png",
    },
    {
      image: "Images/frame.png",
    },
    {
      image: "Images/frame.png",
    },
    {
      image: "Images/frame.png",
    },
  ];

  return (
    <div className="main">
      <p className="title">Testimonials</p>
      <div className="image1">
        <img src="Images/rect.png" className="imag1" alt="decorative" />
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="card">
              <div className="a">
                <img
                  src={slide.image}
                  alt={`Slide ${index}`}
                  className="card-image"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="image2">
        <img src="Images/rect.png" className="imag2" alt="decorative" />
      </div>
      <img src="Images/Ellipse 314.png" className="i1" alt="decorative"/>
      <img src="Images/Ellipse 311.jpg" className="i7" alt="decorative"/>
      <img src="Images/Ellipse 312.png" className="i2" alt="decorative"/>
      <img src="Images/Ellipse 313.png" className="i3" alt="decorative"/>
      <img src="Images/Ellipse 317.png" className="i4" alt="decorative"/>
      <img src="Images/Ellipse 316.png" className="i5" alt="decorative"/>
      <img src="Images/Ellipse 315.png" className="i6" alt="decorative"/>
    </div>
  );
};

export default Carosal;
