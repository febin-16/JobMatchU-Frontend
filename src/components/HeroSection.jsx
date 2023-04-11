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
    <div className="h-auto bg-gray-50 flex items-center">
      <section className="p-10  bg-cover bg-center py-32 w-full bg-opacity-32" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${'https://source.unsplash.com/random'})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }} >
        <div className="container mx-auto text-left text-white">
          <div className="flex items-center">
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-medium mb-6">Welcome to JobMatchU</h1>
              <p className="text-xl mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
                euismod odio, gravida pellentesque urna varius vitae.</p>
            </div>
            <div className="w-1/2 pl-16">
              <img src="https://source.unsplash.com/random?ux" className="hidden md:block h-64 w-full object-cover rounded-xl" alt="Layout Image"/>
          </div>
            </div>
          </div>
      </section>
    </div>
  )
}

export default HeroSection