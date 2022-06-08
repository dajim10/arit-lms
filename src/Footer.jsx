import React from 'react'
import MoodleLogo from "./images/moodle-mobile.png"
import AritLogo from './favicon.ico'

function Footer() {
    return (
      <div
        className="container-fluid  shadow text-light  mt-3"
        style={{ backgroundColor: "#68A4C4", padding: "2rem" }}
      >
        <div className="row">
          <div className="col-sm">
            <strong>Contact us</strong>
            <ul className="mt-2">
              <li className="list-unstyled">
                <p>
                  <img src={AritLogo} width="50" alt="" />
                  สำนักวิทยบริการและเทคโนโลยีสารสนเทศ
                  <br />
                </p>
                <p>
                  <img
                    src="https://www.rmutsv.ac.th/sites/default/files/image/Logo-RUTS.png"
                    className="rounded shadow-lg"
                    width={150}
                    alt=""
                  />
                  {/* มหาวิทยาลัยเทคโนโลยีราชมงคลศรีวิชัย<br /> */}
                  <br />
                  เลขที่ 1 ถนนราชดำเนินนอก ตำบลบ่อยาง อำเภอเมือง
                  <br />
                  จังหวัดสงขลา 90000
                  <br />
                  โทรศัพท์ 0-7431-7146, 0-7431-7100 ต่อ 1160 - 1165 โทรสาร
                  0-743-17147
                  <br />
                  <i
                    className="fa-brands fa-line text-success"
                    style={{ fontSize: "24px" }}
                  ></i>{" "}
                  ช่องทาง Line @lhp1366x
                </p>
              </li>
            </ul>
          </div>
          <div className="col-sm">
            <img src={MoodleLogo} width={150} alt="" />
            <p>
              Pages <br />
              RMUTSV เว็บไซต์มหาวิทยาลัย RMUTSV e-Passport e-Service
              <br />
              RMUTSV mail สำหรับบุคลากร/อาจาย์ <br />
              RMUTSV mail สำหรับนักศึกษา
            </p>
          </div>
        </div>
      </div>
    );
}

export default Footer