
// // import Sidebar from './component/sidebar/SideBar';
// // import Login from './pages/login/Login';
// // import Signup from './pages/signup/Signup'
// // import {BrowserRouter,Route,Routes} from 'react-router-dom'
// // function App() {
// //   return (
// //     <div >
// //       <BrowserRouter>
// //       <Sidebar/>
// //       <Routes>
// //         <Route path='/' element={<Login/>}/>
// //         <Route path='/signup' element={<Signup/>}/>
// //       </Routes>
   
   
// //       </BrowserRouter>
// //     </div>
// //   );
// // }

// // export default App;

// // import React, { useState } from 'react';
// // import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// // import Sidebar from './component/sidebar/SideBar';
// // import Login from './pages/login/Login';
// // import Signup from './pages/signup/Signup';
// // import Dashboard from './pages/dashboard/Dashboard';

// // function App() {
// //   const [isLoggedIn, setIsLoggedIn] = useState(true); // State to track user's login status

// //   return (
// //     <div>
// //       <BrowserRouter>
// //         <Routes>
// //           {/* Public routes */}
// //           <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
// //           <Route path="/signup" element={<Signup />} />
// //           {/* Protected routes */}
// //           {isLoggedIn ? (
// //             <Route path="/dashboard" element={<Dashboard />} />
// //           ) : (
// //             <Route path="/dashboard" element={<Navigate to="/" replace />} />
// //           )}
// //         </Routes>
// //         {isLoggedIn && (
// //           <div className="container">
// //             <Sidebar />
// //             <div className="content">
// //               {/* Main content of your dashboard */}
// //               <h1>Main Content</h1>
// //             </div>
// //           </div>
// //         )}
// //       </BrowserRouter>
// //     </div>
// //   );
// // }

// // export default App;

// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Sidebar from './component/sidebar/SideBar';
// import Dashboard from './pages/dashboard/Dashboard';
// import './App.css';
// import Header from './component/header/Header';
// import Signup from './pages/signup/Signup'
// import Login from './pages/login/Login';
// import PrivateRoute from './component/privateroute/PrivateRoute';
// import { AuthProvider } from './Authentication/AuthContext';
// function App() {
//   return (
//     <div >
//       <BrowserRouter>
//       <AuthProvider>

//       <div>
//         <Routes>
//         <Route path='/signup' element={<Signup/>}/>
//         <Route path='/login' element={<Login/>}/>
//         </Routes>
//       </div>
//       <div className="App1">
//         <PrivateRoute children={<Sidebar />}/>
//         <div className="content">
//           <PrivateRoute children={<Header/>}/>
//           <Routes>
//             <Route path="/"  element={<PrivateRoute children={<Dashboard />}/>} />
//             {/* Add more routes as needed */}
//           </Routes>
//         </div>
//       </div>
//       </AuthProvider>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './component/sidebar/SideBar';
import Dashboard from './pages/dashboard/Dashboard';
import './App.css';
import Header from './component/header/Header';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import PrivateRoute from './component/privateroute/PrivateRoute';
import { AuthProvider, useAuth } from './Authentication/AuthContext';
import AddCategory from './pages/category/AddCategory';
import CategoryList from './pages/category/CategoryList';
import EditCategory from './pages/category/EditCategory';

function AppContent() {
  const { token } = useAuth();

  if (!token) {
    return (
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    );
  }

  return (
    <div className="App1">
      <PrivateRoute children={<Sidebar />} />
      <div className="content">
        <PrivateRoute children={<Header />} />
        <Routes>
          <Route  path="/" element={<PrivateRoute children={<Dashboard />}/>} />
          <Route path='/add-category' element={<PrivateRoute children={<AddCategory/>}/>}/>
          <Route path='/category-list' element={<PrivateRoute children={<CategoryList/>}/>}/>
          <Route path='edit-category/:categoryid' element={<PrivateRoute children={<EditCategory/>}/>}/>
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
