import React from "react";
// import "../styles.css";

export default function TestPage() {
  return (
    <article className="cards">
      <div className="card">
        <>
          <h4>
            Testing of
            <a href="https://www.info4eee.com/2022/04/diode-and-its-practical-applications.html?m=1">
              diode
            </a>
          </h4>
          <div>
            <p>
              To check the diode, multimeter connection will remain same as for
              resistor and the selector switch of multimeter will be set on
              diode (2k) mode. For forward bias mode, connect Red probe&nbsp;and
              black probe of multimeter&nbsp;with&nbsp;Anode&nbsp;(positive
              terminal) and&nbsp;Cathode&nbsp;(negative terminal) of diode,
              respectively. Normally, the voltage drop of silicon diode drops
              and Germanium diode is&nbsp;0.7 V and&nbsp;0.3 V, respectively. As
              the multimeter is showing 0.664 V as given in Fig. 4,&nbsp;It is a
              silicon diode. For reverse bias mode, connect red probe&nbsp;and
              black probe of multimeter&nbsp;with cathode and anode,
              respectively, multimeter display shows 1 on screen as shown in
              Fig. 5.&nbsp;If diode shows no voltage drop than it means diode is
              not OK.&nbsp;
            </p>
          </div>
          <div>
            <div className="rTable">
              <div className="rTableBody">
                <div className="rTableRow">
                  <div className="rTableCell">
                    <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTImdvlPMDboqOS90ztV-mU2vvKMokeOZLkMoch9ss8-N01holEEaDnTg-Jki_KYccYvOBl_4hWnA2wuWbJE0eVRFlZ-IKk6M0b-f0ZICLUVql80UmobL6lz6nxVrlStD-CRlixGHBbvd28vaGBLVoJc3YhyuMdhRznKRX0B9z9aUHRgdLLrmBtsXybw/s1600/IMG-20220715-WA0018.jpg">
                      <img
                        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTImdvlPMDboqOS90ztV-mU2vvKMokeOZLkMoch9ss8-N01holEEaDnTg-Jki_KYccYvOBl_4hWnA2wuWbJE0eVRFlZ-IKk6M0b-f0ZICLUVql80UmobL6lz6nxVrlStD-CRlixGHBbvd28vaGBLVoJc3YhyuMdhRznKRX0B9z9aUHRgdLLrmBtsXybw/w400-h300/IMG-20220715-WA0018.jpg"
                        alt=""
                        width={400}
                        height={300}
                      />
                    </a>
                  </div>
                </div>
                <div className="rTableRow">
                  <div className="rTableCell">
                    Fig. 4&nbsp;Measuring diode&nbsp;using multimeter when
                    forward biased
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rTable">
            <div className="rTableBody">
              <div className="rTableRow">
                <div className="rTableCell">
                  <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhq4oK7n2yjSCqP7thod1kvJxxfTGzdnS8Kjj8lsHZq3ps006If3c-jbE60MQAQtCO81RY5oAUUKHmYkswzphfngPnZ1kwZeP8DXQMQ4dRcJZd9lDzo3gHjF1rVFpRhNe1JkJHj81yMSICNqmePZPGugIDlAGnwOoEM04Z8atPhjbtnIUvPDNlDbFt74A/s1600/IMG-20220715-WA0019.jpg">
                    <img
                      src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhq4oK7n2yjSCqP7thod1kvJxxfTGzdnS8Kjj8lsHZq3ps006If3c-jbE60MQAQtCO81RY5oAUUKHmYkswzphfngPnZ1kwZeP8DXQMQ4dRcJZd9lDzo3gHjF1rVFpRhNe1JkJHj81yMSICNqmePZPGugIDlAGnwOoEM04Z8atPhjbtnIUvPDNlDbFt74A/w400-h300/IMG-20220715-WA0019.jpg"
                      alt=""
                      width={400}
                      height={300}
                    />
                  </a>
                </div>
              </div>
              <div className="rTableRow">
                <div className="rTableCell">
                  Fig. 5&nbsp;Measuring diode&nbsp;using multimeter when reverse
                  biased
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </article>
  );
}
