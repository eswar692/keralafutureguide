import { person_name, company_name } from "../Genaral/secrete";

export default function About() {
  return (
    <section className="bg-gradient-to-b from-indigo-50 to-blue-50 py-20 px-6 font-sans">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-10 md:p-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
          About Us
        </h2>

        <p className="text-gray-800 text-lg md:text-xl leading-relaxed">
          <span className="font-bold text-indigo-700">{person_name}</span> is a
          professional consultant associated with{" "}
          <span className="font-semibold text-violet-700">{company_name}</span>
          . With years of experience in advisory and discussion-based sessions,
          he provides structured consultation focused on clarity, reflection,
          and informed decision-making.
          <br />
          <br />
          Services are designed to offer thoughtful perspectives on personal,
          relationship, career, and family matters through confidential
          discussions. Sessions may be conducted in person or through remote
          consultation channels.
          <br />
          <br />
          Known for a professional and client-focused approach,{" "}
          <span className="font-semibold text-indigo-600">
            {person_name}
          </span>{" "}
          emphasizes respectful communication and practical guidance tailored to
          each individual’s circumstances.
          <br />
          <br />
          Our goal is to provide supportive consultation in a responsible and
          professional environment.
        </p>
      </div>
    </section>
  );
}
