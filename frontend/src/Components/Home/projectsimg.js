import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Projectimg() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out",
      once: true, // Whether animation should happen only once
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default value for large screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Medium screens (Tablets)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Small screens (Mobile)
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480, // Extra small screens
        settings: {
          slidesToShow: 1,
          dots: false, // Optional: Hide dots on smaller screens
        },
      },
    ],
  };

  return (
    <div className="w-full px-4 md:w-4/5 lg:w-3/5 m-auto mt-20">
      <div className="px-6 text-center">
        <h1
          className="mb-6 text-3xl md:text-4xl lg:text-5xl font-serif"
          data-aos="fade-up"
        >
          Portfolio of Our
        </h1>
        <h3
          className="mb-8 text-2xl md:text-3xl font-serif"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Finest Projects
        </h3>
      </div>
      <div className="mt-10 md:mt-20">
        <Slider {...settings}>
          {data.map((d, index) => (
            <a
              key={index}
              className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg focus:outline-none focus:shadow-lg transition dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
              href="#"
              data-aos="zoom-in"
              data-aos-delay={`${index * 100}`}
            >
              <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
                <img
                  className="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
                  src={d.img}
                  alt="Card Image"
                />
              </div>
            </a>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  {
    img: "https://t4.ftcdn.net/jpg/02/81/89/73/360_F_281897358_3rj9ZBSZHo5s0L1ug7uuIHadSxh9Cc75.jpg",
  },
  {
    img: "https://st2.depositphotos.com/3378121/5593/i/450/depositphotos_55933727-stock-photo-modern-buildings-in-the-financial.jpg",
  },
  {
    img: "https://cdn.pixabay.com/photo/2015/11/17/18/59/architecture-1048092_640.jpg",
  },
  {
    img: "https://media.istockphoto.com/id/1351571961/photo/looking-directly-up-at-the-skyline-of-the-financial-district-in-central-london.jpg?s=612x612&w=0&k=20&c=4J_aWJc5gMATCtIbMkF0dMq4dzz_XjLx5DpwnuPJwkg=",
  },
  {
    img: "https://cdn.hswstatic.com/gif/tallest-building-1.jpg",
  },
];

export default Projectimg;