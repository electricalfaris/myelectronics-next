import React from "react";
import Image from "next/image";

export default function InductorIntroduction() {
  return (
    <article>
      <header>
        <h1>What Is An Inductor?</h1>
      </header>
      <div>
       <img 
          alt="HPIM1067"
          width={395}
          height={350}
          src="https://wonderfulengineering.com/wp-content/uploads/2014/06/What-is-an-Inductor-4.jpg"
        />
      </div>
      <div>
        <h2>Introduction</h2>
        <p>
          An inductor is essentially a passive two terminal component and is
          capable of resisting changes in electric current that passes through
          it and eventually develops a magnetic field (stores energy) that can
          be used later. The inductor was invented back in 1807. The inductor
          has units of henry (ratio of voltage to the rate of change of
          current).
         <img 
            alt="What is an Inductor"
            width={610}
            height={373}
            src="https://wonderfulengineering.com/wp-content/uploads/2014/06/What-is-an-Inductor-.jpg"
          />
         <img 
            alt="What is an Inductor 2"
            width={610}
            height={435}
            src="https://wonderfulengineering.com/wp-content/uploads/2014/06/What-is-an-Inductor-2.jpg"
          />
        </p>
        <h2>How Does An Inductor Work?</h2>
        <p>
         <img 
            alt="What is an Inductor 3"
            width={610}
            height={531}
            src="https://wonderfulengineering.com/wp-content/uploads/2014/06/What-is-an-Inductor-3.jpg"
          />
          An inductor consists of loop(s) of a wire or coil. The inductance is
          directly proportional to the number of turns and when current passes
          through the loops, a magnetic field is generated. This magnetic field
          upon removal of current source is capable of generating current.{" "}
         <img 
            alt="What is an Inductor 5"
            width={610}
            height={457}
            src="https://wonderfulengineering.com/wp-content/uploads/2014/06/What-is-an-Inductor-5.jpg"
          />
        </p>
        <h2>Types Of Inductors</h2>
        <p>
          <strong>1. Air core inductor</strong>
        </p>
        <p>o Radio frequency inductor</p>
        <p>
          <strong>2. Ferromagnetic core inductor</strong>
        </p>
        <p>o Laminated core inductor</p>
        <p>o Ferrite-core inductor</p>
        <p>o Toroidal core inductor</p>
        <p>o Choke</p>
        <p>
          <strong>
            3. Variable inductor
           <img 
              alt="What is an Inductor 6"
              width={610}
              height={386}
              src="https://wonderfulengineering.com/wp-content/uploads/2014/06/What-is-an-Inductor-6.jpg"
            />
           <img 
              alt="What is an Inductor 7"
              width={610}
              height={457}
              src="https://wonderfulengineering.com/wp-content/uploads/2014/06/What-is-an-Inductor-7.jpg"
            />
           <img 
              alt="What is an Inductor 8"
              width={610}
              height={610}
              src="https://wonderfulengineering.com/wp-content/uploads/2014/06/What-is-an-Inductor-8.jpg"
            />
           <img 
              alt="What is an Inductor 9"
              width={610}
              height={457}
              src="https://wonderfulengineering.com/wp-content/uploads/2014/06/What-is-an-Inductor-9.jpg"
            />
          </strong>
        </p>
        <h2>Applications Of Inductors</h2>
        <p>· Filters</p>
        <p>· Sensors</p>
        <p>· Transformers</p>
        <p>· Motors</p>
        <p>
          · Energy Storage{" "}
         <img 
            alt="What is an Inductor 11"
            width={610}
            height={457}
            src="https://wonderfulengineering.com/wp-content/uploads/2014/06/What-is-an-Inductor-11.jpg"
          />
         <img 
            alt="What is an Inductor 12"
            width={610}
            height={465}
            src="https://wonderfulengineering.com/wp-content/uploads/2014/06/What-is-an-Inductor-12.jpg"
          />
         <img 
            alt="What is an Inductor 13"
            width={610}
            height={472}
            src="https://wonderfulengineering.com/wp-content/uploads/2014/06/What-is-an-Inductor-13.jpg"
          />
         <img 
            alt="What is an Inductor 10"
            width={610}
            height={457}
            src="https://wonderfulengineering.com/wp-content/uploads/2014/06/What-is-an-Inductor-10.jpg"
          />
        </p>
        <h2>Precautionary Measures</h2>
        <ul>
          <li>
            Excessive shock should not be transferred to inductors especially
            while they are being mounted.
          </li>
          <li>
            Inductors should not be kept with magnetic items or magnets for that
            matter.
          </li>
          <li>
            Some inductors have polarity mentioned and this should be kept in
            mind when installing them.
          </li>
          <li>
            Keep inductors away from direct heat sources such as heaters and
            stove.
          </li>
        </ul>
      </div>
    </article>
  );
}
