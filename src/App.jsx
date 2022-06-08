import { useState } from "react";
import logo from "./images/logo.png";
import lmsLogo from "./images/lmsLogo.png";
import "./App.css";
import Footer from "./Footer";
import lmsOld from "./images/lmsOld.png";
import lmsNew from "./images/lmsNew.png";
import Head1 from "./images/head1.png";
import BannerLMS from "./images/BannerLMS.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        style={{ backgroundColor: "#021B54" }}
        className="container-fluid shadow d-flex text-warning text-center justify-content-center align-items-center"
        id="header"
      >
        {/* <img src={BannerLMS} className="img-fluid" alt="" /> */}
      </div>

      <div className="App-header">
        {/* <img src="https://lms.rmutsv.ac.th/img/banner.JPG" alt="" className='img-fluid mb-3 rounded-2 shadow-lg' /> */}

        <hr />
        {/* <img src={logo} width="200" alt="" /> */}
        {/* <h1>มหาวิทยาลัยเทคโนโลยีราชมงคลศรีวิชัย</h1> */}
        <h5 className="text-light rounded bg-secondary p-3 shadow mt-2 mb-2">
          <i className="fa-solid fa-bullhorn text-light"></i> ข่าวประชาสัมพันธ์
        </h5>
        <div className="row">
          <div className="col-lg-3 col-md"></div>
          <div className="col-lg-3 col-sm mt-3 mb-3 p-3">
            <div className="card">
              <a href="https://lms65.rmutsv.ac.th">
                <img src={lmsNew} alt="" className="img-fluid card-img-top" />
              </a>
              <div className="card-body text-center">
                <a
                  href="https://lms65.rmutsv.ac.th"
                  className="btn btn-warning btn-xs btn-block"
                >
                  เข้าสู่ระบบ
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm mb-3 mt-3 p-3">
            <div className="card">
              <a href="https://lms59.rmutsv.ac.th">
                <img src={lmsOld} alt="" className="img-fluid card-img-top" />
              </a>
              <div className="card-body text-center">
                <a
                  href="https://lms59.rmutsv.ac.th"
                  className="btn btn-xs btn-block"
                  style={{ backgroundColor: "#68A4C4" }}
                >
                  เข้าสู่ระบบ
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md"></div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
