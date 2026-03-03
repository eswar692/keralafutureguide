"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Quote } from "lucide-react";
import { person_name } from "./secrete";

const testimonials = [
  {
    name: "Arjun Verma",
    location: "Mumbai",
    image: "https://astrologerdeepaksharma.in/images/client-2.png",
    text: `${person_name} provided helpful consultation during an important phase of my business. The discussion gave me clarity and confidence to move forward.`,
  },
  {
    name: "Mala Kapoor",
    location: "Goa",
    image: "https://astrologerdeepaksharma.in/images/client-1.png",
    text: `I appreciate the professional approach and supportive guidance offered by ${person_name}. The session helped me reflect and think more clearly.`,
  },
  {
    name: "Pratha Kumari",
    location: "Delhi",
    image: "https://astrologerdeepaksharma.in/images/client-2.png",
    text: `The consultation experience was respectful and confidential. I found the discussion constructive and valuable for my personal decisions.`,
  },
];

export default function Testimonials() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true },
    [Autoplay({ delay: 3500 })],
  );

  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-red-600 via-pink-600 to-orange-500 bg-clip-text text-transparent drop-shadow-lg">
          What Our Clients Say
        </h2>
        <p className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto">
          Experiences shared by individuals who attended consultation sessions
          with <span className="font-semibold text-red-600">{person_name}</span>
          .
        </p>

        {/* Carousel */}
        <div className="mt-16 overflow-hidden relative" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33%]"
              >
                <div className="relative group bg-white/60 backdrop-blur-lg rounded-3xl shadow-2xl p-8 hover:shadow-pink-400/50 hover:scale-105 transition-all duration-500 border border-pink-200 h-full flex flex-col items-center">
                  <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-red-500 shadow-lg">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900">{t.name}</h3>
                  <span className="text-sm text-gray-500">{t.location}</span>

                  <p className="mt-4 text-gray-800 italic leading-relaxed text-center">
                    "{t.text}"
                  </p>

                  <Quote className="absolute top-4 right-4 w-8 h-8 text-pink-200 group-hover:scale-110 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Note */}
        <p className="mt-10 text-sm text-gray-500 max-w-3xl mx-auto">
          Testimonials reflect individual experiences. Outcomes may vary based
          on personal circumstances.
        </p>
      </div>
    </section>
  );
}
