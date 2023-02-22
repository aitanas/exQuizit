import React from 'react';

export default function Home() {

  return (
    <div className="text-left sm:mx-auto sm:rounded-lg mx-auto flex flex-col justify-between h-fit w-3/5">
      <h1 className="text-3xl font-light text-center m-4">
        Welcome to exQuizit
      </h1>
      <p className="leading-relaxed antialiased text-center m-2">
        Welcome to our software engineering flashcards application!
      </p>
      <p className="indent-8 leading-relaxed antialiased m-2">
        We're excited to have you here and help you enhance your programming
        knowledge. Our application is designed to provide you with a fun and
        interactive way to study and memorize key concepts, programming
        languages, and technical terms that are essential for software
        engineering students.
      </p>
      <p className="indent-8 leading-relaxed antialiased m-2">
        Our flashcards cover a wide range of topics and difficulty levels, so
        you can customize your learning experience to suit your needs and
        interests. Whether you're just starting out or you're already an
        experienced programmer, our flashcards are designed to help you enhance
        your knowledge and gain a deeper understanding of the concepts that are
        relevant to your studies.
      </p>
    </div>
  );
}