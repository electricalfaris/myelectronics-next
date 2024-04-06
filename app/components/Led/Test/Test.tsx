import React from "react";
// import "../styles.css";

export default function TestPage() {
  return (
    <article className="cards">
      <div className="card">
        <>
          <h4>Testing of LED</h4>
          <div>
            In a LED, longer leg and&nbsp;shorter leg&nbsp;will be anode and
            cathode, respectively.&nbsp;While inside of LED,&nbsp;cathode end
            looks more triangular and larger in size where as anode looks like a
            spike wave and smaller in size.&nbsp;To test LED,&nbsp;connect Red
            probe&nbsp;and black probe of
            multimeter&nbsp;with&nbsp;Anode&nbsp;(longer leg)
            and&nbsp;Cathode&nbsp;(shorter leg) of LED, respectively.&nbsp;If
            LED starts glowing and multimeter display shows voltage drop (1 to 2
            volts), as shown in Fig. 10,&nbsp;then it is OK. If LED does not
            glow then LED is defective. When red probe and&nbsp;black probe of
            multimeter is connected with cathode and anode of LED, respectively
            multimeter display shows 1 as shown in Fig. 11.
          </div>
          <div>
            <br />
            <div className="rTable">
              <div className="rTableBody">
                <div className="rTableRow">
                  <div className="rTableCell">
                    <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhke1St5JpMalG4fmrXSxEpqt7D4LSz29Oni-vghudZmB3ZWgxNFt3OehduVF6pdoght9sjayPAvBhbIli9gUvAi2s7eCLAKKwEmdyr_Tgf3fZp4uEeldJSDG0NU4jXGGvUFoB9BARMDkLT40SMnMujSi4a3SV4-YgRGiYyL6ZBzJF9MSqvKPLEntOQOw/s1599/IMG-20220716-WA0010.jpg">
                      {" "}
                      <img
                        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhke1St5JpMalG4fmrXSxEpqt7D4LSz29Oni-vghudZmB3ZWgxNFt3OehduVF6pdoght9sjayPAvBhbIli9gUvAi2s7eCLAKKwEmdyr_Tgf3fZp4uEeldJSDG0NU4jXGGvUFoB9BARMDkLT40SMnMujSi4a3SV4-YgRGiYyL6ZBzJF9MSqvKPLEntOQOw/w400-h225/IMG-20220716-WA0010.jpg"
                        alt=""
                        width={400}
                        height={300}
                      />{" "}
                    </a>
                  </div>
                </div>
                <div className="rTableRow">
                  <div className="rTableCell">
                    Fig. 10 Testing LED&nbsp;using multimeter when forward
                    biased
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <br />
            <div className="rTable">
              <div className="rTableBody">
                <div className="rTableRow">
                  <div className="rTableCell">
                    <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgku4kbVkIKV4a2QhOILEp5oH3Xqgxq16LJJKSXQc-37IZNC5Avtd0j1P0_kpL1tRQ5c2sWX2dL1gTJeRI9QmjIPWve3RVPRLzm1GE2xipeIny55Uq6Mewt2-SLHOP3dVFh7z-x85XjpcY3E46jtG0gHBtnrk7RPlLartO8AvezcPAaLnCzrAhpmb-lGQ/s1600/IMG-20220715-WA0008.jpg">
                      {" "}
                      <img
                        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgku4kbVkIKV4a2QhOILEp5oH3Xqgxq16LJJKSXQc-37IZNC5Avtd0j1P0_kpL1tRQ5c2sWX2dL1gTJeRI9QmjIPWve3RVPRLzm1GE2xipeIny55Uq6Mewt2-SLHOP3dVFh7z-x85XjpcY3E46jtG0gHBtnrk7RPlLartO8AvezcPAaLnCzrAhpmb-lGQ/w400-h300/IMG-20220715-WA0008.jpg"
                        alt=""
                        width={400}
                        height={300}
                      />{" "}
                    </a>
                  </div>
                </div>
                <div className="rTableRow">
                  <div className="rTableCell">
                    Fig. 11 Testing LED&nbsp;using multimeter when reverse
                    biased
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </article>
  );
}
