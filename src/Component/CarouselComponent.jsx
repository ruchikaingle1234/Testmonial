// import React, { useState,useEffect } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./CarouselComponent.css";



// const NextArrow = (props) => {
//   const { onClick } = props;
//   return (
//     <div className="custom-arrow next-arrow" onClick={onClick}>
//       <span className="arrow-symbol">→</span>
//     </div>
//   );
// };



// const PrevArrow = (props) => {
//   const { onClick } = props;
//   return (
//     <div className="custom-arrow prev-arrow" onClick={onClick}>
//       <span className="arrow-symbol">←</span>
//     </div>
//   );
// };

// function CarouselComponent() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const settings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     beforeChange: ( newIndex) => setCurrentSlide(newIndex),
//   };
//   // useEffect((index) => {
//   //   const randomLeft = index < 4 ? 10 + Math.random() + 1 : 80 + (index - 4) * -6;
//   //   setLeft(randomLeft);
//   // }, []);

//   const slides = [
//     {
//       image: 'Images/Subtract.png',
//       name: "Ria",
//       rating: 5,
//       institution: "Oxford College",
//       feedback: "Learning at my own pace has been a game-changer! This platform allows me to focus on the areas I need improvement in and revisit concepts that were a little tricky. I feel so much more confident now!",
//     },
//     {
//       image: 'Images/Subtra.png',
//       name: "John",
//       rating: 4,
//       institution: "Harvard University",
//       feedback: "This platform is amazing! It has helped me improve my grades significantly.",
//     },
//     {
//       image: 'Images/Subtract.png',
//       name: "Jiya",
//       rating: 5,
//       institution: "Stanford University",
//       feedback: "A wonderful learning experience. I recommend it to all students.",
//     },
//     {
//       image: 'Images/Subtract.png',
//       name: "Ria",
//       rating: 5,
//       institution: "Oxford College",
//       feedback: "Learning at my own pace has been a game-changer! This platform allows me to focus on the areas I need improvement in and revisit concepts that were a little tricky. I feel so much more confident now!",
//     },
//     {
//       image: 'Images/Subtra.png',
//       name: "John",
//       rating: 4,
//       institution: "Harvard University",
//       feedback: "This platform is amazing! It has helped me improve my grades significantly.",
//     },
//     {
//       image: 'Images/Subtract.png',
//       name: "Jiya",
//       rating: 5,
//       institution: "Stanford University",
//       feedback: "A wonderful learning experience. I recommend it to all students.",
//     },
//     {
//       image: 'Images/Subtract.png',
//       name: "Jiya",
//       rating: 5,
//       institution: "Stanford University",
//       feedback: "A wonderful learning experience. I recommend it to all students.",
//     },
    
    
//   ];

//   return (
//     <div className="main">
//       <div className="title1">
//         <p className="p1">Testimonials</p>
//       </div>
//       <div className="background-images">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`circle-image ${currentSlide === index ? 'glow' : ''}`}
//             style={{
//               top: `${30 + Math.sin(index * 0.6) * 45 + Math.random() * 3 - 3}%`, 
//               left: index < 4 
              
//                 ? `${2+ Math.sin(index * 0.9) * 12 + Math.random() * 2 - 2}%` 
                
//                 : `${60 + Math.sin((index - 3) * 0.9) * 15 + Math.random() * 2 - 2}%`,
//             }}
//           >
//             <img className="c1" src={slide.image} alt={`${slide.name} thumbnail`} />
//           </div>
//         ))}
//       </div>

//       <div className="image1">
//         <img src="Images/rect.png" className="imag1" alt="decorative" />
//       </div>

//       <div className="slider-container">
//         <Slider {...settings}>
//           {slides.map((slide, index) => (
//             <div key={index} className="card">
//               <div className="a">
//                 <img src={slide.image} alt={slide.name} className="card-image" />
//                 <div className="card-content">
//                   <h3 className="card-name">{slide.name}</h3>
//                 </div>
//                 <div className="card-rating">
//                   {Array.from({ length: slide.rating }, (_, i) => (
//                     <span key={i} className="star">★</span>
//                   ))}
//                 </div>
//                 <p className="card-institution">@{slide.institution}</p>
//               </div>
//               <div className="a1">
//                 <p className="card-feedback">"{slide.feedback}"</p>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>

//       <div className="i1">
//         <img src="Images/rect.png" className="image2" alt="decorative" />
//       </div>
//     </div>
//   );
// }

// export default CarouselComponent;
