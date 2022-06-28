import axios from "axios";
import React, { useState } from "react";
import newsletter from "../assets/newsletter.png";
import toast, { Toaster } from "react-hot-toast";
// import useAnalyticsEventTracker from "./useAnalyticsEventTracker";
import { useAnalyticsEventTracker } from "../components";

const Newsletter = () => {
  const gaEventTracker = useAnalyticsEventTracker("Newsletter Section Btn");

  const [email, setEmail] = useState("");

  const is_email = (str) => {
    var pattern = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    return pattern.test(str);
  };

  //   Submit event
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/email/newsletter", {
        email: email,
      });
      console.log(res);

      toast.success("Successfully Subscribed", { icon: "🥳" });

      // Setting the email to default
      setEmail("");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong", { icon: "😥" });
    }
  };
  return (
    <div className="w-full h-full flex flex-col md:flex-row px-[35px] py-[40px] md:px-[60px] md:py-[60px] bg-background-4 bg-cover bg-no-repeat bg-center">
      <Toaster
        toastOptions={{
          // Define default options
          // className: "",
          // duration: 5000,
          style: {
            // background: "#363636",
            // color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
          },
        }}
      />
      <div className="flex flex-1 justify-center items-start flex-col ">
        <h1 className="text-[28px] md:text-[30px] lg:text-[40px] xl:text-[40px] font-Inter font-bold mb-[16px]  animate__animated animate__fadeInUp hero-heading-gradient lg:leading-normal leading-[1.3]">
          Never Miss Out on a New Resource.
        </h1>
        <p className="text-[20px] md:text-[24px] lg:text-[28px] xl:text-[28px] font-Inter font-medium mb-[24px] md:mb-[32px]  animate__animated animate__fadeInUp leading-[1.25] hero-heading-gradient">
          Subscribe to our minimal and beautiful newsletter to get 5 fresh
          resources straight to your inbox.
        </p>
        <form
          className="w-full animate__animated animate__fadeInUp"
          onSubmit={handleSubmit}
        >
          <div className="flex items-start flex-col justify-between gap-2">
            <input
              type="email"
              className="w-[90%]  md:w-[70%] py-[12px] px-[16px] border border-gray-300 rounded-md placeholder:font-Inter placeholder:font-light focus:outline-none focus:shadow-outline shadow appearance-none font-Inter"
              placeholder="Enter your email address"
              onChange={(e) => setEmail(e.target.value)}
              required
              value={email}
            />
            <div className="md:mt-[32px] mt-[20px]">
              <button
                type="submit"
                className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
                onClick={() => gaEventTracker("Newsletter Btn")}
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                <span className="relative text-white font-Space">
                  Submit Now
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <img
          className="w-[100%] md:w-[100%] lg:w-[90%]"
          src={newsletter}
          alt="Newsletter-Illustration"
        />
      </div>
    </div>
  );
};

export default Newsletter;
