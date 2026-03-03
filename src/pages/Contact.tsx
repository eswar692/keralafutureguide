import { Mail, Phone } from "lucide-react";
import Form from "../Genaral/Form";
import {
  phone_number,
  whatsapp_number,
  company_name,
} from "../Genaral/secrete";

export default function Contact() {
  return (
    <div className="bg-gradient-to-br from-purple-100 via-pink-50 to-rose-100 min-h-screen py-24 px-6 relative overflow-hidden">
      <div className="absolute top-[-100px] left-[-80px] w-[300px] h-[300px] bg-pink-300/30 blur-[100px] rounded-full z-0" />
      <div className="absolute bottom-[-100px] right-[-80px] w-[400px] h-[400px] bg-violet-300/30 blur-[120px] rounded-full z-0" />

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-violet-600 via-fuchsia-600 to-rose-600 bg-clip-text text-transparent drop-shadow-lg">
          Contact {company_name}
        </h2>
        <p className="text-gray-700 mt-6 text-lg leading-relaxed">
          Reach out via WhatsApp or Phone, or fill out the form below to book a
          professional consultation session.
        </p>
      </div>

      {/* Grid: Contact Info & Form */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 relative z-10">
        {/* Contact Info Panel */}
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-xl p-10">
          <h3 className="text-3xl font-semibold text-violet-700 mb-6">
            Get in Touch
          </h3>

          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            Consultation sessions are available for discussions related to
            relationships, career planning, family matters, and personal
            decision-making.
          </p>

          <p className="text-sm leading-relaxed text-gray-700">
            No 34, 7th Cross, Vijay Nagar, 98/3 DC Road,
            <br />
            Kutti Yappa Garden, Bilekahalli,
            <br />
            Bengaluru (Urban) – 560076, Karnataka
            <br />
            <span className="text-purple-600 font-semibold">
              Phone: {phone_number}
            </span>
          </p>

          <br />

          <div className="space-y-5 text-lg text-gray-800">
            <p className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-pink-600" />
              <span>
                <span className="font-semibold">WhatsApp:</span>{" "}
                {whatsapp_number}
              </span>
            </p>

            <p className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-pink-600" />
              <span>
                <span className="font-semibold">Phone:</span> {phone_number}
              </span>
            </p>
          </div>
        </div>

        {/* Form Panel */}
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-xl p-10">
          <h3 className="text-3xl font-semibold text-center text-rose-700 mb-6">
            Book a Consultation
          </h3>
          <Form />
        </div>
      </div>

      {/* Services Info Section */}
      <div className="mt-24 max-w-5xl mx-auto text-center relative z-10">
        <h3 className="text-4xl font-bold bg-gradient-to-r from-rose-600 to-violet-600 bg-clip-text text-transparent drop-shadow-sm">
          Our Consultation Approach
        </h3>
        <p className="text-gray-700 mt-6 text-lg leading-relaxed">
          We provide structured discussion-based sessions focused on clarity,
          reflection, and informed decision-making. All sessions are conducted
          with professionalism and confidentiality.
        </p>
      </div>
    </div>
  );
}
