import { motion } from "framer-motion";
import { ChevronRight, Phone } from "lucide-react";
import useInViewOnce from "./InView";
import {
  company_name,
  person_name,
  phone_number,
  website_url,
} from "./secrete";

export default function Footer() {
  const [ref, inView] = useInViewOnce(0.2);

  const services = [
    "Relationship Consultation",
    "Marriage Consultation",
    "Career Guidance",
    "Business Advisory",
    "Personal Consultation",
  ];

  const whyChoose = [
    "Confidential Discussions",
    "Professional Approach",
    "Client-Focused Sessions",
    "Online & Offline Consultation",
  ];

  return (
    <motion.footer
      className="relative mt-2 w-full overflow-hidden text-white
      bg-gradient-to-br from-fuchsia-800 via-purple-900 to-indigo-950 pt-20"
    >
      {/* Background Glows */}
      <div className="absolute -top-24 -left-24 w-[450px] h-[450px] bg-pink-600 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute top-1/4 -right-32 w-[520px] h-[520px] bg-indigo-700 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-1/3 w-[420px] h-[420px] bg-yellow-500 rounded-full blur-3xl opacity-30"></div>

      <motion.div
        ref={ref}
        initial={{ y: 40, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="relative max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-10"
      >
        {/* ABOUT */}
        <div className="rounded-3xl p-6 bg-purple-950 border border-white/20">
          <h2 className="text-2xl font-extrabold mb-3">About {company_name}</h2>
          <p className="text-sm leading-relaxed">
            <b>{company_name}</b> provides structured consultation and advisory
            services. <b>{person_name}</b> conducts sessions focused on clarity,
            thoughtful discussion, and informed decision-making.
          </p>
        </div>

        {/* CONTACT */}
        <div className="rounded-3xl p-6 bg-indigo-950 border border-white/20">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>

          <p className="flex items-center gap-2">
            <Phone className="w-5 h-5" />
            {phone_number}
          </p>

          <p className="flex items-center gap-2 mt-2">
            <Phone className="w-5 h-5" />
            91875 83929
          </p>

          <p className="text-sm mt-3 leading-relaxed">
            No. 34, 7th Cross, Vijay Nagar
            <br />
            Bilekahalli, Bengaluru – 560076
            <br />
            Karnataka, India
          </p>
        </div>

        {/* SERVICES */}
        <div className="rounded-3xl p-6 bg-fuchsia-950 border border-white/20">
          <h2 className="text-2xl font-bold mb-3">Services</h2>
          <ul className="space-y-2 text-sm">
            {services.map((service, i) => (
              <li key={i} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* WHY CHOOSE */}
        <div className="rounded-3xl p-6 bg-emerald-950 border border-white/20">
          <h2 className="text-2xl font-bold mb-3">Why Choose Us</h2>
          <ul className="space-y-2 text-sm">
            {whyChoose.map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* LEGAL */}
        <div className="rounded-3xl p-6 bg-gray-900 border border-white/20">
          <h2 className="text-2xl font-bold mb-3">Legal</h2>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="/privacy-policy"
                className="hover:text-yellow-300 transition"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-yellow-300 transition">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
      </motion.div>

      <CopyRightAndContact />
    </motion.footer>
  );
}

const CopyRightAndContact = () => {
  return (
    <div className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-800 py-5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <div>
          © {new Date().getFullYear()}{" "}
          <a
            href={website_url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-yellow-300 transition"
          >
            {company_name}
          </a>{" "}
          – All Rights Reserved.
        </div>

        {/* Inline Legal Links */}
        <div className="flex gap-6 text-lg">
          <a
            href="/privacy-policy"
            className="hover:text-yellow-300 transition"
          >
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-yellow-300 transition">
            Terms
          </a>
        </div>
      </div>
    </div>
  );
};
