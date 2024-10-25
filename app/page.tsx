"use client";

//Libraries
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

//Images
import featureImg1 from "./Assets/Images/computer.png";
import featureImg2 from "./Assets/Images/clipboard.png";
import featureImg3 from "./Assets/Images/clipboard.png";

//Components
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export default function Home() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut", delay: 0.3 },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut", delay: 0.6 },
    },
  };

  return (
    <div>
      <Header />
      <div className="flex w-full justify-center ">
        <motion.div
          className="flex flex-col justify-center items-center pt-[100px] sm:pt-[200px] md:pt-[200px] lg:pt-[200px] xl:pt-[200px] 2xl:pt-[200px] gap-[9vw] sm:gap-[5vw] md:gap-[2vw] lg:gap-[2vw] xl:gap-[2vw] 2xl:gap-[2vw]"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          ref={ref}
        >
          <motion.h1
            className="text-[#485424] text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl text-center w-[90vw] sm:w-[80vw] md:w-[80vw] lg:w-[80vw] xl:w-[60vw] 2xl:w-[60vw] max-w-[745px]"
            variants={headerVariants}
          >
            The Most Advanced AI Medical Chronology.
          </motion.h1>
          <motion.p
            className="text-[#5D5D5D] text-md sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg text-center w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[45vw] xl:w-[45vw] 2xl:w-[45vw] max-w-[700px]"
            variants={textVariants}
          >
            Olive turns thousands of pages of medical records into a clean,
            accurate chronology in minutes.
          </motion.p>
          <motion.div
            variants={formVariants}
            className="flex flex-col gap-3 w-full justify-center items-center hidden xl:flex"
          >
            <div className="flex justify-center items-center bg-[#ffffff] gap-2 md:gap-[1vw] pt-1 pb-1 pl-4 pr-1 rounded-md w-full sm:w-[65vw] md:w-[80vw] lg:w-[45vw] xl:w-[30vw] 2xl:w-[30vw] max-w-[432px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent text-black focus:outline-none text-base md:text-lg w-full h-[6vh] sm:h-[10vh] md:h-[6vh] lg:h-[6vh] xl:h-[6vh] 2xl:h-[6vh]"
              />
              <button className="btn bg-[#485424] text-white">
                Book a Demo
              </button>
            </div>
          </motion.div>
          <motion.div
            variants={formVariants}
            className="flex flex-col gap-3 w-full sm:w-[60vw] md:w-[45vw] justify-center items-center xl:hidden"
          >
            <div className="flex justify-center items-center bg-[#ffffff] gap-2 md:gap-[1vw] pt-1 pb-1 pl-4 pr-1 rounded-md w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent text-black focus:outline-none text-base md:text-lg w-full h-[6vh] sm:h-[50px] md:h-[50px]"
              />
            </div>
            <button className="btn bg-[#485424] text-white w-full h-[6vh] sm:h-[50px] md:h-[50px]">
              Book a Demo
            </button>
          </motion.div>
        </motion.div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 pt-10">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <Image
            src={featureImg2}
            alt="Feature 2"
            className="w-[90vw] sm:w-[90vw] md:w-[40vw] lg:w-[25vw] xl:w-[20vw] 2xl:w-[20vw] border-[9px] border-[rgba(238,238,238,0.8)] rounded-lg"
          />
          <Image
            src={featureImg1}
            alt="Feature 1"
            className="w-[90vw] sm:w-[90vw] md:w-[40vw] lg:w-[25vw] xl:w-[20vw] 2xl:w-[20vw] border-[9px] border-[rgba(238,238,238,0.8)] rounded-lg"
          />
        </div>
        <Image
          src={featureImg3}
          alt="Feature 3"
          className="w-[90vw] sm:w-[90vw] md:w-[40vw] lg:w-[25vw] xl:w-[20vw] 2xl:w-[20vw] border-[9px] border-[rgba(238,238,238,0.8)] rounded-lg"
        />
      </div>
      <div className="flex justify-center bg-[#ffffff] pt-20 pb-20">
        <div className="flex flex-col w-[90%] max-w-[1200px] gap-10 sm:gap-10 md:gap-10 lg:gap-20 xl:gap-20 2xl:gap-20">
          <h2 className="text-[#485424] text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl md:pr-[10vw] lg:pr-[20vw] xl:pr-[20vw] 2xl:pr-[20vw]">
            We Understand What You Need
          </h2>
          <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-0">
            <div className="flex w-full lg:w-[45vw] h-[350px] sm:h-[550px] md:h-[750px] lg:h-[490px] xl:h-[650px] 2xl:h-[600px] bg-[rgba(200,215,153,1)] rounded-xl"></div>
            <div className="flex flex-col lg:justify-center lg:p-10 xl:p-20 2xl:p-20 gap-5 lg:w-[45vw]">
              <h4 className="text-[#485424] text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl">
                You need accuracy.
              </h4>
              <p className="text-md sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg text-[#5D5D5D]">
                Checking every word would take as long as making the chronology
                yourself. Our process is optimized for accuracy.
              </p>
              <p className="text-md sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg text-[#5D5D5D]">
                ** If you ever find inaccurate information in your chronology,
                you receive a month of services free of charge.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-10 lg:flex-row-reverse lg:justify-between lg:gap-0">
            <div className="flex w-full lg:w-[45vw] h-[350px] sm:h-[550px] md:h-[750px] lg:h-[490px] xl:h-[650px] 2xl:h-[600px] bg-[rgba(200,215,153,1)] rounded-xl"></div>
            <div className="flex flex-col lg:justify-center lg:pt-10 lg:pb-10 lg:pr-10 xl:pt-20 xl:pb-20 xl:pr-20 2xl:pt-20 2xl:pb-20 2xl:pr-20 gap-5 lg:w-[45vw]">
              <h4 className="text-[#485424] text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl">
                You need to identify pre-existing medical conditions.
              </h4>
              <p className="text-md sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg text-[#5D5D5D]">
                You can't miss a pre-existing medical condition that may affect
                the value of your client's claim. Our AI will flag all medical
                events preceding the injury that may affect the value of your
                claim.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-0">
            <div className="flex w-full lg:w-[45vw] h-[350px] sm:h-[550px] md:h-[750px] lg:h-[490px] xl:h-[650px] 2xl:h-[600px] bg-[rgba(200,215,153,1)] rounded-xl"></div>
            <div className="flex flex-col lg:justify-center lg:p-10 xl:p-20 2xl:p-20 gap-5 lg:w-[45vw]">
              <h4 className="text-[#485424] text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl">
                You need to make sure you have all relevant medical records.
              </h4>
              <p className="text-md sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg text-[#5D5D5D]">
                Finding a missing record is like finding a needle in a haystack.
                Thankfully, we have some needle-finding experience.
              </p>
              <p className="text-md sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg text-[#5D5D5D]">
                Upload medical bills, and we will cross-reference the bills
                against the records to ensure no records are missing.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-10 lg:flex-row-reverse lg:justify-between lg:gap-0">
            <div className="flex w-full lg:w-[45vw] h-[350px] sm:h-[550px] md:h-[750px] lg:h-[490px] xl:h-[650px] 2xl:h-[600px] bg-[rgba(200,215,153,1)] rounded-xl"></div>
            <div className="flex flex-col lg:justify-center lg:pt-10 lg:pb-10 lg:pr-10 xl:pt-20 xl:pb-20 xl:pr-20 2xl:pt-20 2xl:pb-20 2xl:pr-20 gap-5 lg:w-[45vw]">
              <h4 className="text-[#485424] text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl">
                You need organization.
              </h4>
              <p className="text-md sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg text-[#5D5D5D]">
                Don't get lost in a jumble of medical records. Our user-friendly
                AI catalogs your files in a clean chronology. Find exactly what
                you need when you need it.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:justify-center pt-10 pb-10 lg:p-20">
        <div className="flex flex-col w-[90vw] lg:w-[80vw] pl-5 gap-5">
          <h2 className="text-[#485424] text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl md:pr-[10vw] lg:pr-[20vw] xl:pr-[20vw] 2xl:pr-[20vw]">
            How Olive Works
          </h2>
          <p className="text-md sm:text-lg md:text-lg lg:text-lg xl:text-md 2xl:text-md text-[#5D5D5D]">
            Our AI is optimized for accuracy.
          </p>
          <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col border-t lg:border-l lg:border-t-0 pt-8 lg:pt-4 lg:pl-8 lg:pr-8 pb-8 lg:pb-4 gap-4">
              <h4 className="text-[#485424] text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl">
                Sort and Stack
              </h4>
              <p className="text-sm sm:text-sm md:text-md lg:text-md xl:text-sm 2xl:text-lg text-[#5D5D5D]">
                Olive divides the records by date and medical event.
              </p>
            </div>
            <div className="flex flex-col border-t lg:border-l lg:border-t-0 pt-8 lg:pt-4 lg:pl-8 lg:pr-8 pb-8 lg:pb-4 gap-4">
              <h4 className="text-[#485424] text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl">
                Chronologize and Catalog
              </h4>
              <p className="text-sm sm:text-sm md:text-md lg:text-md xl:text-sm 2xl:text-lg text-[#5D5D5D]">
                Olive organizes the stacks in order by date.
              </p>
            </div>
            <div className="flex flex-col border-t lg:border-l lg:border-t-0 pt-8 lg:pt-4 lg:pl-8 lg:pr-8 pb-8 lg:pb-4 gap-4">
              <h4 className="text-[#485424] text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl">
                Summarize and Systemize
              </h4>
              <p className="text-sm sm:text-sm md:text-md lg:text-md xl:text-sm 2xl:text-lg text-[#5D5D5D]">
                Olive creates concise summaries and tables.
              </p>
            </div>
            <div className="flex flex-col border-t lg:border-l lg:border-t-0 pt-8 lg:pt-4 lg:pl-8 lg:pr-8 pb-8 lg:pb-4 gap-4">
              <h4 className="text-[#485424] text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl">
                Cross-check for Completeness
              </h4>
              <p className="text-sm sm:text-sm md:text-md lg:text-md xl:text-sm 2xl:text-lg text-[#5D5D5D]">
                Olive checks against medical bills to ensure no records are
                missing.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center bg-[#485424] w-[97vw] rounded-lg pt-10 pb-10 pl-16 pr-16 lg:p-20">
          <div className="flex flex-col items-center gap-5">
            <h2 className="text-white text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl text-center">
              We fully encrypt all your data.
            </h2>
            <p className="text-md sm:text-lg md:text-lg lg:text-lg xl:text-md 2xl:text-md text-white text-center">
              You care about your clients privacy. So do we.
            </p>
            <button className="btn bg-white text-[#485424] h-[6vh] sm:h-[50px] md:h-[50px] lg:w-[13vw] xl:w-[10vw] 2xl:w-[7vw]">
              Book a Demo
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
