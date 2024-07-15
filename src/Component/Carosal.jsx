// import React, { useState, useEffect } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import './Carosal.css';

// const NextArrow = (props) => {
//   const { onClick } = props;
//   return (
//     <div className="custom-arrow next-arrow" onClick={onClick}>
//       <span className="arrow-symbol">
//         <img className="arrow1" src="Images/arrow1.png" alt="Next" />
//       </span>
//     </div>
//   );
// };

// const PrevArrow = (props) => {
//   const { onClick } = props;
//   return (
//     <div className="custom-arrow prev-arrow" onClick={onClick}>
//       <span className="arrow-symbol">
//         <img src="Images/arrow2.png" alt="Previous" />
//       </span>
//     </div>
//   );
// };

// const Carosal = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const imageClasses = ['.i1', '.i3', '.i5', '.i6', '.i2', '.i7', '.i4']; 

  
  
//   useEffect(() => {
//     const index = currentSlide % imageClasses.length;
//     const element = document.querySelector(imageClasses[index]);

//     if (element) {
//       element.classList.add('animate');
//       setTimeout(() => {
//         element.classList.remove('animate');
//       }, 2000); // Duration of the animation
//     }
//   }, [currentSlide, imageClasses]);

//   const settings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2500,
//     nextArrow: <PrevArrow />,
//     prevArrow: <NextArrow />,
//     beforeChange: (newIndex) => setCurrentSlide(newIndex), 
    
//   };

//   const slides = [
//     {
//       image: "Images/frame.png",
//     },
//     {
//       image: "Images/frame.png",
//     },
//     {
//       image: "Images/frame.png",
//     },
//     {
//       image: "Images/frame.png",
//     },
//     {
//       image: "Images/frame.png",
//     },
//     {
//       image: "Images/frame.png",
//     },
//     {
//       image: "Images/frame.png",
//     },
//   ];

//   return (
//     <div className="main">
//       <p className="title">Testimonials</p>
//       <div className="image1">
//         <img src="Images/rect.png" className="imag1" alt="decorative" />
//       </div>
//       <div className="slider-container">
//         <Slider {...settings}>
//           {slides.map((slide, index) => (
//             <div key={index} className="card">
//               <div className="a">
//                 <img
//                   src={slide.image}
//                   alt={`Slide ${index}`}
//                   className="card-image"
//                 />
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//       <div className="image2">
//         <img src="Images/rect.png" className="imag2" alt="decorative" />
//       </div>
//       <img src="Images/Ellipse 314.png" className="i1" alt="decorative"/>
//       <img src="Images/Ellipse 311.jpg" className="i7" alt="decorative"/>
//       <img src="Images/Ellipse 312.png" className="i2" alt="decorative"/>
//       <img src="Images/Ellipse 313.png" className="i3" alt="decorative"/>
//       <img src="Images/Ellipse 317.png" className="i4" alt="decorative"/>
//       <img src="Images/Ellipse 316.png" className="i5" alt="decorative"/>
//       <img src="Images/Ellipse 315.png" className="i6" alt="decorative"/>
//     </div>
//   );
// };

// export default Carosal;
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carosal.css";

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
  const imageClasses = [
    ".i1",
    ".i3",
    ".i5",
    ".i6",
    ".i2",
    ".i7",
    ".i4",
    ".i8"
  ]; // Ensure this matches your image class names

  useEffect(() => {
    const index = currentSlide % imageClasses.length;
    const elements = document.querySelectorAll(".animate");

    elements.forEach((element) => {
      element.classList.remove("animate");
    });

    const nextIndex = (index + 1) % imageClasses.length;
    const prevIndex = (index - 1 + imageClasses.length) % imageClasses.length;

    document.querySelector(imageClasses[index]).classList.add("animate");
    document.querySelector(imageClasses[nextIndex]).classList.add("animate");
    document.querySelector(imageClasses[prevIndex]).classList.add("animate");
  }, [currentSlide, imageClasses]);

  const handleSlideChange = (newIndex) => {
    setCurrentSlide(newIndex);
  };

  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2300,
    nextArrow: <PrevArrow />,
    prevArrow: <NextArrow />,
    beforeChange: (current, next) => handleSlideChange(next),
  };

  const slides = [
    { image: "Images/card1.png" },
    { image: "Images/card2.png" },
    { image: "Images/card3.png" },
    { image: "Images/card4.png" },
    { image: "Images/card5.png" },
    { image: "Images/card6.png" },
    { image: "Images/card7.png" },
    { image: "Images/card8.png" },
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
      {/* Placeholder images with their respective classes */}
      <img src="Images/l1.png" className="i1" alt="decorative" />
      <img src="Images/Ellipse 311.png" className="i7" alt="decorative" />
      <img src="Images/r3.png" className="i2" alt="decorative" />
      <img src="Images/l2.png" className="i3" alt="decorative" />
      <img src="Images/r2.png" className="i4" alt="decorative" />
      <img src="Images/l4.png" className="i5" alt="decorative" />
      <img src="Images/l3.png" className="i6" alt="decorative" />
      <img src="Images/l5.png" className="i8" alt="decorative" />
    </div>
  );
};

export default Carosal;

