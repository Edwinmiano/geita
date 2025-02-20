import { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: 'Kamau Njoroge',
    role: 'Project Manager',
    company: 'Kifaru Developers Ltd',
    content: 'Geita Investments has been our trusted supplier for multiple residential projects in Nairobi. Their quality materials and reliable delivery have been crucial to our success.',
  },
  {
    name: 'Akinyi Otieno',
    role: 'Site Engineer',
    company: 'Mwananchi Contractors',
    content: 'The expert consultation from Geita Investments team has helped us make cost-effective decisions for our construction materials. Their knowledge of local building requirements is exceptional.',
  },
  {
    name: 'Kiprop Kipruto',
    role: 'Construction Manager',
    company: 'Upendo Properties',
    content: 'As a property developer in Eldoret, finding a reliable construction materials supplier was crucial. Geita Investments has exceeded our expectations with their quality and service.',
  },
];

export function Testimonials() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#29235C] mb-12">
          What Our Clients Say
        </h2>

        <div className="max-w-4xl mx-auto">
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                  <p className="text-gray-600 text-lg mb-6">"{testimonial.content}"</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-[#29235C]">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
