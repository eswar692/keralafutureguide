import {
  company_name,
  phone_number,
  whatsapp_number,
} from "../Genaral/secrete";

const TermsAndConditions = () => {
  return (
    <section className="min-h-screen bg-gray-100 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
          Terms & Conditions
        </h1>

        <p className="text-gray-600 mb-6">
          Welcome to {company_name}. By accessing or using our website and
          services, you agree to comply with and be bound by the following Terms
          & Conditions. Please read them carefully.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-800">
          1. Services
        </h2>
        <p className="text-gray-600">
          {company_name} provides consultation and advisory services. All
          sessions are conducted for informational and discussion purposes only.
          Outcomes may vary based on individual circumstances.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-800">
          2. Appointments & Payments
        </h2>
        <p className="text-gray-600">
          Consultation sessions must be scheduled in advance. Any applicable
          fees must be paid prior to the session. Payments once made are
          non-refundable unless otherwise agreed in writing.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-800">
          3. No Guarantees
        </h2>
        <p className="text-gray-600">
          We do not guarantee specific results or outcomes from any consultation
          session. The services are provided as guidance only.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-800">
          4. Confidentiality
        </h2>
        <p className="text-gray-600">
          All client information and discussions are handled with
          confidentiality and professionalism. We do not share personal
          information without consent unless required by law.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-800">
          5. User Responsibilities
        </h2>
        <p className="text-gray-600">
          Users agree to provide accurate information and to use our services
          responsibly. Any misuse of the website or services may result in
          termination of access.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-800">
          6. Intellectual Property
        </h2>
        <p className="text-gray-600">
          All content on this website, including text, design, and graphics, is
          the property of {company_name} and may not be copied or reused without
          permission.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-800">
          7. Limitation of Liability
        </h2>
        <p className="text-gray-600">
          {company_name} shall not be liable for any direct or indirect damages
          arising from the use of our services or website.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-800">
          8. Changes to Terms
        </h2>
        <p className="text-gray-600">
          We reserve the right to update these Terms & Conditions at any time.
          Continued use of the website constitutes acceptance of any changes.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-800">
          9. Contact Information
        </h2>
        <p className="text-gray-600">
          If you have any questions regarding these Terms & Conditions, you may
          contact us at:
        </p>

        <div className="mt-4 text-gray-700">
          <p>
            <strong>Phone:</strong> {phone_number}
          </p>
          <p>
            <strong>WhatsApp:</strong> {whatsapp_number}
          </p>
        </div>

        <p className="mt-10 text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </section>
  );
};

export default TermsAndConditions;
