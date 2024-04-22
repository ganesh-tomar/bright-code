import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
// import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { useEffect } from "react";
import dynamic from "next/dynamic";

interface contactFormSecondProps {
  data: {
    paddingmediumtop: boolean;
    subtitle: string;
    title: string;
    paragraphBold: string;
    paragraph: string;
    paragraph2: string;
    paragraphBold2: string;
  };
}

const ContactFormSecond: React.FC<contactFormSecondProps> = ({ data }) => {
  const {
    paddingmediumtop,
    subtitle,
    title,
    paragraphBold,
    paragraph,
    paragraph2,
    paragraphBold2,
  } = data;

  const [state, handleSubmit] = useForm("maygryee");
  // const [captcha, setcaptcha] = useState<string | null>();
  const [formsuccess, setformsuccess] = useState(false);
  const [cross, setCross] = useState(false);

  // console.log(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY);

  const handleReload = () => {
    window.location.reload();
  };

  const ClearForm = () => {
    const inputs = document.querySelectorAll(".contactForm form input");
    const textArea = document.querySelector(
      ".contactForm form textarea"
    ) as HTMLInputElement;
    textArea.value = "";
    for (let i = 0; i < inputs.length; i++) {
      const element = inputs[i] as HTMLInputElement;
      element.value = "";
    }
  };

  if (state.succeeded) {
    if (formsuccess === false) {
      setformsuccess(true);
      ClearForm();
    }
  }

  const HideThankyouBox = () => {
    if (formsuccess === true) {
      setCross(true);
    }
  };

  const GoogleReCaptchaProvider = dynamic(() =>
    import("react-google-recaptcha-v3").then(
      (module) => module.GoogleReCaptchaProvider
    )
  );

  return (
    <>
      <section
        className={` ${
          paddingmediumtop === true ? "padding-medium-top" : ""
        } contactForm text-gray-600 body-font relative`}
        id="get-in-touch"
      >
        <div className="container px-5 mx-auto">
          <div
            className={`relative w-full py-[68px] bgPurpleGradient md:py-12`}
          >
            <div className=" relative w-full mb-16 text-center  md:mb-8">
              {subtitle && (
                <h6 className="text-white title mb-8 md:mb-2">{subtitle}</h6>
              )}

              {title && <h2 className="text-white mb-5">{title}</h2>}
            </div>
            <div className="w-mainRow -ml-2.5 flex md:flex-wrap md:w-full md:ml-0">
              <div className="w-halfWidth mx-2.5 md:w-full md:mx-0 md:mb-10">
                {paragraphBold && (
                  <h4 className="text-white text-[23px] md:text-[20px] xl-up:leading-10 ">
                    {paragraphBold}
                  </h4>
                )}
                <br />
                {paragraph && (
                  <h5 className="text-white font-light">{paragraph}</h5>
                )}
                <br />
                {paragraph2 && (
                  <h5 className="text-white font-light">{paragraph2}</h5>
                )}
                <br />
                {paragraphBold2 && (
                  <h4 className="text-white text-[23px] md:text-[20px] xl-up:leading-10 ">
                    {paragraphBold2}
                  </h4>
                )}
              </div>
              <div
                className="w-halfWidth mx-2.5 bg-transparent rounded-lg pl-[52px] lg:pl-4  md:!p-0 relative z-10 md:w-full md:mx-0 "
                data-aos="fade-left"
                data-aos-delay="400"
                data-aos-duration="500"
              >
                <form onSubmit={handleSubmit}>
                  <div className="relative mb-5">
                    <label
                      htmlFor="fullName"
                      className="leading-6 text-[17px] text-white font-normal"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required={true}
                      className={`w-full relative mt-2 py-[13px] px-3 bg-white rounded-[9px] border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out`}
                    />
                  </div>
                  <div className="relative mb-5">
                    <label
                      htmlFor="email"
                      className="leading-6 text-[17px] text-white font-normal"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required={true}
                      className="w-full relative mt-2 py-[13px] bg-white rounded-[9px] border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="relative mb-5">
                    <label
                      htmlFor="subject"
                      className="leading-6 text-[17px] text-white font-normal"
                    >
                      Subject
                    </label>
                    <input
                      type="subject"
                      id="subject"
                      name="subject"
                      // value={values.subject}
                      required={true}
                      className="w-full relative mt-2 py-[13px] bg-white rounded-[9px] border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                  <div className="relative mb-5">
                    <label
                      htmlFor="message"
                      className="leading-6 text-[17px] text-white font-normal"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      // value={values.message}
                      className="w-full relative mt-2 py-[13px] bg-white rounded-[9px] border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-[106px] text-base outline-none text-gray-700 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                  <GoogleReCaptchaProvider
                    reCaptchaKey="6LfR00opAAAAAC9ut3OSMHiIQ6gJZoBiT9VPRFlE"
                    language="english"
                    scriptProps={{
                      async: false,
                      defer: false,
                      appendTo: "head",
                      nonce: undefined,
                    }}
                    container={{
                      element: "g-recaptcha", // replace with your actual ID
                      parameters: {
                        badge: "inline",
                        theme: "dark",
                      },
                    }}
                  >
                    <React.Fragment></React.Fragment>
                  </GoogleReCaptchaProvider>

                  <div
                    id="g-recaptcha"
                    className="g-recaptcha my-4"
                    data-sitekey="6LfR00opAAAAAC9ut3OSMHiIQ6gJZoBiT9VPRFlE"
                  ></div>
                  <input
                    type="hidden"
                    id="g-recaptcha-response"
                    name="g-recaptcha-response"
                  ></input>

                  <button
                    type="submit"
                    className="gradient-btn mx-auto max-w-full"
                    disabled={state.submitting}
                  >
                    <span>Submit</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {formsuccess === true && cross == false ? (
        <section className="thank_you_overlay fixed top-0 left-0 w-[100vw] h-[100vh] bg-[#000000b5] flex justify-center items-center z-[60] ">
          <div className="container">
            <div className="thankU_overlay relative bg-white rounded-md min-h-[600px] p-10 flex justify-center items-center z-20 ">
              <div
                className="close_icon max-w-[34px] h-[34px] absolute top-5 right-5 cursor-pointer "
                onClick={HideThankyouBox}
              >
                <Image
                  src="/icon-close.svg"
                  width={40}
                  height={40}
                  loading="lazy"
                  className=" w-full h-full object-contain "
                  alt="close"
                />
              </div>
              <div className="thankYouBox text-center">
                <div className="thankU_check_icon mx-auto max-w-[112px] h-[112px] mb-4 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-green-700 w-full h-full object-contain "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h1 className="text-4xl font-bold mb-4 text-black ">
                  Thank You !
                </h1>
                <p className=" mb-4 text-black ">
                  Thank you for your interest!
                </p>
                <div className="btnWrap" onClick={HideThankyouBox}>
                  <Link href="/" className="gradient-btn">
                    <span>Home</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
};
export default ContactFormSecond;
