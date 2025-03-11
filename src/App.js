import { useRef, useEffect } from 'react';
import Glide from '@glidejs/glide';
import FogComponent from './components/FogComponent';
import './App.css';
import './styles.scss';

const SLIDES = [
  { text: 'Professional Ruby on Rails Developer looking for job offers.', bgColor: '#0033FF' },
  { text: 'PHP, Ruby, Ruby on Rails, Sinatra, Grape, MariaDB, PostgreSQL, Redis, jQuery, AJAX, XML, JSON, SCSS, HTML.', bgColor: '#660000' },
  { text: 'React', bgColor: '#9933CC' },
  { text: 'Heroku, AWS (including Cloud formation and Cloud-init) and VMware as Infrastructure. Git for source code.', bgColor: '#009900' },
  { text: 'Development of high load projects.', bgColor: '#3333FF' },
  { text: 'Maintained a distributed Unix infrastructure, Linux Administration (RHEL/CentOS/Fedora, OpenSuse Leap/Tumbleweed).', bgColor: '#CC6600' },
  { text: 'Ruby on Rails - Imagine, design, build web apps and bring your dreams to life with Rails 4 / 5 / 6 / 7.', bgColor: '#FF0000' },
  { text: 'Create an eCommerce website: Prestashop, Magento, OpenCart, ModX, Joomla, VirtueMart, K2Store, JoomShopping.', bgColor: '#333399' },
  { text: <a href="mailto:info@masterpro.ws">info@masterpro.ws</a>, bgColor: '#006666' },
];

const sliderConfiguration = {
  autoplay: 4000,
};

function App() {
  const ref = useRef();

  useEffect(() => {
    const slider = new Glide(ref.current, sliderConfiguration);
    slider.mount();
    return () => slider.destroy();
  }, []);

  return (
    <FogComponent>
      <div ref={ref} className="glide">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {SLIDES.map((slide, index) => (
              <li key={index} className="glide__slide">
                <div className="container" style={{ backgroundColor: slide.bgColor }}>
                  {slide.text}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="glide__arrows" data-glide-el="controls">
          <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
            prev
          </button>
          <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
            next
          </button>
        </div>
        <div className="glide__bullets" data-glide-el="controls[nav]">
          {SLIDES.map((_, index) => (
            <button key={index} className="glide__bullet" data-glide-dir={`=${index}`}></button>
          ))}
        </div>
      </div>
    </FogComponent>
  );
}

export default App;
