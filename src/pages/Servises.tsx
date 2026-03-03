import { Phone, MessageCircle } from "lucide-react";
import { phone_number, whatsapp_number } from "../Genaral/secrete";

const services = [
  {
    name: "Relationship Consultation",
    desc: "Professional discussion sessions focused on improving communication and understanding in personal relationships.",
    img: "https://i.pinimg.com/1200x/3f/f5/89/3ff5895bca8970847577656ffe788eff.jpg",
  },
  {
    name: "Marriage Consultation",
    desc: "Confidential advisory sessions designed to support couples in constructive dialogue and mutual understanding.",
    img: "https://i.pinimg.com/736x/fa/ee/46/faee46287149c9a2470c20d26318fee1.jpg",
  },
  {
    name: "Legal Consultation Support",
    desc: "Guidance-oriented sessions to discuss planning, documentation awareness, and structured decision-making.",
    img: "https://i.pinimg.com/1200x/fb/4e/36/fb4e36b171a92fb4d391f3bc6a90e8a5.jpg",
  },
  {
    name: "Financial Advisory Discussion",
    desc: "Consultation sessions focused on clarity in financial planning and thoughtful evaluation of options.",
    img: "https://i.pinimg.com/736x/53/3a/25/533a25d0fd940cc5fc8b5fdaf457b14a.jpg",
  },
  {
    name: "Education Guidance",
    desc: "Structured sessions for discussing academic direction, focus strategies, and personal development goals.",
    img: "https://i.pinimg.com/736x/7f/8a/60/7f8a6099a523cc79342eaee0a29e92f8.jpg",
  },
  {
    name: "Career Consultation",
    desc: "Advisory discussions to help evaluate opportunities and support informed professional decisions.",
    img: "https://i.pinimg.com/736x/2d/21/ff/2d21ff0997bd7bdfb46491c3d13798c3.jpg",
  },
  {
    name: "Personal Advisory Session",
    desc: "Confidential consultation focused on reflection, planning, and responsible decision-making.",
    img: "https://i.pinimg.com/1200x/40/6d/94/406d941b9978384bd9008b1f81c613a3.jpg",
  },
];

export default function Services() {
  return (
    <div className="relative bg-gradient-to-br from-purple-100 via-sky-50 to-white py-24 px-6 overflow-hidden">
      <div className="absolute top-10 -left-16 w-72 h-72 bg-fuchsia-300/30 rounded-full blur-[100px] z-0"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-cyan-300/30 rounded-full blur-[120px] z-0"></div>

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent drop-shadow-lg tracking-tight">
          Our Consultation Services
        </h2>
        <p className="text-gray-700 mt-6 text-lg md:text-xl leading-relaxed">
          Professional consultation sessions designed to provide clarity,
          structured discussion, and thoughtful guidance.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="group relative bg-white/50 backdrop-blur-xl rounded-3xl ring-1 ring-violet-200 shadow-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="relative h-60 overflow-hidden">
              <img
                src={service.img}
                alt={service.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            <div className="p-6 flex flex-col h-full">
              <h3 className="text-2xl font-bold text-violet-700 mb-3">
                {service.name}
              </h3>
              <p className="text-gray-600 flex-grow leading-relaxed">
                {service.desc}
              </p>

              <div className="mt-6 flex gap-3">
                <a href={`tel:${phone_number}`} className="flex-1">
                  <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-pink-600 text-white px-4 py-2 rounded-xl shadow-md transition">
                    <Phone size={18} /> Contact
                  </button>
                </a>

                <a
                  href={`https://wa.me/${whatsapp_number}?text=Hello,%20I%20would%20like%20to%20book%20a%20consultation%20session.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-xl shadow-md transition">
                    <MessageCircle size={18} /> WhatsApp
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
