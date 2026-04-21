"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import { Minus, Plus } from "lucide-react";

export function FaqAccordion() {
  const [openTopic, setOpenTopic] = useState<number | null>(0);

  const toggleTopic = (index: number) => {
    setOpenTopic((prev) => (prev === index ? null : index));
  };

  const faqData = [
    {
      question: "How do I book a course?",
      answer: (
        <div className="text-gray-600 font-normal text-[15px] space-y-4">
          <p>There are two ways you can book a course:</p>
          <ul className="list-decimal pl-6 space-y-2 mt-3 mb-4 text-[#002d80] font-medium">
            <li>
              <span className="text-gray-600 font-normal">
                Visit our website and go to the page of the course that you want to book. Click the “Apply for this course” button in the Options Menu on the right hand side of the page, then provide the details requested in the form.
              </span>
            </li>
            <li>
              <span className="text-gray-600 font-normal">
                Send an email to {siteConfig.email} with a request to book a course.
              </span>
            </li>
          </ul>
          <p>
            {siteConfig.name} will then review your application, and if it is accepted, we will issue an acceptance letter and an invoice. Following full receipt of the course fee payment, a visa letter will be issued to assist with the delegate’s application at the British Embassy/High Commission.
          </p>
        </div>
      ),
    },
    {
      question: "Who are Oxlade Business School?",
      answer: <p className="text-gray-600 text-[15px] leading-relaxed">{siteConfig.name} is a premier professional development institution offering over 500 intensive courses that elevate professional skills, enhance career growth, and boost organisational effectiveness.</p>
    },
    {
       question: "Who are your clients?",
       answer: <p className="text-gray-600 text-[15px] leading-relaxed">We are proud to partner with leading organizations globally, delivering tailored training solutions that drive measurable business impact. From multinational corporations to dynamic SMEs, our client portfolio reflects our commitment to excellence across every sector.</p>
    },
    {
       question: "Where do you offer courses?",
       answer: <p className="text-gray-600 text-[15px] leading-relaxed">We offer courses across major global business hubs, currently including London, Dubai, Barcelona, Istanbul, and Singapore. Each location is specifically chosen to enhance your corporate learning experience.</p>
    },
    {
       question: "Do you offer customised training?",
       answer: <p className="text-gray-600 text-[15px] leading-relaxed">Yes. If you have specific organisational requirements, we offer fully customized Consultancy Solutions tailored directly to your team&apos;s challenges and strategic goals.</p>
    },
    {
       question: "Do you offer in-house training?",
       answer: <p className="text-gray-600 text-[15px] leading-relaxed">Access to our expert faculty is not limited to open courses. We regularly deliver powerful in-house training directly at our clients&apos; premises or chosen venues worldwide.</p>
    },
    {
       question: "Where are your training centres located?",
       answer: <p className="text-gray-600 text-[15px] leading-relaxed">Our primary dynamic training venues are purposefully set up in London, Dubai, Barcelona, Istanbul, and Singapore, with consistent standards for layout, acoustics, and corporate comfort.</p>
    },
    {
       question: "What language is the training in?",
       answer: <div className="text-gray-600 text-[15px] leading-relaxed space-y-4">
         <p>Our Open Courses are held in English. Proficiency in English is an essential requirement for attending an {siteConfig.name} training programme, and typically our delegates have studied English to at least an Upper Intermediate level. If you have any concerns regarding your level of English and/or your ability to follow the training programme, please contact us.</p>
         <p>In addition, we are able to arrange customised training programmes in other languages upon request. We have conducted training in French, Arabic and Spanish in recent years and several of our training consultants are fluent in other languages.</p>
       </div>
    },
    {
       question: "How many other delegates will there be on my training programme?",
       answer: <div className="text-gray-600 text-[15px] leading-relaxed space-y-4">
         <p>The typical number of delegates on our Open Courses ranges from 2-6. Whilst most of our Open Courses are guaranteed to run with only 1 delegate, some courses may be subject to minimum numbers, and this requirement will be advised on enquiry/registration. The maximum number of delegates on our Open Courses is 12.</p>
         <p>For Customised Programmes, the number of delegates is always agreed in advance with clients. We have recently run customised programmes for group sizes of over 25 delegates.</p>
       </div>
    },
    {
       question: "What do I need to bring to training?",
       answer: <div className="text-gray-600 text-[15px] leading-relaxed space-y-4">
         <p>For in-classroom training delegates are advised that they should bring their laptop/tablet to their training programme. Please contact us if you think you will not have access to a device.</p>
         <p>For online courses, delegates will require internet access and access to Zoom/Teams video conferencing apps. Technical requirements and instructions will be provided ahead of the training session.</p>
       </div>
    },
    {
       question: "Where can I stay during my course?",
       answer: <p className="text-gray-600 text-[15px] leading-relaxed">To ensure a comfortable learning experience, we maintain partnerships with premium hotels near our training venues across all our locations. Our delegate support team can assist you with securing exclusive corporate rates during your stay.</p>
    },
    {
       question: "What do I do if I cannot attend one of your courses on any of the published dates?",
       answer: <p className="text-gray-600 text-[15px] leading-relaxed">Please contact us and tell us when you are able to attend the course, and we will be happy to see if we can arrange the programme on a date that is convenient for you.</p>
    },
    {
       question: "When do I need to pay for the course?",
       answer: <p className="text-gray-600 text-[15px] leading-relaxed">Course Fees MUST be paid at least TWO weeks prior to the commencement of the course. Failure to make payment on time will result in an automatic cancellation. Full details can be found on the Terms and Conditions page of our website or training programme.</p>
    },
    {
       question: "What about VAT?",
       answer: <p className="text-gray-600 text-[15px] leading-relaxed">VAT is chargeable on all courses at a standard rate of 20%. According to UK Law, certain non-profit and governmental organisations may be exempt from paying VAT. In order to qualify for this exemption, please contact us for further information.</p>
    },
    {
       question: "Do you offer discounts?",
       answer: <p className="text-gray-600 text-[15px] leading-relaxed">We are pleased to offer discounts when more than one delegate from the same organisation attends the same course. Please contact us for more information.</p>
    },
    {
       question: "Do I receive a certificate?",
       answer: <p className="text-gray-600 text-[15px] leading-relaxed">Yes. Our programs are designed to align with strict professional standards, ensuring that your certification carries weight and recognition in the global marketplace upon successful completion.</p>
    },
    {
       question: "Do you offer airport transfers/will you pick me up at the airport?",
       answer: <p className="text-gray-600 text-[15px] leading-relaxed">We understand the importance of seamless travel. For our international delegates, we offer coordinated airport transfer services. Please reach out to our logistics team upon booking to arrange your executive transport securely.</p>
    },
    {
       question: "Do I need insurance?",
       answer: <p className="text-gray-600 text-[15px] leading-relaxed">We strongly advise that each delegate should be covered with their own personal, medical and travel insurance for the duration of their course.</p>
    },
    {
       question: "What is your policy on visas?",
       answer: <div className="text-gray-600 text-[15px] leading-relaxed space-y-4">
          <p>Following receipt of full payment of course fees, we are permitted by the United Kingdom Visa &amp; Immigration (UKVI) to support visa applications. Delegates will be provided with a visa letter to support their application at the relevant Embassy.</p>
          <p>As we are accredited for independent further and higher education, delegates applying for Standard Visitor visas will be highly successful provided all necessary supporting documentation is correctly included.</p>
       </div>
    },
    {
       question: "What payment methods do you accept?",
       answer: <div className="text-gray-600 text-[15px] leading-relaxed space-y-4">
         <p>We are pleased to accept the following methods:</p>
         <ul className="list-disc pl-6 space-y-2 mt-3 mb-4 text-[#002d80] font-medium">
           <li><span className="text-gray-600 font-normal"><strong>International Bank Transfers:</strong> Payment should be made in Pounds Sterling to the account specified on the invoice (supplied along with registration/booking confirmation).</span></li>
           <li><span className="text-gray-600 font-normal"><strong>Credit card:</strong> We are pleased to accept credit card payments and will issue instructions for online credit card payments.</span></li>
           <li><span className="text-gray-600 font-normal">We also have a PayPal account and payments may be made to this account.</span></li>
         </ul>
         <p>We regret that we are unable to accept cash or cheques.</p>
       </div>
    },
    {
       question: "What is your policy on cancellations?",
       answer: <p className="text-gray-600 text-[15px] leading-relaxed">Cancellations made at least four weeks prior to course commencement will qualify for a full refund of the course fees. We regret that a fee must be charged when confirmed bookings are cancelled or transferred to future dates and that change is notified to us within two weeks of the start date of the programme. A substitute may be notified but if a substitute cannot be found, refunds will be made. Please refer to our terms and conditions page for more details.</p>
    },
    {
       question: "What is your policy on substitutions?",
       answer: <p className="text-gray-600 text-[15px] leading-relaxed">Delegates registered on any course can be substituted at any time without risk of a penalty. Such requests must be made in writing. Please refer to our terms and conditions page for more details.</p>
    },
    {
       question: "What is your policy on alterations to the programme?",
       answer: <p className="text-gray-600 text-[15px] leading-relaxed">We reserve the right to amend courses or the published programme, or to cancel any course at any time, and offer an alternative date, a full refund or credit, without liability for any consequential loss or damage.</p>
    },
    {
       question: "What is your complaints procedure?",
       answer: <p className="text-gray-600 text-[15px] leading-relaxed">In the event that you have been less than satisfied with our services please let us know. All complaints, suggestions and feedback are given serious consideration. We will, of course, endeavour to resolve your complaint as a matter of urgency but in the unlikely event that we are unable to resolve a complaint to your satisfaction you will be able to contact the British Accreditation Council directly via their official formal complaints channel.</p>
    },
    {
       question: "What happens after I register?",
       answer: <p className="text-gray-600 text-[15px] leading-relaxed">Once your application is received and accepted, we will formally issue an acceptance letter alongside your invoice. After your course fee payment clears, we will facilitate your joining instructions and support any required visa proceedings.</p>
    },
    {
       question: "My question is not listed here, who should I contact?",
       answer: <p className="text-gray-600 text-[15px] leading-relaxed">Our support team is actively available to assist you. Please send an email directly to <a href={`mailto:${siteConfig.email}`} className="text-[#002d80] font-bold hover:underline">{siteConfig.email}</a> or call us at <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="text-[#002d80] font-bold hover:underline">{siteConfig.phone}</a>.</p>
    },
    {
       question: "When will I receive the joining instructions?",
       answer: <p className="text-gray-600 text-[15px] leading-relaxed">Joining instructions will be sent to your training department upon registration and when applicable, to your email address, more detailed information will be sent the week prior to the start date of the course. These instructions will include all the necessary details to help you prepare for the course, including the schedule, location, contact phone numbers of members of {siteConfig.name}, the daily schedule as well as dress code, and any additional information needed for a smooth and successful learning experience.</p>
    },
    {
       question: "What is the dress code at Oxlade Business School?",
       answer: <p className="text-gray-600 text-[15px] leading-relaxed">The dress code for the course is smart casual. At the end of the certificate ceremony, there will be an opportunity to dress a bit more formally for photos with your trainer, allowing you to capture a memorable moment of your achievement.</p>
    },
    {
       question: "Who delivers the training courses?",
       answer: <p className="text-gray-600 text-[15px] leading-relaxed">Our faculty features industry-leading experts and associate consultants. They combine deep subject expertise with practical, real-world corporate delivery experience to support delegates from diagnosis through to measurable workplace application.</p>
    },
    {
       question: "How is the training delivered?",
       answer: <p className="text-gray-600 text-[15px] leading-relaxed">Training is delivered through an engaging, practitioner-led approach. Rooms are set up for active discussion, group work, and presentations using case scenarios and implementation roadmaps to guarantee measurable takeaways.</p>
    },
    {
       question: "Are refreshments included in the course fee?",
       answer: <p className="text-gray-600 text-[15px] leading-relaxed">Refreshments and light snacks are provided during the in-classroom training sessions. Additionally, lunch is offered.</p>
    },
    {
       question: "Can I access the internet once I am at Oxlade Business School?",
       answer: <p className="text-gray-600 text-[15px] leading-relaxed">Internet access is widely available throughout the training venues, ensuring delegates are connected and have the required resources for the course.</p>
    },
    {
       question: "When is the course application deadline?",
       answer: <p className="text-gray-600 text-[15px] leading-relaxed">The course deadline for registration is 10 days prior to the commencement of the course. Please ensure all registrations are completed by this time to secure your place.</p>
    }
  ];

  return (
    <div className="flex flex-col border-t border-l border-r border-[#d9ecea] bg-white w-full">
      {faqData.map((faq, idx) => {
        const isOpen = openTopic === idx;
        return (
          <div
            key={faq.question}
            className="border-b border-[#d9ecea] w-full"
          >
            <button
              onClick={() => toggleTopic(idx)}
              className="w-full flex items-center py-[22px] px-6 text-left hover:bg-[#fafcfb] transition-colors gap-6"
            >
              <div className="shrink-0 flex items-center justify-center">
                {isOpen ? (
                  <Minus size={20} strokeWidth={3} className="text-[#201e3d]" />
                ) : (
                  <Plus size={20} strokeWidth={3} className="text-[#201e3d]" />
                )}
              </div>
              <h3 className={`text-[15px] tracking-wide transition-colors ${isOpen ? 'text-[#002d80] font-black' : 'text-[#201e3d] font-bold'}`}>
                {faq.question}
              </h3>
            </button>

            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? "max-h-[1500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 md:pl-[68px] md:pr-10 pb-8 pt-1">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
