import { useRef, useEffect } from "react";
import Glide from "@glidejs/glide";
import FogComponent from "./components/FogComponent";
import "./App.css";
import "./styles.scss";

const sliderConfiguration = {
  autoplay: 4000,
};

function App() {
  const ref = useRef();

  useEffect(() => {
    const slider = new Glide(ref.current, sliderConfiguration);
    slider.mount();
  }, [ref]);

  return (
    <FogComponent>
      <>
        {" "}
        <div ref={ref} className="glide">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              <li className="glide__slide">
                <div
                  className="container"
                  style={{ backgroundColor: "#0033FF" }}
                >
                  Professional Ruby on Rails Developer looking for job offers.
                </div>
              </li>
              <li className="glide__slide">
                <div
                  className="container"
                  style={{ backgroundColor: "#660000" }}
                >
                  PHP, Ruby, Ruby on Rails, Sinatra, Grape, MariaDB, PostgreSQL,
                  Redis, jQuery, AJAX, XML, JSON, SCSS, HTML.
                </div>
              </li>
              <li className="glide__slide">
                <div
                  className="container"
                  style={{ backgroundColor: "#9933CC" }}
                >
                  React
                </div>
              </li>
              <li className="glide__slide">
                <div
                  className="container"
                  style={{ backgroundColor: "#009900" }}
                >
                  Heroku, AWS (including Cloud formation and Cloud-init) and
                  VMware as Infrastructure. Git for source code.
                </div>
              </li>
              <li className="glide__slide">
                <div
                  className="container"
                  style={{ backgroundColor: "#3333FF" }}
                >
                  Development of high load projects.
                </div>
              </li>
              <li className="glide__slide">
                <div
                  className="container"
                  style={{ backgroundColor: "#CC6600" }}
                >
                  Maintained a distributed Unix infrastructure, Linux
                  Administration (RHEL/CentOS/Fedora, OpenSuse Leap/Tumbleweed).
                </div>
              </li>
              <li className="glide__slide">
                <div
                  className="container"
                  style={{ backgroundColor: "#FF0000" }}
                >
                  Ruby on Rails - Imagine, design, build web apps and bring your
                  dreams to life with Rails 4 / 5 / 6 / 7.
                </div>
              </li>
              <li className="glide__slide">
                <div
                  className="container"
                  style={{ backgroundColor: "#333399" }}
                >
                  Create an eCommerce website: Prestashop, Magento, OpenCart,
                  ModX, Joomla, VirtueMart, K2Store, JoomShopping.
                </div>
              </li>
              <li className="glide__slide">
                <div
                  className="container"
                  style={{ backgroundColor: "#006666" }}
                >
                  <a href="mailto:info@masterpro.ws"> info@masterpro.ws</a>
                </div>
              </li>
            </ul>
          </div>

          <div className="glide__arrows" data-glide-el="controls">
            <button
              className="glide__arrow glide__arrow--left"
              data-glide-dir="<"
            >
              prev
            </button>
            <button
              className="glide__arrow glide__arrow--right"
              data-glide-dir=">"
            >
              next
            </button>
          </div>

          <div className="glide__bullets" data-glide-el="controls[nav]">
            <button className="glide__bullet" data-glide-dir="=0"></button>
            <button className="glide__bullet" data-glide-dir="=1"></button>
            <button className="glide__bullet" data-glide-dir="=2"></button>
            <button className="glide__bullet" data-glide-dir="=3"></button>
            <button className="glide__bullet" data-glide-dir="=4"></button>
            <button className="glide__bullet" data-glide-dir="=5"></button>
            <button className="glide__bullet" data-glide-dir="=6"></button>
            <button className="glide__bullet" data-glide-dir="=7"></button>
            <button className="glide__bullet" data-glide-dir="=8"></button>
          </div>
        </div>
      </>
    </FogComponent>
  );
}

export default App;
