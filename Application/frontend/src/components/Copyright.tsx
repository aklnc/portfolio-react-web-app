import React from "react";
import "./Copyright.scss";

const Copyright = () => {
  return (
    <section id="footer">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
            <p>
              <u>
                  App Center
              </u> {" "}
              is a web developement for MİTAŞ by Cost Analysis Department a wholly owned
              subsidiary of Aytaç Kılınç.
            </p>
            <p className="h6">© All right Reversed.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Copyright;
