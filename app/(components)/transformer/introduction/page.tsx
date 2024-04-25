import React from "react";
import "@/app/(components)/resistor/introduction/custom.css";

export default function page() {
  return (
    <article>
      <p>
        The <strong>transformer</strong>, in a simple way, can be described as a
        device that steps up or steps down voltage. In a step-up transformer,
        the output voltage is increased, and in a step-down transformer, the
        output voltage is decreased. The step-up transformer will decrease the
        output current, and the step-down transformer will increase the output
        current to keep the input and output power of the system equal.
      </p>
      <p>
        The transformer is basically a voltage control device that is used
        widely in the distribution and transmission of alternating current
        power. The idea of a transformer was first discussed by Michael Faraday
        in the year 1831 and was carried forward by many other prominent science
        scholars. However, the general purpose of using transformers was to
        maintain a balance between the electricity that was generated at very
        high voltages and consumption which was done at very low voltages.
      </p>
      <h3>Table of Contents</h3>
      <ul>
        <li>
          <a href="#what-is-transformer?">What Is a Transformer?</a>
        </li>
        <li>
          <a href="#transformer-types">Transformer Types</a>
        </li>
        <li>
          <a href="#working-principle-of-a-transformer">
            Working Principle of a Transformer
          </a>
        </li>
        <li>
          <a href="#parts-of-a-single-phase-transformer">
            Parts of a Transformer
          </a>
        </li>
        <li>
          <a href="#emf-equation-of-transformer">EMF Equation of Transformer</a>
        </li>
        <li>
          <a href="#voltage-transformation-ratio">
            Voltage Transformation Ratio
          </a>
        </li>
      </ul>

      <h2>What Is a Transformer?</h2>
      <p>
        A transformer is a device used in the power transmission of electric
        energy. The transmission current is AC. It is commonly used to increase
        or decrease the supply voltage without a change in the frequency of AC
        between circuits. The transformer works on the basic principles of
        <a href="https://byjus.com/jee/electromagnetic-induction-for-iit-jee/">
          {" "}
          electromagnetic induction
        </a>{" "}
        and mutual induction.
        <br />
      </p>
      <h2>Transformer Types</h2>
      <p>
        Transformers are used in various fields like power generation grid,
        distribution sector, transmission and electric energy consumption. There
        are various types of transformers which are classified based on the
        following factors:
      </p>
      <ul>
        <li>Working voltage range</li>
        <li>The medium used in the core</li>
        <li>Winding arrangement</li>
        <li>Installation location</li>
      </ul>
      <p>
        <img
          src="https://cdn1.byjus.com/wp-content/uploads/2023/01/Transformer.png"
          alt="Classification Of Transformer "
          width={750}
          height={239}
        />
      </p>
      <h3>Based on Voltage Levels</h3>
      <p>
        Commonly used transformer types, depending on the voltage, are
        classified as follows:
      </p>
      <ul>
        <li>
          <strong>Step-up Transformer:</strong>&nbsp;They are used between the
          power generator and the power grid. The secondary output voltage is
          higher than the input voltage.
        </li>
        <li>
          <strong>Step-down Transformer:</strong> These transformers are used to
          convert high-voltage primary supply to low-voltage secondary output.
        </li>
      </ul>
      <h3>Based on the Medium of Core Used</h3>
      <p>
        In a transformer, we will find different types of cores that are used.
      </p>
      <ul>
        <li>
          <strong>Air Core Transformer:</strong> The flux linkage between
          primary and secondary winding is through the air. The coil or windings
          wound on the non-magnetic strip.
        </li>
        <li>
          <strong>Iron Core Transformer:</strong>&nbsp;Windings are wound on
          multiple iron plates stacked together, which provides a perfect
          linkage path to generate flux.
        </li>
      </ul>
      <h3>Based on the Winding Arrangement</h3>
      <ul>
        <li>
          <strong>Autotransformer:</strong> It will have only one winding wound
          over a laminated core. The primary and secondary share the same coil.
          Auto means “self” in the Greek language.
        </li>
      </ul>
      <h3>Based on Install Location</h3>
      <ul>
        <li>
          <strong>Power Transformer:</strong> It is used at power generation
          stations, as they are suitable for high voltage application
        </li>
        <li>
          <strong>Distribution Transformer:</strong> It is mostly used at
          distribution lanes for domestic purposes. They are designed for
          carrying low voltages. It is very easy to install and characterised by
          low magnetic losses.
        </li>
        <li>
          <strong>Measurement Transformers:</strong> They are mainly used for
          measuring voltage, current and power.
        </li>
        <li>
          <strong>Protection Transformers:</strong> They are used for component
          protection purposes. In circuits, some components must be protected
          from voltage fluctuation, etc. Protection transformers ensure
          component protection.
        </li>
      </ul>

      <h2>Working Principle of a Transformer</h2>
      <p>
        <img
          src="https://cdn1.byjus.com/wp-content/uploads/2023/01/Transformer-1.png"
          alt="Working of a Transformer"
          width={750}
          height={432}
        />
      </p>
      <p>
        The transformer works on the principle of{" "}
        <a href="https://byjus.com/physics/faradays-law/">Faraday’s law</a> of
        electromagnetic induction and mutual induction.
      </p>
      <p>
        There are usually two coils – primary coil and secondary coil – on the
        transformer core. The core laminations are joined in the form of strips.
        The two coils have high mutual inductance. When an alternating current
        passes through the primary coil, it creates a varying magnetic flux. As
        per Faraday’s law of electromagnetic induction, this change in magnetic
        flux induces an EMF (electromotive force) in the secondary coil, which
        is linked to the core having a primary coil. This is mutual induction.
      </p>
      <p>Overall, a transformer carries out the following operations:</p>
      <ol>
        <li>Transfer of electrical energy from one circuit to another</li>
        <li>Transfer of electrical power through electromagnetic induction</li>
        <li>Electric power transfer without any change in frequency</li>
        <li>Two circuits are linked with mutual induction</li>
      </ol>
      <p>
        <img
          src="https://cdn1.byjus.com/wp-content/uploads/2023/01/Transformer-2.png"
          alt="Formation of magnetic flux lines around a current-carrying wire"
          width={750}
          height={440}
        />
      </p>
      <p>
        The figure shows the formation of{" "}
        <a href="https://byjus.com/physics/magnetic-flux/">magnetic flux</a>{" "}
        lines around a current-carrying wire. The normal of the plane containing
        the flux lines is parallel to the normal of a cross-section of a wire.
      </p>
      <p>
        <img
          src="https://cdn1.byjus.com/wp-content/uploads/2023/01/Transformer-3.png"
          alt="Formation of varying magnetic flux lines around a wire"
          width={750}
          height={546}
        />
      </p>
      <p>
        The figure shows the formation of varying magnetic flux lines around a
        wire wound. The interesting part is that the reverse is also true; when
        a magnetic flux line fluctuates around a piece of wire, a current will
        be induced in it. This was what Michael Faraday found in 1831, which is
        the fundamental working principle of electric generators, as well as
        transformers.
        <br />
      </p>
      <h2>Parts of a Single-phase Transformer</h2>
      <p>
        <img
          src="https://cdn1.byjus.com/wp-content/uploads/2023/01/Transformer-4.png"
          alt="Parts of a Single-phase Transformer"
          width={750}
          height={456}
        />
      </p>
      <p>The major parts of a single-phase transformer consist of</p>
      <p>
        <strong>1. Core </strong>
      </p>
      <p>
        The core acts as a support to the winding in the transformer. It also
        provides a low reluctance path to the flow of magnetic flux. The winding
        is wound on the core, as shown in the picture. It is made up of a
        laminated soft iron core in order to reduce the losses in a transformer.
        The factors, such as operating voltage, current, power, etc., decide
        core composition. The core diameter is directly proportional to copper
        losses and inversely proportional to iron losses.
      </p>
      <p>
        <strong>2. Windings </strong>
      </p>
      <p>
        Windings are the set of copper wires wound over the transformer core.
        Copper wires are used due to the following:
      </p>
      <ul>
        <li>
          The high conductivity of copper minimises the loss in a transformer
          because when the conductivity increases, resistance to current flow
          decreases.
        </li>
        <li>
          The high ductility of copper is the property of metals that allows it
          to be made into very thin wires.
        </li>
      </ul>
      <p>
        There are mainly two types of windings: primary windings and secondary
        windings.
      </p>
      <ul>
        <li>
          Primary winding: The set of turns of windings to which the supply
          current is fed.
        </li>
        <li>
          Secondary winding: The set of turns of winding from which output is
          taken.
        </li>
      </ul>
      <p>
        The primary and secondary windings are insulated from each other using
        insulation coating agents.
      </p>
      <p>
        <strong>3. Insulation Agents</strong>
      </p>
      <p>
        Insulation is necessary for transformers to separate windings from each
        other and to avoid short circuits. This facilitates mutual induction.
        Insulation agents have an influence on the durability and stability of a
        transformer.
      </p>
      <p>The following are used as insulation mediums in a transformer:</p>
      <ul>
        <li>
          <ul>
            <li>
              <ul>
                <li>
                  <ul>
                    <li>Insulating oil</li>
                    <li>Insulating tape</li>
                    <li>Insulating paper</li>
                    <li>Wood-based lamination</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <h2>Ideal Transformer</h2>
      <p>
        The ideal transformer has no losses. There is no magnetic leakage flux,
        ohmic resistance in its windings and no iron loss in the core.
      </p>

      <h2>EMF Equation of Transformer</h2>
      <h2>
        <img
          src="https://cdn1.byjus.com/wp-content/uploads/2023/01/Transformer-5.png"
          alt="EMF Equation of Transformer"
          width={750}
          height={456}
        />
      </h2>
      <p>
        N<sub>1</sub> – Number of turns in the primary
      </p>
      <p>
        N<sub>2</sub> – Number of turns in the secondary
      </p>
      <p>
        Φ<sub>m</sub> – Maximum flux in the weber (Wb)
      </p>
      <p>T – Time period. It is the time taken for 1 cycle.</p>
      <p>
        The flux formed is a sinusoidal wave. It rises to a maximum value of Φ
        <sub>m</sub> and decreases to a negative maximum of Φ<sub>m</sub>. So,
        flux reaches a maximum in one-quarter of a cycle. The time taken is
        equal to T/4.
      </p>
      <p>
        Average rate of change of flux = Φ<sub>m</sub>/(T/4) = 4fΦ<sub>m</sub>
      </p>
      <p>Where, f = frequency</p>
      <p>T = 1/f</p>
      <p>Induced EMF per turn = Rate of change of flux per turn</p>
      <p>Form factor = RMS value / average value</p>
      <p>
        RMS value = 1.11 (4fΦ<sub>m</sub>) = 4.44 fΦ<sub>m </sub>[form factor of
        a sine wave is 1.11]
      </p>
      <p>
        RMS value of EMF induced in winding = RMS value of EMF per turn x No. of
        turns
      </p>
      <p>
        <strong>Primary Winding</strong>
      </p>
      <p>
        RMS value of induced EMF = E<sub>1</sub> = 4.44 fΦm * N<sub>1</sub>
      </p>
      <p>
        <strong>Secondary Winding</strong>
      </p>
      <p>
        RMS value of induced EMF = E<sub>2</sub> = 4.44 fΦm * N<sub>2</sub>
      </p>
      <p>
        <img
          src="https://cdn1.byjus.com/wp-content/uploads/2019/10/emf-equation-of-transformer.png"
          sizes="(max-width: 262px) 100vw, 262px"
          srcSet="https://cdn1.byjus.com/wp-content/uploads/2019/10/emf-equation-of-transformer.png 262w, https://cdn1.byjus.com/wp-content/uploads/2019/10/emf-equation-of-transformer-250x77.png 250w, https://cdn1.byjus.com/wp-content/uploads/2019/10/emf-equation-of-transformer-120x37.png 120w"
          alt="Rms value of induced emf "
          width={262}
          height={81}
        />
      </p>
      <p>This is the EMF equation of the transformer.</p>
      <p>For an ideal transformer at no load condition,</p>
      <p>
        E<sub>1</sub> = Supply voltage on the primary winding
      </p>
      <p>
        E<sub>2</sub> = Terminal voltage (theoretical or calculated) on the
        secondary winding
        <br />
      </p>
      <h2>Voltage Transformation Ratio</h2>
      <p>
        <img
          title="Voltage Transformation Ratio"
          src="https://cdn1.byjus.com/wp-content/uploads/2019/10/word-image185.png"
          sizes="(max-width: 232px) 100vw, 232px"
          srcSet="https://cdn1.byjus.com/wp-content/uploads/2019/10/word-image185.png 232w, https://cdn1.byjus.com/wp-content/uploads/2019/10/word-image185-120x49.png 120w"
          alt="Voltage Transformation Ratio"
          width={232}
          height={94}
        />
      </p>
      <p>K is called the voltage transformation ratio, which is a constant.</p>
      <p>
        Case 1:If N<sub>2 &gt;</sub> N<sub>1,</sub> K&gt;1, it is called a
        step-up transformer.
      </p>
      <p>
        Case 2: If N<sub>2</sub>&lt; N<sub>1</sub>, K&lt;1, it is called a
        step-down transformer.
      </p>
      <h2>Transformer Efficiency</h2>
      <div>
        Comparing&nbsp;system&nbsp;output&nbsp;with&nbsp;input&nbsp;will&nbsp;confirm&nbsp;transformer&nbsp;efficiency.
        The system is called better when its efficiency is high.
      </div>
      <div>
        <div>Efficiency(η)=OutputpowerInputpower×100</div>
      </div>
      <div>
        <div>Efficiency(η)=PoutPout+Ploses×100</div>
      </div>
      <div>
        <div>Efficiency(η)=V2I2cosθV2I2cosθ+Pc+Pcm×100</div>
      </div>
      <div>
        Where, P<sub>cu</sub> = P<sub>sc</sub>
      </div>
      <div>
        {" "}
        P<sub>c</sub> = P<sub>oc</sub>
      </div>
      <div>
        <div>η(fullload)=VAcosθVAcosθ+Pc+Pcm×100</div>
      </div>
      <div>
        <div>η(loadn)=nVAcosθnVAcosθ+Pc+n2Pcm×100</div>
      </div>
      <h3>Applications of Transformer</h3>
      <ul>
        <li>
          <div>
            The transformer
            transmits&nbsp;electrical&nbsp;energy&nbsp;through&nbsp;wires&nbsp;over&nbsp;long&nbsp;distances.
          </div>
        </li>
        <li>
          <div>
            Transformers&nbsp;with&nbsp;multiple&nbsp;secondaries
            are&nbsp;used&nbsp;in&nbsp;radio&nbsp;and&nbsp;TV&nbsp;receivers,
            which&nbsp;require several&nbsp;different&nbsp;voltages.
          </div>
        </li>
        <li>Transformers are used as voltage regulators.</li>
      </ul>
      <h2>Transformer-related Solved Examples</h2>
      <p>
        <strong>
          1. A transformer has 600&nbsp;turns of the primary winding and
          20&nbsp;turns of the secondary winding. Determine the secondary
          voltage if the secondary circuit is open and the primary voltage is
          140&nbsp;V.
        </strong>
      </p>
      <p>
        <strong>Given</strong>
      </p>
      <p>
        <strong>
          Total number of turns of the primary coil (N<sub>1</sub>) = 600 turns
        </strong>
      </p>
      <p>
        <strong>
          Total number of turns of the secondary coil (N<sub>2</sub>) = 20 turns
        </strong>
      </p>
      <p>
        <strong>
          Primary voltage (V<sub>1</sub>) = 140 V
        </strong>
      </p>
      <p>
        <strong>Solution:</strong>
      </p>
      <p>
        The voltage on the primary coil = N<sub>1</sub>V<sub>1</sub>
      </p>
      <p>
        The voltage on the secondary coil =&nbsp;N<sub>2</sub>V<sub>2</sub>
      </p>
      <p>The voltage on one turn</p>
      <div>Vt=V2N2=V1N1</div>
      <div>k=V2N2=V1N1</div>
      <p>k is a transformation ratio.</p>
      <div>V2=N2N1×V1</div>
      <div>V2=20600××140</div>
      <p>
        V<sub>2</sub> = 4.6 V
      </p>
      <p>
        <strong>
          2. A transformer has a primary coil with 1600 loops and a secondary
          coil with 1000 loops. If the current in the primary coil is 6 Ampere,
          then what is the current in the secondary coil?
        </strong>
      </p>
      <p>
        <strong>Given:</strong>
      </p>
      <p>
        <strong>
          Primary coil (N<sub>1</sub>) = 1600 loops
        </strong>
      </p>
      <p>
        <strong>
          Secondary coil (N<sub>2</sub>) = 1000 loops
        </strong>
      </p>
      <p>
        <strong>
          The current in the primary coil (I<sub>1</sub>) = 4 A
        </strong>
      </p>
      <p>
        <strong>Solution :</strong>
      </p>
      <div>I2I1=N1N2</div>
      <div>I24=16001000</div>
      <p>
        <strong>
          I<sub>2</sub> = 6.4 A
        </strong>
      </p>
      <p>The current on the secondary coil is 6.4 Ampere.</p>
      <div>
        <h2>Frequently Asked Questions on Transformer</h2>
        <div>
          <div>
            <section>
              <div>Q1</div>
              <div>
                <h3>What is the working principle of the transformer?</h3>
                <div>
                  <div>
                    <p>
                      The transformer works on the principle of mutual
                      induction.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div>Q2</div>
              <div>
                <h3>
                  List the three types of transformers based on voltage level.
                </h3>
                <div>
                  <div>
                    <p>
                      Based on the voltage level, the transformer is of three
                      types, and they are as follows:
                      <br /> Step-up transformer
                      <br /> Step-down transformer
                      <br /> Isolation transformer
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div>Q3</div>
              <div>
                <h3>What are the main parts of a transformer?</h3>
                <div>
                  <div>
                    <p>
                      Iron core
                      <br /> Primary winding
                      <br /> Secondary winding
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div>Q4</div>
              <div>
                <h3>When do transformers burn and explode?</h3>
                <div>
                  <div>
                    <p>
                      Transformers burn and explode when lightning strikes, and
                      during overloading, corrosion, power surges, etc.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div>Q5</div>
              <div>
                <h3>What is a transformer?</h3>
                <div>
                  <div>
                    <p>
                      A transformer is a device used for stepping up or stepping
                      down AC voltages.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div>Q6</div>
              <div>
                <h3>What is a step-up transformer?</h3>
                <div>
                  <div>
                    <p>
                      A step-up transformer is one for which the output voltage
                      is greater than the input voltage.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div>Q7</div>
              <div>
                <h3>What is a step-down transformer?</h3>
                <div>
                  <div>
                    <p>
                      A step-down transformer is one for which the output
                      voltage is less than the input voltage.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div>Q8</div>
              <div>
                <h3>Define the turns ratio of the transformer.</h3>
                <div>
                  <div>
                    <p>
                      The turns ratio of a transformer is the ratio of the
                      number of turns in the secondary to that of the primary.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </article>
  );
}
