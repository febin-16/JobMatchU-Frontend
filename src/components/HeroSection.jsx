import React from 'react';
import Carousel from "../components/Caraousel"
import img1 from "../assets/img1.jpeg"
import img2 from "../assets/img2.jpeg"
const slides = [
  
  "https://img-b.udemycdn.com/notices/web_carousel_slide/image/785695e9-5e74-486e-98d5-27354a474246.jpg",
  "https://img-b.udemycdn.com/notices/web_carousel_slide/image/d3d07904-3876-4c81-9be9-7d53f4f6b319.jpg",
]

function HeroSection() {
  return (
    <>
      <div className="max-w-lg">
        <Carousel autoslide={true}>
          {[
            slides.map((s)=> <img src={s} />),
          ]}
        </Carousel>
      </div>
    </>
  );
}

export default HeroSection