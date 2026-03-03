import { useState } from "react";
import { ChevronDown, ChevronUp, MessageCircle } from "lucide-react";
import { person_name, phone_number } from "./secrete";

const faqs = [
  {
    question: `Can We Meet ${person_name} For Consultation?`,
    answer: `Yes, personal consultation sessions are available by prior appointment. 📲 WhatsApp: ${phone_number}`,
  },
  {
    question: "Is Online Or Telephonic Consultation Available?",
    answer: `Yes, you can connect via phone or online session from anywhere. 📞 Phone: ${phone_number}`,
  },
  {
    question: "What Kind Of Services Are Available?",
    answer:
      "We provide professional consultation and advisory sessions related to relationships, career planning, family discussions, and personal decision-making.",
  },
  {
    question: "Do You Offer Any Learning Programs?",
    answer:
      "Yes, structured learning sessions are available for individuals interested in understanding consultation methodologies and foundational concepts.",
  },
  {
    question: "Are Sessions Confidential?",
    answer:
      "Yes, all discussions are handled with professionalism, discretion, and confidentiality.",
  },
  {
    question: "How Do I Book A Session?",
    answer:
      "You can book a consultation by contacting us via phone or WhatsApp for scheduling details.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white overflow-hidden">
      <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-ping"></div>

      <div className="relative max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-red-400 to-yellow-300 drop-shadow-lg">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-300 mt-4 text-lg">
          Quick answers to help you understand our consultation services better.
        </p>

        {/* FAQ List */}
        <div className="mt-16 space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl overflow-hidden transition-all hover:scale-[1.02] shadow-pink-500/30"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left text-xl font-semibold text-white transition-all group-hover:text-pink-400"
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-pink-400" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-pink-400" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 text-gray-200 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-14 flex justify-center">
          <a
            href={`https://wa.me/${phone_number}?text=Hello,%20I%20would%20like%20to%20book%20a%20consultation%20session.`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:scale-105 hover:shadow-pink-400/50 transition-all duration-300">
              <MessageCircle className="w-6 h-6" />
              Contact For Consultation
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
