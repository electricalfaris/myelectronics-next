import React from "react";
// import "../styles.css";

export default function TestPage() {
  return (
    <article className="cards">
      <div className="card">
        <>
          <h4> Testing of resistor</h4>
          <div>
            By color coding and numeric coding of resistor, one can calculate
            its value. To test a resistor with multimeter, put black probe in
            common terminal and red probe in Resistor terminal. In Fig.
            1,&nbsp;10 K Ohm resistor is used for testing and knob&nbsp;of
            multimeter is at&nbsp;20k.
          </div>
          <div className="rTable">
            <div className="rTableBody">
              <div className="rTableRow">
                <div className="rTableCell">
                  <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiAnNdFdH6bWtY4J3UisKb0W1psGCpF8e6ZKlDBQ1eCOLittANGnt6a3d8Nc_Va2IjbtLF1o9QV6YOrL6Iagy2_KNeEv-Pi5iDJtoJa-T9Sy0PaY7YSMgM_0-EINya5MV2gQWsKC0GDGKegE0tzuiSbP2fgkvQ2baJkYWOzWTdjhlVfEJh5o1WZb0wMpA/s1600/IMG-20220715-WA0009.jpg">
                    {" "}
                    <img
                      src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiAnNdFdH6bWtY4J3UisKb0W1psGCpF8e6ZKlDBQ1eCOLittANGnt6a3d8Nc_Va2IjbtLF1o9QV6YOrL6Iagy2_KNeEv-Pi5iDJtoJa-T9Sy0PaY7YSMgM_0-EINya5MV2gQWsKC0GDGKegE0tzuiSbP2fgkvQ2baJkYWOzWTdjhlVfEJh5o1WZb0wMpA/w400-h300/IMG-20220715-WA0009.jpg"
                      alt=""
                      width={400}
                      height={300}
                    />{" "}
                  </a>
                </div>
              </div>
              <div className="rTableRow">
                <div className="rTableCell">
                  Fig. 1 Measuring Resistor using multimeter
                </div>
              </div>
            </div>
          </div>
          <div>
            Now connect this resistor across both probes tip to measure
            resistance. The measured value of resistor with multimeter is 9.83
            Kilo ohm. As, this is a 10 Kilo ohm resistor, it has 5 % tolerance.
            Hence its measured value is 9.83 KΩ.
          </div>
        </>
      </div>
    </article>
  );
}
