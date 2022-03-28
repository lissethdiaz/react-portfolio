import React from "react";

function About() {

  return (
    <section className="my-5">
      <h1 id="about">My name is Lisseth</h1>
      <img src={requestAnimationFrame("../../assets/images/lisseth.jpg")} className="mb-4" alt="picture of Lisseth" />
      <div className="my-2">
        <p>
          I am 22 years old and I'm from Salt Lake City, UT.
        </p>
      </div>
    </section>
  )
}

export default About;