// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../../contexts/authContext';
// import { doSignOut } from '../../firebase/auth';

// const Header = ({ logout }) => {
//     const navigate = useNavigate();
//     const { userLoggedIn } = useAuth();

//     const handleLogout = async () => {
//         await doSignOut();
//         logout(); // Call the logout function passed from Home component
//         navigate('/login');
//     };

//     return (
//         <nav className='flex flex-row gap-x-2 w-full z-20 fixed top-0 left-15 h-12 border-b bg-gray-200'>
//             {userLoggedIn ? (
//                 <button onClick={handleLogout} className='text-sm text-blue-600 underline'>
//                     Logout
//                 </button>
//             ) : (
//                 <>
//                     <Link className='text-sm text-blue-600 underline' to={'/login'}>
//                         Login
//                     </Link>
//                     <Link className='text-sm text-blue-600 underline' to={'/register'}>
//                         Register New Account
//                     </Link>
//                 </>
//             )}
//         </nav>
//     );
// };

// export default Header;






















// // import React from 'react'
// // import { Link, useNavigate } from 'react-router-dom'
// // import { useAuth } from '../../contexts/authContext'
// // import { doSignOut } from '../../firebase/auth'

// // const Header = () => {
// //     
// //     return (const navigate = useNavigate()
// //     const { userLoggedIn } = useAuth()
// //         <nav className='flex flex-row gap-x-2 w-full z-20 fixed top-0 left-15 h-12 border-b  bg-gray-200'>
// //             {
// //                 userLoggedIn
// //                     ?
// //                     <>
// //                         <button onClick={() => { doSignOut().then(() => { navigate('/login') }) }} className='text-sm text-blue-600 underline'>Logout</button>
// //                     </>
// //                     :
// //                     <>
// //                         <Link className='text-sm text-blue-600 underline' to={'/login'}>Login</Link>
// //                         <Link className='text-sm text-blue-600 underline' to={'/register'}>Register New Account</Link>
// //                     </>
// //             }

// //         </nav>
// //     )
// // }

// // export default Header