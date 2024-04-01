import React from "react";

export default function TestPage() {
  return (
    <>
      <div id="all-about-electronics">
        <h1>How do you test an inductor?</h1>

        <ol>
          <li>
            A passive electrical component known as an inductor stores energy as
            a magnetic field. An inductor is basically just a coil or loop of
            wire. The number of turns in the coil directly relates to the
            inductance. The radius of the coil and the kind of material it is
            looped around both affect inductance.
          </li>
          <li>
            The least inductance is achieved with air cores for a given coil
            radius and turn count. For the purposes of inductor winding,
            dielectric materials, such as wood, glass, and plastic, are
            fundamentally the same as air.
          </li>
          <li>
            Iron, laminated iron, and powdered iron are ferromagnetic materials
            that increase the inductance that can be obtained with a coil of a
            certain number of turns. This growth can be thousands of times
            greater in some instances. Another important aspect of the core is
            its form. For a given core material and turn count, toroidal
            (donut-shaped) cores offer higher inductance than solenoidal
            (rod-shaped) cores.
          </li>
        </ol>

        <p>
          An inductor is also known as the choke, coil, or reactor. An inductor
          is a two-terminal electrical component that stores energy in a
          magnetic field when electric current flows through it. An insulated
          wire wound into a coil around a core forms an inductor.
        </p>
        <p>
          For Inductor Test, test the inductor&apos;s resistance which determines the
          inductor&apos;s health, Put a multimeter set to the ohmmeter setting.
        </p>
        <p>
          By calculating the inductor&apos;s resistance, we can check whether the
          inductor is good or not.
        </p>
        <ol>
          <li>
            Take the probes of the multimeter and plug them across the ends of
            the inductor. The direction of the inductor doesn&apos;t matter, as
            resistance isn&apos;t polarized.
          </li>
          <li>
            If the inductor&apos;s resistance is very low across its terminals which
            is only a few ohms greater than 1Ωand normally less than 10Ω, then
            it is a good inductor.
          </li>
          <li>
            If an inductor&apos;s resistance is high, then it is defective and it
            must be replaced in the circuit.
          </li>
          <li>
            If an inductor reads very, very small resistance, less than an ohm
            (very close to 0Ω), this may be a sign that it&apos;s shorted.
          </li>
          <li>Outside the range of 1Ω to 10Ω, an inductor is generally bad.</li>
        </ol>
        <p>
          <strong>
            Therefore, a resistance check is a simple and very effective test
            for determining whether an inductor is defective or not.
          </strong>
        </p>
      </div>
      <hr />
      <div id="wikihow">
        <h1>How to Measure Inductance</h1>

        <p>
          Inductance is the ability of a coil to stop an electrical current from
          flowing through it. An inductor coil can stop one current so a
          different one is able to flow. TVs and radios, for instance, use
          inductance to receive and tune into different channels. Inductance is
          usually measured in units called millihenrys or microhenrys. It is
          commonly measured by using a frequency generator and an oscilloscope
          or an LCM multimeter. It can also be calculated through a
          voltage-current slope measuring the change in the electrical current
          passing through the coil.
        </p>
      </div>
    </>
  );
}
