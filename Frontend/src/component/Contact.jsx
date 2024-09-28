import React from "react";

export default function Contact() {
  return (
    <div className="container w-2/3 mx-auto pt-20">
      {/* <div className="form-box bg-black flex flex-col self-center">
        <h3 className="text-2xl text-center text-white my-8 font-bold">
          Contact US
        </h3>
        <form className="flex flex-col self-center gap-2" action="">
          <div className=" shadow-pink-800">
            <input
              type="text"
              placeholder="Enter your name "
              className="px-4 py-1 rounded-md bg-black text-white inset-2 shadow-lg"
            />
          </div>
          <div className="">
            <input
              type="text"
              placeholder="Enter your email "
              className="px-4 py-1 rounded-md"
            />
          </div>
          <div className="">
            <input
              type="text"
              placeholder="Enter your subject"
              className="px-4 py-1 rounded-md"
            />
          </div>
          <div>
            <textarea
              className="px-4 py-1 rounded-md w-full"
              placeholder="Message"
              name=""
              id=""
            ></textarea>
          </div>
          <div>
            <button className="w-full text-center text-pink-500 bg-white rounded-md py-2">
              Send Message
            </button>
          </div>
        </form>
      </div> */}

      <div class="form-card1">
        <div class="form-card2">
          <form
            className="form flex"
            action="https://formspree.io/f/xpwabodp"
            method="POST"
          >
            <p class="form-heading ">Get In Touch</p>

            <div class="form-field">
              <input
                required
                name="Name"
                placeholder="Name"
                class="input-field"
                type="text"
              />
            </div>

            <div class="form-field">
              <input
                required
                name="Email"
                placeholder="Email"
                class="input-field"
                type="email"
              />
            </div>

            <div class="form-field">
              <input
                required
                name="Subject"
                placeholder="Subject"
                class="input-field"
                type="text"
              />
            </div>

            <div class="form-field">
              <textarea
                required
                name="Message"
                placeholder="Message"
                cols="30"
                rows="3"
                class="input-field"
              ></textarea>
            </div>

            <button class="sendMessage-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
