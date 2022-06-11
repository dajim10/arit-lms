import React from "react";

function Prakart() {
  return (
    <>
      {/* <h5 className="text-light rounded bg-secondary p-3 shadow mt-2 mb-2">
        <i className="fa-solid fa-bullhorn text-light"></i> ข่าวประชาสัมพันธ์
      </h5> */}
      {/* Carousel */}
      <div className="col-sm"></div>
      <div className="col-sm mt-3">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="true"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current=""
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://www.rmutsv.ac.th/img/030765.png"
                className="d-block rounded p-2"
                alt=""
              />
            </div>
            <div className="carousel-item p-2">
              <img
                src="https://www.online-learning.rmutsv.ac.th/wp-content/uploads/2020/05/ruts-online-2048x853.jpg"
                className="d-block rounded"
                alt="..."
              />
            </div>
            <div className="carousel-item p-2">
              {/* carousel-item */}
              <img
                src="https://arit.rmutsv.ac.th/sites/default/files/images/google-cloud/google3.png"
                className="d-block rounded "
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="col-sm"></div>
    </>
  );
}

export default Prakart;
