import Button from "@/components/ui/Button";
import React, { useState } from "react";
import { ArrowLeftIcon } from "../../../../public/svgs/icons";
import Container from "@/components/common/layout/Container";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const newQuestions = [
    {
      question: "How do i make payment",
      answer:
        " Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.",
    },
    {
      question: "Why did my Payment get cancelled",
      answer:
        " Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.",
    },
    {
      question: "Do you offer 24/7 customer care duting my trip",
      answer:
        " Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.",
    },
    {
      question: "How do i get a refund",
      answer:
        " Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.",
    },
    {
      question: "Do you have hotel recommendations",
      answer:
        " Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.",
    },
    {
      question: "How safe is my desired destination",
      answer:
        " Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.",
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
                "https://getdropp.notion.site/Homemade-Help-Center-f8653ff874e544c385113e3622daf64e",
                "_blank"
              )
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
