import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import "./HeroBanner.scss";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

function HeroBanner(setShowSearch) {
  const [backgrounds, setBackgrounds] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/upcoming");
  const intervalRef = useRef(null);
  const [animating, setAnimating] = useState(false);
  // const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    if (data && data.results) {
      const bgImages = data.results.map(
        (movie) => url.backdrop + movie.backdrop_path
      );
      setBackgrounds(bgImages);
    }
  }, [data, url.backdrop]);

  useEffect(() => {
    if (backgrounds.length > 0) {
      startSlideshow();
    }
    return () => stopSlideshow();
  }, [backgrounds]);

  const startSlideshow = () => {
    intervalRef.current = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
        setAnimating(false);
      }, 1000); // Duration of slide-out animation
    }, 6000); // Total duration including display and transition time
  };

  const stopSlideshow = () => {
    clearInterval(intervalRef.current);
  };

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      stopSlideshow();
      setAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
        setAnimating(false);
        startSlideshow();
      }, 500); // Duration of slide-out animation
    },
    onSwipedRight: () => {
      stopSlideshow();
      setAnimating(true);
      setTimeout(() => {
        setCurrentIndex(
          (prevIndex) =>
            (prevIndex - 1 + backgrounds.length) % backgrounds.length
        );
        setAnimating(false);
        startSlideshow();
      }, 500); // Duration of slide-out animation
    },
  });

  return (
    <div className="heroBanner" {...swipeHandlers}>
      {!loading && backgrounds.length > 0 && (
        <div
          className={`backdrop-img ${animating ? "slide-out" : "slide-in"}`}
          style={{ backgroundImage: `url(${backgrounds[currentIndex]})` }}
        >
          <Img src={backgrounds[currentIndex]} style={{ display: "none" }} />
        </div>
      )}

      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for movie or TV show..."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <button
              onChange={(e) => setQuery(e.target.value)}
              onClick={searchQueryHandler}
            >
              Search
            </button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
}

export default HeroBanner;

// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import "./HeroBanner.scss";
// import useFetch from "../../../hooks/useFetch";
// import { useSelector } from "react-redux";
// import Img from "../../../components/lazyLoadImage/Img";
// import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
// // import {
// //   MdOutlineKeyboardArrowRight,
// //   MdOutlineKeyboardArrowLeft,
// // } from "react-icons/md";

// function HeroBanner() {
//   const [backgrounds, setBackgrounds] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [query, setQuery] = useState("");
//   const navigate = useNavigate();
//   const { url } = useSelector((state) => state.home);
//   const { data, loading } = useFetch("/movie/upcoming");
//   const intervalRef = useRef(null);
//   const [animating, setAnimating] = useState(false);

//   useEffect(() => {
//     if (data && data.results) {
//       const bgImages = data.results.map(
//         (movie) => url.backdrop + movie.backdrop_path
//       );
//       setBackgrounds(bgImages);
//     }
//   }, [data, url.backdrop]);

//   useEffect(() => {
//     if (backgrounds.length > 0) {
//       startSlideshow();
//     }
//     return () => stopSlideshow();
//   }, [backgrounds]);

//   const startSlideshow = () => {
//     intervalRef.current = setInterval(() => {
//       setAnimating(true);
//       setTimeout(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
//         setAnimating(false);
//       }, 1000); // Duration of slide-out animation
//     }, 6000); // Total duration including display and transition time
//   };

//   const stopSlideshow = () => {
//     clearInterval(intervalRef.current);
//   };

//   const searchQueryHandler = (event) => {
//     if (event.key === "Enter" && query.length > 0) {
//       navigate(`/search/${query}`);
//     }
//   };

// // const swiper = new Swiper('.swiper', {
// //   effect: 'flip',
// //   flipEffect: {
// //     slideShadows: false,
// //   },
// // });
//   // const prevImage = () => {
//   //   stopSlideshow();
//   //   setAnimating(true);
//   //   setTimeout(() => {
//   //     setCurrentIndex(
//   //       (prevIndex) => (prevIndex - 1 + backgrounds.length) % backgrounds.length
//   //     );
//   //     setAnimating(false);
//   //     startSlideshow();
//   //   }, 1000); // Duration of slide-out animation
//   // };

//   // const nextImage = () => {
//   //   stopSlideshow();
//   //   setAnimating(true);
//   //   setTimeout(() => {
//   //     setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
//   //     setAnimating(false);
//   //     startSlideshow();
//   //   }, 1000); // Duration of slide-out animation
//   // };

//   return (
//     <div className="heroBanner">
//       {!loading && backgrounds.length > 0 && (
//         <div
//           className={`backdrop-img ${animating ? "slide-out" : "slide-in"}`}
//           style={{ backgroundImage: `url(${backgrounds[currentIndex]})` }}
//         >
//           <Img src={backgrounds[currentIndex]} style={{ display: "none" }} />
//         </div>
//       )}

//       {/* <div className="swiper-wrapper"></div> */}
//       <div className="opacity-layer"></div>
//       <ContentWrapper>
//         <div className="heroBannerContent">
//           <span className="title">Welcome.</span>
//           <span className="subTitle">
//             Millions of movies, TV shows and people to discover. Explore now.
//           </span>
//           <div className="searchInput">
//             <input
//               type="text"
//               placeholder="Search for movie or TV show..."
//               onChange={(e) => setQuery(e.target.value)}
//               onKeyUp={searchQueryHandler}
//             />
//             <button>Search</button>
//           </div>
//         </div>
//       </ContentWrapper>
//       {/* <MdOutlineKeyboardArrowLeft
//         className="nav-arrow left-arrow"
//         onClick={prevImage}
//         style={{ opacity: 0.09 }}
//       />
//       <MdOutlineKeyboardArrowRight
//         className="nav-arrow right-arrow"
//         onClick={nextImage}
//         style={{ opacity: 0.09 }}
//       /> */}
//     </div>
//   );
// }

// export default HeroBanner;
