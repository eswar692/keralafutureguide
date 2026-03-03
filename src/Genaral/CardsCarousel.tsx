"use client";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Phone, MessageCircle } from "lucide-react";
import { phone_number, whatsapp_number } from "./secrete";

const cards = [
  {
    title: "Relationship Consultation",
    desc: "Professional guidance to help you navigate relationship challenges with clarity, understanding, and practical advice for better communication.",
    img: "https://i.pinimg.com/736x/9e/62/89/9e6289902fb93c22b7245c4a72ab355d.jpg",
  },
  {
    title: "Personal Guidance Session",
    desc: "Confidential one-on-one consultation focused on life decisions, career direction, and personal growth through structured advisory support.",
    img: "https://i.pinimg.com/736x/d1/7b/6e/d17b6e6bbe4cb76812aea53029b0182d.jpg",
  },
  {
    title: "Business Consultation",
    desc: "Advisory sessions designed to discuss planning, decision-making strategies, and structured approaches to professional development.",
    img: "https://i.pinimg.com/736x/84/dd/e6/84dde6e4a1641f19a2f53577ec4b9f4c.jpg",
  },
  {
    title: "Marriage Consultation",
    desc: "Supportive consultation focused on communication, understanding perspectives, and improving relationship harmony.",
    img: "https://i.pinimg.com/736x/9e/62/89/9e6289902fb93c22b7245c4a72ab355d.jpg",
  },
  {
    title: "Career Guidance",
    desc: "Structured advisory sessions to help you evaluate opportunities, clarify goals, and make informed career decisions.",
    img: "https://i.pinimg.com/736x/d1/7b/6e/d17b6e6bbe4cb76812aea53029b0182d.jpg",
  },
  {
    title: "Life Advisory Services",
    desc: "Confidential consultation sessions offering practical guidance to support thoughtful decision-making and long-term planning.",
    img: "https://i.pinimg.com/736x/84/dd/e6/84dde6e4a1641f19a2f53577ec4b9f4c.jpg",
  },
];

const CardCarousel = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false },
    [Autoplay({ delay: 4000, stopOnInteraction: false })],
  );

  return (
    <section className="relative w-full max-w-7xl mx-auto py-16 px-4 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-16 right-16 w-40 h-40 bg-pink-400/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Embla Carousel */}
      <div className="relative" ref={emblaRef}>
        <div className="flex gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33%]"
            >
              <div className="relative group bg-gradient-to-tr from-purple-900/80 via-indigo-800/80 to-black/80 border border-white/20 rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-500">
                {/* Card Image */}
                <div className="absolute -top-10 w-28 h-28 rounded-full border-4 border-yellow-400 shadow-xl overflow-hidden z-20">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text */}
                <div className="mt-20 z-30">
                  <h3 className="text-2xl font-extrabold text-yellow-300 mb-3 montserrat">
                    {card.title}
                  </h3>
                  <p className="text-gray-100/90 text-sm md:text-base open-sans leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                {/* Buttons */}
                <div className="mt-6 flex gap-4 z-30">
                  <a
                    href={`tel:${phone_number}`}
                    className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-5 py-2 rounded-full flex items-center gap-2 shadow-md hover:scale-105 transition"
                  >
                    <Phone size={18} /> Contact
                  </a>
                  <a
                    href={`https://wa.me/${whatsapp_number}?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20consultation%20services.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-5 py-2 rounded-full flex items-center gap-2 shadow-md hover:scale-105 transition"
                  >
                    <MessageCircle size={18} /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardCarousel;
