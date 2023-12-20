import { portada } from "../assets";
const Carousel = () => {
  return (
    <div className="container mx-auto max-w-6xl ">
      <swiper-container
        slides-per-view="1"
        speed="1000"
        loop="true"
        autoplay="true"
      >
        <swiper-slide>
          <img src={portada} alt={portada} />
        </swiper-slide>
        <swiper-slide>
          <img src={portada} alt={portada} />
        </swiper-slide>
        <swiper-slide>
          <img src={portada} alt={portada} />
        </swiper-slide>
      </swiper-container>
    </div>
  );
};

export default Carousel;
