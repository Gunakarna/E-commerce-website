import React, { useContext } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Card from './Card';
import { CartContext } from './CartProvider';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Home() {
  const { products, sidebarOpen, toggleSidebar, searchProducts } = useContext(CartContext);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="App">
      <Navbar onMenuClick={toggleSidebar} search={searchProducts} />
      <Slider {...settings}>
        <div>
          <img src="https://firebasestorage.googleapis.com/v0/b/kalankarnas.appspot.com/o/sliders%2FSlider55.jpg?alt=media&token=6fd20e09-4a1f-4b43-a679-0a9cde498e6f" alt="Slide 1" className="d-block w-100" />
        </div>
        <div>
          <img src="https://firebasestorage.googleapis.com/v0/b/karnaappsgk.appspot.com/o/D-1.0-UHP-18082024-TopBanner-Z3-P2-VanHeusen-AllenSolly-min40.jpg?alt=media&token=a5f0fb61-e46b-4768-b0ee-717523a7210f" alt="Slide 2" className="d-block w-100" />
        </div>
        <div>
          <img src="https://firebasestorage.googleapis.com/v0/b/kalankarnas.appspot.com/o/sliders%2Fslider33.avif?alt=media&token=b2d0b56b-5352-4ef8-a2f7-fa9f995e3da7" alt="Slide 3" className="d-block w-100" />
        </div>
      </Slider>
      
      <div className="container mt-4">
        <div className="row row-cols-2 row-cols-md-2 row-cols-lg-3 g-4">
          {products.length === 0
            ? <p className="text-center text-muted">Product Items Not Found</p>
            : products.map((product, index) => (
                <div key={index} className="col">
                  <Card product={product} />
                </div>
              ))
          }
        </div>
      </div>
      
      <Sidebar isOpen={sidebarOpen} onClose={toggleSidebar} />
    </div>
  );
}

export default Home;

