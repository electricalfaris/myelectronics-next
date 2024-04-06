import React from "react";
// import "../styles.css";

export default function TestPage() {
  return (
    <article className="cards">
      <div className="card">
        <>
          <h4>Testing of capacitor</h4>
          <p>
            With a multimeter, One can not find out the value of capacitor but
            can check whether capacitor is OK&nbsp;or defective. To test a
            capacitor, connection of multimeter probes will remain&nbsp;same as
            for resistor but selector switch of multimeter will be set in diode
            mode (2k) position. Now connect red probe&nbsp;and black probe of
            multimeter&nbsp;with positive terminal of capacitor and negative
            terminal of capacitor, respectively. In starting, multimeter will
            show charging voltage of capacitor up to&nbsp;multimeter battery
            capacity as shown in Fig. 2. When capacitor is fully charged,
            multimeter shows 1 on display screen as shown in Fig. 3.
          </p>
          <div className="rTable">
            <div className="rTableBody">
              <div className="rTableRow">
                <div className="rTableCell">
                  <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiWozJVOdxUsIXNMQiddmPIb6waIbmZ-k_ABnKvLdjyQWOZUYjRjr1uJUZhXH-cwlp3sxBUhbdKaOwMN4sFbrE94oN-JwJ6nKZWbpKGYUcDAXE8Elu9N3sbstuCuTP5_EwlmYjdfNfwjxnvqfaroRffbKXD9-4Us0lbeDh8SOTfoXScsvDUjr3-s4X3gQ/s1600/IMG-20220715-WA0027.jpg">
                    {" "}
                    <img
                      src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiWozJVOdxUsIXNMQiddmPIb6waIbmZ-k_ABnKvLdjyQWOZUYjRjr1uJUZhXH-cwlp3sxBUhbdKaOwMN4sFbrE94oN-JwJ6nKZWbpKGYUcDAXE8Elu9N3sbstuCuTP5_EwlmYjdfNfwjxnvqfaroRffbKXD9-4Us0lbeDh8SOTfoXScsvDUjr3-s4X3gQ/w400-h300/IMG-20220715-WA0027.jpg"
                      alt=""
                      width={400}
                      height={300}
                    />{" "}
                  </a>
                </div>
              </div>
              <div className="rTableRow">
                <div className="rTableCell">
                  Fig. 2&nbsp;Measuring capacitor&nbsp;using multimeter during
                  charging
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="rTable">
                <div className="rTableBody">
                  <div className="rTableRow">
                    <div className="rTableCell">
                      <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgShYdBGrW-okGbG3rRfSrdcMCXPHX_UptzinAinbZKryRIToAGokinJQgMrXb87IjKhgOExnydaniiiK1jainRShFY-HYSkJfjAAOp_oJK-ThjNernrv0hK48jPEpob3WSiHG2Wwh_YTBTqo3aFHtDyBtbynWKUUwcccVHaR71SfOdoD8mEvHaBayk7A/s1600/IMG-20220715-WA0028.jpg">
                        {" "}
                        <img
                          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgShYdBGrW-okGbG3rRfSrdcMCXPHX_UptzinAinbZKryRIToAGokinJQgMrXb87IjKhgOExnydaniiiK1jainRShFY-HYSkJfjAAOp_oJK-ThjNernrv0hK48jPEpob3WSiHG2Wwh_YTBTqo3aFHtDyBtbynWKUUwcccVHaR71SfOdoD8mEvHaBayk7A/w400-h300/IMG-20220715-WA0028.jpg"
                          alt=""
                          width={400}
                          height={300}
                        />{" "}
                      </a>
                    </div>
                  </div>
                  <div className="rTableRow">
                    <div className="rTableCell">
                      &nbsp;Fig. 3&nbsp;Measuring capacitor&nbsp;using
                      multimeter when fully charged
                    </div>
                  </div>
                </div>
              </div>
              Note:- capacitor acts as short circuit in starting and as open
              circuit when got fully charged.&nbsp;
            </div>
          </div>
        </>
      </div>
    </article>
  );
}
