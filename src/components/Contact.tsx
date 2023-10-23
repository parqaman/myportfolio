import { object, string } from "yup";
import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const ContactSchema = object({
  name: string().required(),
  email: string().email().required(),
  message: string().required(),
});

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const contact_handler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = formRef.current?.elements.namedItem(
      "name"
    ) as HTMLInputElement;
    const email = formRef.current?.elements.namedItem(
      "email"
    ) as HTMLInputElement;
    const message = formRef.current?.elements.namedItem(
      "message"
    ) as HTMLInputElement;
    const data = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    const isValid = await ContactSchema.isValid(data);
    if (isValid) {
      fetch("https://getform.io/f/a67e0906-f905-4e9b-a482-de9bdc7dce08", {
        method: "POST",
        body: new FormData(e.target as HTMLFormElement),
      }).then(async (res) => {
        if (res.status === 200) {
          toast("Message sent successfully!", {
            position: "bottom-center",
            type: "success",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            theme: "light",
          });
          formRef.current?.reset();
        } else {
          const data = await res.json();
          toast(data.message, {
            position: "bottom-center",
            type: "error",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            theme: "light",
          });
        }
      });
      formRef.current?.reset();
    } else {
      toast("Please fill all the fields correctly!", {
        position: "bottom-center",
        type: "error",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        theme: "light",
      });
    }
  };

  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once when it comes into view
    rootMargin: "0% 0% -50% 0%", // Offset to trigger animation when the center is reached
  });

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 1,
          },
        },
      }}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      id="contact"
      className="h-screen flex flex-col items-center justify-center text-justify"
    >
      <div className="transition-all duration-700  w-full max-w-3xl">
        <div>
          <h1 className="text-4xl font-semibold">Get in touch.</h1>
          <p className="text-lg">Great ideas are born from collaboration.</p>
          <form
            className="flex flex-col gap-4 mt-4"
            ref={formRef}
            onSubmit={contact_handler}
          >
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <input
                className="p-2 rounded-md focus:outline-none bg-secondary"
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <input
                className="p-2 rounded-md focus:outline-none bg-secondary"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="message">Message</label>
              <textarea
                className="resize-none p-2 rounded-md focus:outline-none bg-secondary"
                name="message"
                id="message"
                cols={30}
                rows={10}
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn bg-btn hover:bg-hover_btn text-white border-none"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </motion.div>
  );
};
