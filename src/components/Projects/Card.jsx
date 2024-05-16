// import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../../assets/Images/lynkupp.png";
import todoImage from "../../assets/Images/Todoapp.png"
import flowerImage from "../../assets/Images/FlowerShop.png"
import weddingImage from "../../assets/Images/Wedding.png"
import dicAppImg from"../../assets/Images/DictApp.png"
import randomApiImg from "../../assets/Images/RandomApi.png"
import ecomWebImg from "../../assets/Images/EcomWeb.png"
import "./Card.css";
import { Fade } from "react-reveal";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#03045e",
        width: "20px",
        height: "20px",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#03045e",
        width: "20px",
        height: "20px",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

const Card = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
//   };
var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
       <Fade>
      <div className="about_head" id="portfolio">
       
        <h1>Portfolio</h1>
        <h5>Check few of my works</h5>
        <div className="line">
          <p>i</p>
        </div>
        <div className="line2">
          <p>i</p>
        </div>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          <div className="project ">
            <div className="project_image">
              <a href="https://neverfaketheluv.github.io/Lynkkupp/" target="_blank">
                <img src={img} alt="" />
              </a>
            </div>
            <div className="project_details">
              <div className="project_link">
                <a href="https://neverfaketheluv.github.io/Lynkkupp/" target="_blank">
                  <i className="fa-solid fa-link"></i>
                </a>
                <a href="https://github.com/olarewajuuu/Lynkkupp" target="_blank">
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
              <h1>A Ticketing Website</h1>
              <p>
                A website built with HTML, CSS & JavaScript. It is mobile
                responsive
              </p>
              <div className="project_lang">
                <h4>HTML</h4>
                <h4>CSS</h4>
                <h4>JavaScript</h4>
              </div>
            </div>
          </div>

            {/* 2 */}
          <div className="project">
            <div className="project_image">
              <a href="https://olarewajuuu.github.io/TodoApp/" target="_blank">
                <img src={todoImage} alt="" />
              </a>
            </div>
            <div className="project_details">
              <div className="project_link">
                <a href="https://olarewajuuu.github.io/TodoApp/" target="_blank">
                  <i className="fa-solid fa-link"></i>
                </a>
                <a href="https://github.com/olarewajuuu/TodoApp" target="_blank">
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
              <h1>Todo App</h1>
              <p>
                A website built with HTML, CSS & JavaScript. It is mobile
                responsive
              </p>
              <div className="project_lang">
                <h4>HTML</h4>
                <h4>CSS</h4>
                <h4>JavaScript</h4>
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className="project">
            <div className="project_image">
              <a href="https://olarewajuuu.github.io/FlowerShop-Landing-Page/">
                <img src={flowerImage} alt="" />
              </a>
            </div>
            <div className="project_details">
              <div className="project_link">
                <a href="https://olarewajuuu.github.io/FlowerShop-Landing-Page/">
                  <i className="fa-solid fa-link"></i>
                </a>
                <a href="https://github.com/olarewajuuu/FlowerShop-Landing-Page">
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
              <h1>A FlowerShop Website</h1>
              <p>
                A website built with HTML, CSS & JavaScript. It is mobile
                responsive
              </p>
              <div className="project_lang">
                <h4>HTML</h4>
                <h4>CSS</h4>
                <h4>JavaScript</h4>
              </div>
            </div>
          </div>

          {/* 4 */}
          <div className="project">
            <div className="project_image">
              <a href="https://olarewajuuu.github.io/Ade-Ola/">
                <img src={weddingImage} alt="" />
              </a>
            </div>
            <div className="project_details">
              <div className="project_link">
                <a href="https://olarewajuuu.github.io/Ade-Ola/">
                  <i className="fa-solid fa-link"></i>
                </a>
                <a href="https://github.com/olarewajuuu/Ade-Ola">
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
              <h1>A Wedding Website</h1>
              <p>
                A website built with HTML, CSS & JavaScript. It is mobile
                responsive
              </p>
              <div className="project_lang">
                <h4>HTML</h4>
                <h4>CSS</h4>
                <h4>JavaScript</h4>
              </div>
            </div>
          </div>
          
          {/* 5 */}
          <div className="project">
            <div className="project_image">
              <a href="https://olarewajuuu.github.io/Hope-Dictionary/">
                <img src={dicAppImg} alt="" />
              </a>
            </div>
            <div className="project_details">
              <div className="project_link">
                <a href="https://olarewajuuu.github.io/Hope-Dictionary/">
                  <i className="fa-solid fa-link"></i>
                </a>
                <a href="https://github.com/olarewajuuu/Hope-Dictionary">
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
              <h1>A Dictionary App</h1>
              <p>
                A website built with HTML, CSS & JavaScript. It is mobile
                responsive
              </p>
              <div className="project_lang">
                <h4>HTML</h4>
                <h4>CSS</h4>
                <h4>JavaScript</h4>
              </div>
            </div>
          </div>

          {/* 6 */}
          <div className="project">
            <div className="project_image">
              <a href="https://olarewajuuu.github.io/hopetekecommerce-/">
                <img src={ecomWebImg} alt="" />
              </a>
            </div>
            <div className="project_details">
              <div className="project_link">
                <a href="https://olarewajuuu.github.io/hopetekecommerce-/">
                  <i className="fa-solid fa-link"></i>
                </a>
                <a href="https://github.com/olarewajuuu/hopetekecommerce-">
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
              <h1>A Ticketing Website</h1>
              <p>
                A website built with HTML, CSS & JavaScript. It is mobile
                responsive
              </p>
              <div className="project_lang">
                <h4>HTML</h4>
                <h4>CSS</h4>
                <h4>JavaScript</h4>
              </div>
            </div>
          </div>

          {/* 7 */}
          <div className="project">
            <div className="project_image">
              <a href="https://olarewajuuurandomuser.netlify.app/">
                <img src={randomApiImg} alt="" />
              </a>
            </div>
            <div className="project_details">
              <div className="project_link">
                <a href="https://olarewajuuurandomuser.netlify.app/">
                  <i className="fa-solid fa-link"></i>
                </a>
                <a href="https://github.com/olarewajuuu/randomuserapi">
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
              <h1>Random User API Website</h1>
              <p>
                A website built with HTML, CSS & React. It is mobile
                responsive
              </p>
              <div className="project_lang">
                <h4>HTML</h4>
                <h4>CSS</h4>
                <h4>React</h4>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      </Fade>
    </div>
  );
};

export default Card;
