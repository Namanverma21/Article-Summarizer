import React from "react";

import { logo } from "../assets";
import newLogo from "../assets/new.png";


const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={newLogo} alt='sumz_logo' className='w-50 h-20 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/NamanVerma21/", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='purple_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc font-poppins'>
      Briefly makes reading easier by using AI to summarize lengthy content into clear, concise summaries.
      </h2>
    </header>
  );
};

export default Hero;
