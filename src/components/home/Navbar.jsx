import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartProvider';

const Navbar = ({ onMenuClick, search }) => {
    const { getTotalQuantity } = useContext(CartContext);
    const totalQuantity = getTotalQuantity();

    return (
        <nav className="navbar navbar-light bg-dark sticky-top">
            <div className="container-fluid">
                <button className="btn btn-dark" onClick={onMenuClick}>
                    ☰
                </button>
                <h1 className="mb-0 text-white h1 display-6 ml-5 display-md-4 sm-6 fs-1 display-lg-3">Shopify</h1>

                <div className="d-flex align-items-center">
                    <form className="d-flex">
                        <input
                            className="form-control me-2"
                            type="search"
                            onChange={(e) => search(e.target.value.toLowerCase())}
                            placeholder="Search..."
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form>
                    <Link to="/addcart" className="text-light ml-3 position-relative">
                        <i className="fas fa-shopping-cart fa-2x"></i>
                        {totalQuantity > 0 && (
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {totalQuantity}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;




// import React from 'react';
// import { Link } from 'react-router-dom';


// const Navbar = ({ onMenuClick, search }) => {

//   return (
//     <nav className="navbar navbar-light bg-dark sticky-top">
//       <div className="container-fluid ">
//         <button className="btn btn-dark" onClick={onMenuClick}>
//           ☰
//         </button>
//         <h1 className=" mb-0 text-white h1 display-6 ml-5  display-md-4 sm-6  fs-1 display-lg-3 ">Shopify  </h1>
       
//         <div className="d-flex align-items-center">
//           <form className="d-flex">
//             <input
//               className="form-control me-2"
//               type="search"
//               onChange={(e) => search(e.target.value.toLowerCase())}
//               placeholder="Search..."
//               aria-label="Search"
//             />
//             <button className="btn btn-outline-success" type="submit">
//               Search
//             </button>
//           </form>
//           <Link to="/addcart" className="text-light ml-3">
//             <i className="fas fa-shopping-cart fa-2x"></i>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
