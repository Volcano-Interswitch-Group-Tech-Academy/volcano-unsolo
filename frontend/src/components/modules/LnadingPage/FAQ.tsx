import Button from "@/components/ui/Button";
import React, { useState } from "react";
import { ArrowLeftIcon } from "../../../../public/svgs/icons";
import Container from "@/components/common/layout/Container";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const newQuestions = [
    {
      question: "How do I make payment?",
      answer:
        "Making a payment on Unsolo is easy! Once you've selected your travel experience or booking, simply follow the secure payment process. We accept various payment methods, including credit and debit cards, PayPal, and more, to ensure your convenience.",
    },
    {
      question: "Why did my Payment get cancelled?",
      answer:
        "Payments may be canceled for various reasons, such as insufficient funds, payment processor issues, or security concerns. If your payment was canceled, please double-check your payment details and ensure you have sufficient funds. If the issue persists, reach out to our customer support team for assistance.",
    },
    {
      question: "Do you offer 24/7 customer care during my trip?",
      answer:
        "Absolutely! Your peace of mind is our priority. We provide 24/7 customer support throughout your trip. Whether you need assistance with travel arrangements, have questions, or encounter unexpected situations, our dedicated support team is just a call or message away, ready to help.",
    },
    {
      question: "How do I get a refund?",
      answer:
        "We understand that plans can change. To request a refund, simply log in to your Unsolo account, go to the 'My Bookings' section, and follow the refund request process for your specific booking. Refund eligibility and policies may vary depending on your booking details, so please review them carefully.",
    },
    {
      question: "Do you have hotel recommendations?",
      answer:
        "Yes, we do! Unsolo offers a selection of curated hotel recommendations in various destinations. Whether you're looking for luxury accommodations, boutique stays, or budget-friendly options, our recommendations cater to diverse preferences. Explore our hotel listings to find the perfect place to stay during your adventure.",
    },
    {
      question: "How safe is my desired destination?",
      answer:
        "Your safety is our priority. Unsolo provides destination-specific safety information and travel advisories to help you make informed decisions. We recommend checking government travel advisories, local guidelines, and user reviews for up-to-date safety insights before your trip.",
    },
  ];
  return (
    <Container>
      <div className="flex flex-col lg:p-16">
        <h1 className="hidden lg:block text-center text-3xl card_headerText font_bold">
          Frequently asked questions
        </h1>
        <h1 className="lg:hidden text-center text-3xl card_headerText font_bold">
          Frequently asked <br /> questions
        </h1>
        <div className="px-4 py-8">
          {newQuestions.map((question, index) => (
            <div key={index}>
              <div
                className={`cursor-pointer flex items-center justify-between px-4 py-2  border-b-2 border-gray-200 ${
                  openIndex === index ? "bg-white " : ""
                }`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <p className="text-sm lg:text-lg  py-3">{question.question}</p>
                <div className="flex items-center">
                  {openIndex === index ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#585858"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 15.75l7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#585858"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  )}
                </div>
              </div>
              {openIndex === index && (
                <p className="px-4 py-2 light-yellow-font">{question.answer}</p>
              )}
            </div>
          ))}
        </div>
        <div className="my-5 flex flex-col lg:flex-row justify-center items-center">
          <p className="text-lg lg:mr-10 mb-3 lg:mb-0 mt-5">
            Still have more questions or Concerns?{" "}
          </p>
          <Button
            onClick={() =>
              window.open(
"                https://www.notion.so/Unsolo-Help-Center-0395ded6941242e2854101a3ce46f9fb?pvs=4"              )
            }
            children={"Chat with us"}
            icon={<ArrowLeftIcon />}
            iconPosition="end"
            className="button_bg text-white flex flex-row justify-center items-center font-bold rounded-md mt-5"
          />
        </div>
      </div>
    </Container>
  );
};

export default FAQ;
