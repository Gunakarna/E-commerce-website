import React, {  useEffect, useState } from 'react'
import Card from './Card'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import axios from 'axios';


const searchUrl = "https://karnameena.github.io/Codes/search.json";
const baseUrl = "https://karnameena.github.io/Codes/products.json";

function Womens() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [products, setProductsData] = useState([]);
  const [Url, setUrl] = useState(baseUrl);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };





  useEffect((Url) => {
    axios.get(baseUrl).then((res) => {
      setProductsData(res.data.products);
    
  
    });
  }, [Url]);
  const searchProducts = (values) => {
    if (!values) {
      setUrl(baseUrl);  // Reset to base URL if no search input
      return;
    }
    setUrl(searchUrl);
    const result = products.filter(f => f.name.toLowerCase().includes(values.toLowerCase()));
    setProductsData(result);
  };


 
  return (
    <div>
      <div className="App">
        <Navbar onMenuClick={toggleSidebar} search={searchProducts} />
        <div className="container mx-auto p-6">
          {products.length === 0
            ? <p className="notfound text-center text-gray-600">Product Items Not Found</p>
            : (
              <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-6">
                {products.map((res, pos) => (
                  <Card product={res} key={pos} />
                ))}
              </div>
            )
          }
          <Sidebar isOpen={sidebarOpen} onClose={toggleSidebar} />
          
        </div>
      </div>
    </div>
  )
}

export default Womens
