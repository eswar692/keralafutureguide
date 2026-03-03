import {
  Briefcase,
  Heart,
  Phone,
  Scale,
  Users,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import Testimonials from "../Genaral/Testimonial";
import FAQ from "../Genaral/FAQ";
import CardCarousel from "../Genaral/CardsCarousel";
import {
  company_name,
  person_name,
  phone_number,
  whatsapp_number,
} from "../Genaral/secrete";
import ImageView from "../Genaral/VideoView";

const Home = () => {
  return (
    <div className="flex flex-col   w-full h-full">
      <ImageView />
      <CardCarousel />
      <Problems />
      <AboutSection />
      <ConsultationServices />
      <ConsultationServicesModern />
      <AllServicesModern />
      <HomeLastDesign />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Home;
// Home Last Design
const Problems = () => {
  const services = [
    {
      title: "Relationship Consultation",
      desc: "Professional guidance sessions available via call and WhatsApp consultation.",
      img: "https://i.pinimg.com/736x/4a/c8/aa/4ac8aaa977a4eef9bb1eac0041929380.jpg",
    },
    {
      title: "Marriage Consultation",
      desc: "Confidential advisory sessions focused on communication and understanding.",
      img: "https://i.pinimg.com/1200x/c1/2b/fc/c12bfc17ac4630ade4f0e1e4a1f819e2.jpg",
    },
    {
      title: "Education Guidance",
      desc: "Structured consultation to discuss focus, planning, and academic direction.",
      img: "https://i.pinimg.com/736x/73/49/66/73496669119b34a1dd1ab91ffd626f68.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
      {services.map((item, index) => (
        <div
          key={index}
          className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden"
        >
          {/* Image */}
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-56 object-cover"
          />

          {/* Content */}
          <div className="p-4 text-center">
            <h3 className="text-lg font-bold text-white montserrat">
              {item.title}
            </h3>

            <p className="text-sm text-gray-300 mt-2">{item.desc}</p>

            <a
              href={`https://wa.me/${whatsapp_number}?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20consultation%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4"
            >
              <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition">
                WhatsApp
              </button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

const AboutSection = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-purple-50 via-pink-50 to-orange-50 overflow-hidden">
      {/* Background Abstract Shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-300/30 rounded-full blur-3xl animate-pulse pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side Content */}
        <div className="space-y-6 md:pr-6 text-center md:text-left">
          <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm md:text-base font-semibold montserrat shadow-lg hover:scale-105 transition-transform duration-300">
            About Our Services
          </button>

          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 montserrat drop-shadow-lg">
            {company_name}
          </h2>

          <p className="text-gray-800 leading-relaxed text-lg md:text-xl open-sans">
            <span className="font-bold text-purple-600">{company_name}</span>{" "}
            offers professional consultation and advisory services designed to
            support individuals in making informed life decisions with clarity
            and confidence.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
            Our approach focuses on structured discussion, thoughtful
            perspective, and practical guidance tailored to each client’s
            situation. Sessions are conducted with professionalism,
            confidentiality, and respect.
          </p>

          {/* Call to Action */}
          <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href={`tel:${phone_number}`}
              className="flex items-center gap-2 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Contact Us
            </a>

            <a
              href={`https://wa.me/${whatsapp_number}?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20consultation%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-green-500 via-teal-500 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center relative">
          <div className="relative w-full max-w-md">
            <img
              src="https://i.pinimg.com/1200x/2b/7e/f6/2b7ef69aef08f4f9ec85e1f37984332a.jpg"
              alt="Consultation Services Banner"
              className="w-full h-[420px] rounded-3xl object-cover shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-300/40 blur-3xl rounded-full animate-pulse"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-pink-300/40 blur-3xl rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ConsultationServices = () => {
  const services = [
    {
      title: "Relationship Consultation",
      desc: "Professional consultation sessions focused on improving communication, understanding perspectives, and strengthening relationships.",
      img: "https://i.pinimg.com/1200x/56/23/3a/56233a0caad6ac1136c682118ca138f8.jpg",
    },
    {
      title: "Couple Guidance",
      desc: "Confidential advisory sessions designed to support partners in resolving misunderstandings and building mutual respect.",
      img: "https://i.pinimg.com/736x/da/1e/de/da1ede4ba8faa752488419d5a2802fd7.jpg",
    },
    {
      title: "Personal Advisory",
      desc: "Structured discussions to help individuals navigate emotional challenges with clarity and thoughtful decision-making.",
      img: "https://i.pinimg.com/736x/bc/49/b6/bc49b6e04d96e9d687ea1740e4cc93ed.jpg",
    },
    {
      title: "Family Consultation",
      desc: "Supportive consultation focused on promoting constructive dialogue and improving harmony within families.",
      img: "https://i.pinimg.com/736x/e7/b3/63/e7b36387a8c950dbb340455e0fdbdb1e.jpg",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-purple-900 via-indigo-900 to-black overflow-hidden">
      {/* Decorative Background Aura */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-yellow-300 to-red-400 drop-shadow-lg montserrat mb-14">
          Our Consultation Services
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-lg hover:shadow-pink-500/40 hover:scale-[1.03] transition-all duration-500"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4 text-center">
                <h3 className="text-xl font-bold text-yellow-300 montserrat drop-shadow-md">
                  {service.title}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed open-sans">
                  {service.desc}
                </p>

                {/* Contact Button */}
                <a href={`tel:${phone_number}`}>
                  <button className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-white font-semibold shadow-lg hover:shadow-pink-500/50 hover:scale-105 transition-all duration-300 montserrat">
                    <Phone className="w-5 h-5" /> Contact Us
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ConsultationServicesModern = () => {
  const services = [
    {
      title: "Marriage Consultation",
      img: "https://i.pinimg.com/736x/be/96/4b/be964bb4f6d6e07752fc4b363859b048.jpg",
    },
    {
      title: "Couple Guidance",
      img: "https://i.pinimg.com/736x/f5/b2/00/f5b200772b619765261b2a50b595ae72.jpg",
    },
    {
      title: "Relationship Advisory",
      img: "https://i.pinimg.com/1200x/2f/5b/b3/2f5bb3dde2c5891188f1170b5d12260f.jpg",
    },
    {
      title: "Financial Consultation",
      img: "https://i.pinimg.com/736x/40/99/9c/40999c10cdac6c327a1378c45be496b5.jpg",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-white text-center mb-12 montserrat"
        >
          Our Consultation Services
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="bg-gray-900 border border-gray-800 rounded-2xl 
                shadow-md hover:shadow-purple-500/20 
                transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-white montserrat">
                  {service.title}
                </h3>

                <a href={`tel:${phone_number}`}>
                  <button
                    className="mt-4 w-full flex items-center justify-center gap-2 
                      bg-purple-600 hover:bg-purple-700 
                      text-white text-sm font-semibold 
                      py-2.5 rounded-full transition-colors duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    Contact Us
                  </button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AllServicesModern = () => {
  const services = [
    {
      title: "Relationship Consultation",
      icon: Heart,
      desc: "Professional consultation focused on communication, understanding, and strengthening personal relationships.",
      gradient: "from-pink-500 via-rose-500 to-red-500",
    },
    {
      title: "Legal Consultation Support",
      icon: Scale,
      desc: "Advisory sessions to discuss documentation, process awareness, and structured decision planning.",
      gradient: "from-yellow-400 via-orange-500 to-red-500",
    },
    {
      title: "Family Advisory",
      icon: Users,
      desc: "Confidential discussions aimed at improving dialogue and harmony within families.",
      gradient: "from-green-400 via-emerald-500 to-teal-500",
    },
    {
      title: "Business Consultation",
      icon: Briefcase,
      desc: "Strategic advisory sessions focused on planning, growth direction, and professional development.",
      gradient: "from-blue-500 via-indigo-500 to-purple-600",
    },
    {
      title: "Personal Growth Guidance",
      icon: Users,
      desc: "Supportive sessions to help individuals reflect, plan, and make informed life decisions.",
      gradient: "from-fuchsia-500 via-pink-500 to-rose-500",
    },
    {
      title: "Wellness & Lifestyle Consultation",
      icon: Sparkles,
      desc: "Structured conversations centered on balance, clarity, and thoughtful goal setting.",
      gradient: "from-purple-500 via-violet-500 to-indigo-500",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 
            bg-gradient-to-r from-pink-400 via-yellow-400 to-purple-500 
            bg-clip-text text-transparent montserrat"
        >
          Our Consultation Services
        </motion.h2>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, id) => (
            <motion.div
              key={id}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 180 }}
              className={`relative rounded-3xl p-1 bg-gradient-to-br ${service.gradient}`}
            >
              {/* Inner Card */}
              <div className="h-full rounded-3xl bg-gray-950 p-8 text-center shadow-xl">
                {/* Icon */}
                <div
                  className={`mx-auto mb-6 w-20 h-20 rounded-full 
                    flex items-center justify-center 
                    bg-gradient-to-br ${service.gradient} shadow-lg`}
                >
                  <service.icon className="w-10 h-10 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 montserrat">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6 open-sans">
                  {service.desc}
                </p>

                {/* Button */}
                <a href={`tel:${phone_number}`}>
                  <button
                    className={`w-full py-3 rounded-full font-semibold text-white
                      bg-gradient-to-r ${service.gradient}
                      hover:brightness-110 transition-all duration-300`}
                  >
                    Contact Us
                  </button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

function HomeLastDesign() {
  return (
    <section className="mt-2 mb-2 relative bg-gradient-to-br from-purple-900 via-indigo-900 to-black py-20 px-6 overflow-hidden">
      {/* Stars background overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center relative"
        >
          <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-yellow-400 blur-3xl opacity-40 animate-pulse"></div>
          <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-yellow-400/60 backdrop-blur-xl">
            <img
              src="https://i.pinimg.com/1200x/3d/ef/55/3def558579612a517065a7c48310e918.jpg"
              alt={person_name}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 rounded-full border-4 border-pink-400/40 animate-spin-slow"></div>
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-300 via-pink-400 to-red-500 bg-clip-text text-transparent drop-shadow-lg montserrat">
            <Sparkles className="inline w-8 h-8 text-yellow-300 animate-pulse mr-2" />
            {person_name}
          </h2>

          <h3 className="text-lg md:text-2xl font-semibold text-gray-200 montserrat">
            Professional Consultation & Advisory Services
          </h3>

          <p className="text-gray-300 leading-relaxed text-base open-sans">
            {person_name} offers structured consultation sessions focused on
            thoughtful discussion, clarity, and informed decision-making.
            Services are provided with professionalism, confidentiality, and
            respect for each individual’s situation.
          </p>

          {/* Contact Section */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-3">
            <a
              href={`tel:${phone_number}`}
              className="flex items-center gap-2 bg-gradient-to-r from-red-500 via-pink-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-pink-400/60 hover:scale-105 transition-all duration-300"
            >
              <Phone size={20} /> Contact Us
            </a>

            <a
              href={`https://wa.me/${whatsapp_number}?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20consultation%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-green-400/60 hover:scale-105 transition-all duration-300"
            >
              <MessageCircle size={20} /> WhatsApp
            </a>
          </div>

          {/* Professional Note */}
          <p className="mt-5 text-yellow-300 font-semibold tracking-wide text-sm md:text-base poppins">
            Confidential | Professional | Client-Focused
          </p>
        </motion.div>
      </div>
    </section>
  );
}
