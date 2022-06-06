import { useState } from 'react'
import logo from './images/logo.png'
import lmsLogo from './images/lmsLogo.png'
import './App.css'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App-header">
      {/* <img src="https://lms.rmutsv.ac.th/img/banner.JPG" alt="" className='img-fluid mb-3 rounded-2 shadow-lg' /> */}
      <img src={lmsLogo} alt="" className='img-fluid mb-3' />
      <hr />
      {/* <img src={logo} width="200" alt="" /> */}
      {/* <h1>มหาวิทยาลัยเทคโนโลยีราชมงคลศรีวิชัย</h1> */}
      <h5 className='text-dark rounded bg-warning p-3 shadow mt-2 mb-2'><i className="fa-solid fa-bullhorn text-light"></i> {' '}ข่าวประชาสัมพันธ์</h5>
      <div className="row">
        <div className="col-lg-3 col-sm">
        </div>
        <div className="col-lg-3 col-sm">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-light text-center bg-primary rounded-pill p-3">เข้าสู่ระบบ LMS ใหม่</h5>
              <p className="text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-light text-center bg-primary rounded-pill p-3">เข้าสู่ระบบ LMS เก่า</h5>
              <p className="text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm"></div>
      </div>
      <Footer />
    </div>
  )
}

export default App
