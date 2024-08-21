// import React, { useState, useEffect } from "react";
// import { HiOutlineSearch } from "react-icons/hi";
// import { SlMenu } from "react-icons/sl";
// import { VscChromeClose } from "react-icons/vsc";
// import { useNavigate, useLocation } from "react-router-dom";

// import "./Header.scss";

// import ContentWrapper from "../contentWrapper/ContentWrapper";
// // import logo from "../../assets/moviefilm.svg";
// import logo from "../../assets/movie-icon-logo.svg";

// const Header = () => {
//   const [show, setShow] = useState("top");
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [mobileMenu, setMobileMenu] = useState(false);
//   const [query, setQuery] = useState("");
//   const [showSearch, setShowSearch] = useState("");
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location]);

//   const controlNavbar = () => {
//     if (window.scrollY > 200) {
//       if (window.scrollY > lastScrollY && !mobileMenu) {
//         setShow("hide");
//       } else {
//         setShow("show");
//       }
//     } else {
//       setShow("top");
//     }
//     setLastScrollY(window.scrollY);
//   };

//   useEffect(
//     () => {
//       window.addEventListener("scroll", controlNavbar);
//       return () => {
//         window.removeEventListener("scroll", controlNavbar);
//       };
//     },
//     { lastScrollY }
//   );

//   const searchQueryHandler = (event) => {
//     if (event.key === "Enter" && query.length > 0) {
//       navigate(`/search/${query}`);
//       setTimeout(() => {
//         setShowSearch(false);
//       }, 1000);
//     }
//   };

//   const openSearch = () => {
//     setMobileMenu(false);
//     setShowSearch(true);
//   };

//   const openMobileMenu = () => {
//     setMobileMenu(true);
//     setShowSearch(false);
//   };

//   const navigationHandler = (type) => {
//     if (type === "movie") {
//       navigate("/explore/movie");
//     } else {
//       navigate("/explore/tv");
//     }
//     setMobileMenu(false);
//   };

//   return (
//     <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
//       <ContentWrapper>
//         <div className="logo" onClick={() => navigate("/")}>
//           <img src={logo} alt="" />
//         </div>
//         <ul className="menuItems">
//           <li className="menuItem" onClick={() => navigationHandler("movie")}>
//             Movies
//           </li>
//           <li className="menuItem" onClick={() => navigationHandler("tv")}>
//             TV Shows
//           </li>
//           <li className="menuItem">
//                 <HiOutlineSearch onClick={openSearch} />
//           </li>
//         </ul>

//         <div className="mobileMenuItems">
//           <HiOutlineSearch onClick={openSearch} />
//           {mobileMenu ? (
//             <VscChromeClose onClick={() => setMobileMenu(false)} />
//           ) : (
//             <SlMenu onClick={openMobileMenu} />
//           )}
//         </div>
//       </ContentWrapper>
//       {showSearch && (
//         <div className="searchBar">
//           <ContentWrapper>
//             <div className="search-box">
//               {/* <input
//                 type="text"
//                 placeholder="Search for movie or TV show..."
//                 onChange={(e) => setQuery(e.target.value)}
//                 onKeyUp={searchQueryHandler}
//               /> */}
//               <input
//                 type="text"
//                 className="input-search"
//                 placeholder="Type to Search..."
//                 onChange={(e) => setQuery(e.target.value)}
//                 onKeyUp={searchQueryHandler}
//               ></input>
//               <VscChromeClose
//                 onClick={() => setShowSearch(false)}
//                 style={{ top: 5 }}
//               />
//             </div>
//           </ContentWrapper>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;

import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./Header.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/movie-icon-logo.svg";

const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("top");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setShowSearch(false);
      }, 1000);
    }
  };

  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
    setTimeout(() => {
      document.querySelector(".input-search").focus();
    }, 100); // Ensures the input is focused after it is displayed
  };

  const SearchPop = () => {
    setTimeout(() => {
      document.querySelector(".input-search").focus();
    }, 100);
  };

  const closeSearch = () => {
    setShowSearch(false);
    setQuery("");
  };

  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };

  const navigationHandler = (type) => {
    if (type === "movie") {
      navigate("/explore/movie");
    } else if (type === "tv") {
      navigate("/explore/tv");
    } else {
      navigate("/login");
    }
    setMobileMenu(false);
  };

  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      <ContentWrapper>
        <div className="logo" onClick={() => navigate("/")}>
          <img src={logo} alt="Logo" />
        </div>
        <ul className="menuItems">
          <li className="menuItem" onClick={() => navigationHandler("movie")}>
            Movies
          </li>
          <li className="menuItem" onClick={() => navigationHandler("tv")}>
            TV Shows
          </li>
          {/* <li className="menuItem" onClick={() => navigationHandler("login")}>
            Login
          </li> */}
          {showSearch && (
            <div className="searchBox">
              <input
                type="text"
                className="input-search"
                placeholder="Search Here..."
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
              />
              <VscChromeClose className="close-icon" onClick={closeSearch} />
            </div>
          )}
          <li className="menuItem searchIcon">
            <button className="btn-search" onClick={openSearch}>
              <HiOutlineSearch size={20} />
            </button>
          </li>
        </ul>
        <div className="mobileMenuItems">
          {/*search-menu */}
          {showSearch && (
            <div className="searchBox" onClick={SearchPop}>
              <input
                type="text"
                className="input-search"
                placeholder="Search Here..."
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
              />
              <VscChromeClose className="close-icon" onClick={closeSearch} />
            </div>
          )}
          {/* <li className="menuItem searchIcon"> */}
          <button className="btn-search" onClick={openSearch}>
            <HiOutlineSearch size={20} />
          </button>
          {/* </li>{" "} */}
          {/*search-menu */}
          {mobileMenu ? (
            <VscChromeClose onClick={() => setMobileMenu(false)} />
          ) : (
            <SlMenu onClick={openMobileMenu} />
          )}
        </div>{" "}
      </ContentWrapper>
    </header>
  );
};

export default Header;
