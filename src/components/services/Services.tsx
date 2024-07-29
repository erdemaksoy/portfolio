import React, { useState } from "react";
import "./services.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";

// Import Swiper styles
import "swiper/css";
import { Pagination } from "swiper/modules";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index: React.SetStateAction<number>) => {
    setToggleState(index);
  };
  return (
    <>
      <section className="services section" id="fields">
        <h2 className="section__title">What do I do?</h2>
        <span className="section__subtitle"></span>

        <Swiper
          className="services__container container grid"
          loop={true}
          spaceBetween={50}
          slidesPerView={3}
          pagination={true}
          modules={[Pagination]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            350: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide className="services__content">
            <div>
              <i className="uil uil-web-grid services__icon"></i>
              <h3 className="services__title">RESTful API</h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(1)}>
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
          </SwiperSlide>
          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>

              <h3 className="services__modal-title">RESTful API</h3>
              <p className="services__modal-description">
                I design and develop RESTful APIs, ensuring efficient and
                scalable communication between the server and client
                applications.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Secure and scalable API design.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Integration with various front-end applications.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Documentation and API testing.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <SwiperSlide className="services__content">
            <div>
              <i className="uil uil-mobile-android services__icon"></i>
              <h3 className="services__title">Flutter Mobile</h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(2)}>
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
          </SwiperSlide>
          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>

              <h3 className="services__modal-title">Flutter Mobile</h3>
              <p className="services__modal-description">
                I build cross-platform mobile applications using Flutter,
                providing a seamless user experience across both Android and iOS
                devices.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Cross-platform mobile app development.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    User interface design and implementation.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Performance optimization and debugging.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <SwiperSlide className="services__content">
            <div>
              <i className="uil uil-arrow services__icon"></i>
              <h3 className="services__title">WEB UI/UX with React</h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(3)}>
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
          </SwiperSlide>
          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>

              <h3 className="services__modal-title">WEB UI/UX with React</h3>
              <p className="services__modal-description">
                I design and develop responsive and intuitive web user
                interfaces using React, ensuring a smooth and engaging user
                experience.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Responsive web design.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Component-based architecture.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    State management with Redux.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <SwiperSlide className="services__content">
            <div>
              <i className="uil uil-database services__icon"></i>
              <h3 className="services__title">Database</h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(4)}>
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
          </SwiperSlide>
          <div
            className={
              toggleState === 4
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>

              <h3 className="services__modal-title">Database</h3>
              <p className="services__modal-description">
                I design, implement, and manage robust database systems to
                ensure efficient data storage, retrieval, and security.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Database design and normalization.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    SQL and NoSQL database management.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Data security and backup solutions.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <SwiperSlide className="services__content">
            <div>
              <i className="uil uil-brackets-curly services__icon"></i>

              <h3 className="services__title">Algorithms with C</h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(5)}>
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
          </SwiperSlide>
          <div
            className={
              toggleState === 5
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="services__modal-title">Algorithms with C</h3>
              <p className="services__modal-description">
                I develop efficient algorithms using C programming language,
                focusing on optimization and problem-solving.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Algorithm design and analysis.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Data structures and their applications.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Performance optimization.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <SwiperSlide className="services__content">
            <div>
              <i className="uil uil-brain services__icon"></i>
              <h3 className="services__title">Machine Learning</h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(6)}>
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
          </SwiperSlide>
          <div
            className={
              toggleState === 6
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>

              <h3 className="services__modal-title">
                Machine Learning with Python
              </h3>
              <p className="services__modal-description">
                I develop machine learning models using Python, leveraging
                libraries such as TensorFlow and scikit-learn to solve complex
                data problems.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Model development and training.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Data preprocessing and feature engineering.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Model evaluation and optimization.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </Swiper>
      </section>
    </>
  );
};

export default Services;
