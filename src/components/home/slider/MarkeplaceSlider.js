import React from "react";
import "./MarketplaceSlider.css";
import SliderItem from "./SliderItem";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import CustomItem from "./CustomItem";

// import "swiper/css/pagination";

const MarkeplaceSlider = ({ country }) => {
  // all available marketplace
  const sliderList = [
    {
      id: 1,
      img: "/images/brand/amazon.png",
      url: "https://www.amazon.in/",
      name: "Amazon",
      country: "india",
    },
    {
      id: 2,
      img: "/images/brand/myntra.png",
      url: "https://www.myntra.com/",
      name: "Myntra",
      country: "india",
    },
    {
      id: 3,
      img: "/images/brand/flipkart.png",
      url: "https://www.flipkart.com/",
      name: "Flipkart",
      country: "india",
    },
    {
      id: 4,
      img: "/images/brand/itokri.png",
      url: "https://www.itokri.com/",
      name: "itokri",
      country: "india",
    },
    {
      id: 5,
      img: "/images/brand/alibaba.png",
      url: "https://www.alibaba.com/",
      name: "Alibaba",
      country: "china",
    },
    {
      id: 6,
      img: "/images/brand/aliexpress.png",
      url: "https://www.aliexpress.com/",
      name: "AliExpress",
      country: "china",
    },
    {
      id: 7,
      img: "/images/brand/ebay.png",
      url: "https://www.ebay.com/",
      name: "Ebay",
      country: "uk",
    },
    {
      id: 8,
      img: "/images/brand/diya.png",
      url: "https://www.diyaonline.com/",
      name: "diya",
      country: "india",
    },
    {
      id: 9,
      img: "/images/brand/westside.png",
      url: "https://www.westside.com/",
      name: "Westside",
      country: "india",
    },
    {
      id: 10,
      img: "/images/brand/fs.png",
      url: "https://www.fablestreet.com/",
      name: "FS",
      country: "india",
    },
    {
      id: 11,
      img: "/images/brand/kreeva.png",
      url: "https://www.kreeva.com/",
      name: "Kreeva",
      country: "india",
    },
    {
      id: 12,
      img: "/images/brand/rangpur.png",
      url: "https://www.rangpur.in/",
      name: "Rangpur",
      country: "india",
    },
    {
      id: 13,
      img: "/images/brand/ajio.png",
      url: "https://www.ajio.com/",
      name: "Ajio",
      country: "india",
    },
    {
      id: 14,
      img: "/images/brand/andaaz.png",
      url: "https://www.andaazfashion.com/",
      name: "Andaaz Fashion",
      country: "india",
    },
    {
      id: 15,
      img: "/images/brand/panash.png",
      url: "https://www.panashindia.com/",
      name: "panash india",
      country: "india",
    },
    {
      id: 16,
      img: "/images/brand/snapdeal.png",
      url: "https://www.snapdeal.com/",
      name: "snapdeal",
      country: "india",
    },
    {
      id: 17,
      img: "/images/brand/biba.png",
      url: "https://www.biba.in/",
      name: "biba",
      country: "india",
    },
    {
      id: 18,
      img: "/images/brand/aza.png",
      url: "https://www.azafashions.com/",
      name: "aza",
      country: "india",
    },
    {
      id: 19,
      img: "/images/brand/slk.png",
      url: "https://sreeleathers.com/",
      name: "slk",
      country: "india",
    },
    {
      id: 20,
      img: "/images/brand/amazon.uk.png",
      url: "https://www.amazon.co.uk/",
      name: "amazon",
      country: "uk",
    },
    {
      id: 21,
      img: "/images/brand/asos.png",
      url: "https://www.asos.com/",
      name: "asos",
      country: "uk",
    },
    {
      id: 23,
      img: "/images/brand/argos.png",
      url: "https://www.argos.co.uk/",
      name: "argos",
      country: "uk",
    },
    {
      id: 24,
      img: "/images/brand/john.png",
      url: "https://www.johnlewis.com/",
      name: "john",
      country: "uk",
    },
    {
      id: 25,
      img: "/images/brand/mands.png",
      url: "https://www.marksandspencer.com/",
      name: "M & S",
      country: "uk",
    },
    {
      id: 26,
      img: "/images/brand/asda.png",
      url: "https://www.asda.com/",
      name: "asda",
      country: "uk",
    },
    {
      id: 27,
      img: "/images/brand/currys.png",
      url: "https://www.currys.co.uk/",
      name: "currys",
      country: "uk",
    },
    {
      id: 28,
      img: "/images/brand/firstcry.png",
      url: "https://www.firstcry.com/",
      name: "firstcry",
      country: "india",
    },
    {
      id: 29,
      img: "/images/brand/littlemuffet.png",
      url: "https://littlemuffet.com/",
      name: "littlemuffet",
      country: "india",
    },
    {
      id: 30,
      img: "/images/brand/boots.png",
      url: "https://www.boots.com/",
      name: "boots",
      country: "uk",
    },
    {
      id: 32,
      img: "/images/brand/superdrug.png",
      url: "https://www.superdrug.com/",
      name: "superdrug",
      country: "uk",
    },
    {
      id: 33,
      img: "/images/brand/lookfan.png",
      url: "https://www.lookfantastic.com/",
      name: "lookfantastic",
      country: "uk",
    },
    {
      id: 34,
      img: "/images/brand/mugler.png",
      url: "https://www.mugler.com/",
      name: "mugler",
      country: "uk",
    },
    {
      id: 35,
      img: "/images/brand/fragrance.png",
      url: "https://www.fragrancedirect.co.uk/",
      name: "fragrancedirect",
      country: "uk",
    },
    {
      id: 36,
      img: "/images/brand/allbeauty.png",
      url: "https://www.allbeauty.com/",
      name: "allbeauty",
      country: "uk",
    },
    {
      id: 37,
      img: "/images/brand/glossybox.png",
      url: "https://www.glossybox.com/",
      name: "glossybox",
      country: "uk",
    },
    {
      id: 38,
      img: "/images/brand/aurelia.png",
      url: "https://www.aurelialondon.com/",
      name: "aurelialondon",
      country: "uk",
    },
    {
      id: 39,
      img: "/images/brand/feelunique.png",
      url: "https://row.feelunique.com/",
      name: "feelunique",
      country: "uk",
    },
    {
      id: 40,
      img: "/images/brand/latestinbeauty.png",
      url: "https://www.latestinbeauty.com/",
      name: "latestinbeauty",
      country: "uk",
    },
    {
      id: 41,
      img: "/images/brand/beautyexpert.png",
      url: "https://www.beautyexpert.com/",
      name: "beautyexpert",
      country: "uk",
    },
    {
      id: 42,
      img: "/images/brand/illamasqua.png",
      url: "https://www.illamasqua.com/",
      name: "illamasqua",
      country: "uk",
    },
    {
      id: 43,
      img: "/images/brand/eyeko.png",
      url: "https://www.eyeko.com/",
      name: "eyeko",
      country: "uk",
    },
    {
      id: 44,
      img: "/images/brand/hqhair.png",
      url: "https://www.hqhair.com/",
      name: "hqhair",
      country: "uk",
    },
    {
      id: 45,
      img: "/images/brand/mio.png",
      url: "https://www.mioskincare.com/",
      name: "mioskincare",
      country: "uk",
    },
    {
      id: 46,
      img: "/images/brand/mankind.png",
      url: "https://www.mankind.co.uk/",
      name: "mankind",
      country: "uk",
    },
    {
      id: 47,
      img: "/images/brand/cultbeauty.png",
      url: "https://www.cultbeauty.co.uk/",
      name: "cultbeauty",
      country: "uk",
    },
    {
      id: 48,
      img: "/images/brand/hsamuel.png",
      url: "https://www.hsamuel.co.uk/",
      name: "hsamuel",
      country: "uk",
    },
    {
      id: 49,
      img: "/images/brand/fossil.png",
      url: "https://www.fossil.com/en-us/",
      name: "fossil",
      country: "uk",
    },
    {
      id: 50,
      img: "/images/brand/goldsmiths.png",
      url: "https://www.goldsmiths.co.uk/",
      name: "goldsmiths",
      country: "uk",
    },
    {
      id: 51,
      img: "/images/brand/watchco.png",
      url: "https://www.watch.co.uk/",
      name: "watch.co.uk",
      country: "uk",
    },
    {
      id: 52,
      img: "/images/brand/ticwatches.png",
      url: "https://www.ticwatches.co.uk/",
      name: "ticwatches",
      country: "uk",
    },
    {
      id: 53,
      img: "/images/brand/bulova.png",
      url: "https://www.bulova.com/global/",
      name: "bulova",
      country: "uk",
    },
    {
      id: 54,
      img: "/images/brand/sekonda.png",
      url: "https://www.sekonda.com/",
      name: "sekonda",
      country: "uk",
    },
    {
      id: 55,
      img: "/images/brand/watchshop.png",
      url: "https://www.watchshop.com/",
      name: "watchshop",
      country: "uk",
    },
    {
      id: 56,
      img: "/images/brand/thewatchhut.png",
      url: "https://www.thewatchhut.co.uk/",
      name: "thewatchhut",
      country: "uk",
    },
    {
      id: 57,
      img: "/images/brand/citywatches.png",
      url: "https://www.citywatches.co.uk/",
      name: "citywatches",
      country: "uk",
    },
    {
      id: 58,
      img: "/images/brand/houseofwatches.png",
      url: "https://www.houseofwatches.co.uk/",
      name: "houseofwatches",
      country: "uk",
    },
    {
      id: 59,
      img: "/images/brand/very.png",
      url: "https://www.very.co.uk/",
      name: "very",
      country: "uk",
    },
    {
      id: 60,
      img: "/images/brand/littlewoods.png",
      url: "https://www.littlewoods.com/",
      name: "littlewoods",
      country: "uk",
    },
    {
      id: 61,
      img: "/images/brand/microsoft.png",
      url: "https://www.microsoft.com/en-gb",
      name: "microsoft",
      country: "uk",
    },
    {
      id: 62,
      img: "/images/brand/novatech.png",
      url: "https://www.novatech.co.uk/",
      name: "novatech",
      country: "uk",
    },
    {
      id: 63,
      img: "/images/brand/acer.png",
      url: "https://store.acer.com/en-gb/",
      name: "acer",
      country: "uk",
    },
    {
      id: 64,
      img: "/images/brand/zavvi.png",
      url: "https://www.zavvi.com/",
      name: "zavvi",
      country: "uk",
    },
    {
      id: 65,
      img: "/images/brand/oasisfashion.png",
      url: "https://www.oasisfashion.com/",
      name: "oasisfashion",
      country: "uk",
    },
    {
      id: 66,
      img: "/images/brand/nastygal.png",
      url: "https://www.nastygal.com/",
      name: "nastygal",
      country: "uk",
    },
    {
      id: 67,
      img: "/images/brand/boohoo.png",
      url: "https://www.boohoo.com/",
      name: "boohoo",
      country: "uk",
    },
    {
      id: 68,
      img: "/images/brand/prettylittlething.png",
      url: "https://www.prettylittlething.com/",
      name: "prettylittlething",
      country: "uk",
    },
    {
      id: 69,
      img: "/images/brand/nike.png",
      url: "https://www.nike.com/gb/",
      name: "nike",
      country: "uk",
    },
    {
      id: 70,
      img: "/images/brand/superdry.png",
      url: "https://www.superdry.com/",
      name: "superdry",
      country: "uk",
    },
    {
      id: 71,
      img: "/images/brand/boden.png",
      url: "https://www.boden.co.uk/",
      name: "boden",
      country: "uk",
    },
    {
      id: 72,
      img: "/images/brand/reiss.png",
      url: "https://www.reiss.com/",
      name: "reiss",
      country: "uk",
    },
    {
      id: 73,
      img: "/images/brand/gymshark.png",
      url: "https://row.gymshark.com/",
      name: "gymshark",
      country: "uk",
    },
    {
      id: 74,
      img: "/images/brand/dorothyperkins.png",
      url: "https://www.dorothyperkins.com/eu",
      name: "dorothyperkins",
      country: "uk",
    },
    {
      id: 75,
      img: "/images/brand/tedbaker.png",
      url: "https://www.tedbaker.com/row",
      name: "tedbaker",
      country: "uk",
    },
    {
      id: 76,
      img: "/images/brand/little-mistress.png",
      url: "https://www.little-mistress.com/",
      name: "little-mistress",
      country: "uk",
    },
    {
      id: 77,
      img: "/images/brand/fatface.png",
      url: "https://www.fatface.com/",
      name: "fatface",
      country: "uk",
    },
    {
      id: 78,
      img: "/images/brand/riverisland.png",
      url: "https://www.riverisland.com/",
      name: "riverisland",
      country: "uk",
    },
    {
      id: 79,
      img: "/images/brand/frenchconnection.png",
      url: "https://www.frenchconnection.com/",
      name: "frenchconnection",
      country: "uk",
    },
    {
      id: 80,
      img: "/images/brand/urbanoutfitters.png",
      url: "https://www.urbanoutfitters.com/homepage-uov",
      name: "urbanoutfitters",
      country: "uk",
    },
    {
      id: 81,
      img: "/images/brand/joebrowns.png",
      url: "https://www.joebrowns.co.uk/",
      name: "joebrowns",
      country: "uk",
    },
    {
      id: 82,
      img: "/images/brand/ralphlauren.png",
      url: "https://www.ralphlauren.com/",
      name: "ralphlauren",
      country: "uk",
    },
    {
      id: 83,
      img: "/images/brand/newlook.png",
      url: "https://www.newlook.com/uk",
      name: "newlook",
      country: "uk",
    },
    {
      id: 84,
      img: "/images/brand/joules.png",
      url: "https://www.joules.com/",
      name: "joules",
      country: "uk",
    },
    {
      id: 85,
      img: "/images/brand/laredoute.png",
      url: "https://www.laredoute.com/",
      name: "laredoute",
      country: "uk",
    },
    {
      id: 86,
      img: "/images/brand/coastfashion.png",
      url: "https://www.coastfashion.com/",
      name: "coastfashion",
      country: "uk",
    },
    {
      id: 87,
      img: "/images/brand/karenmillen.png",
      url: "https://www.karenmillen.com/",
      name: "karenmillen",
      country: "uk",
    },
    {
      id: 88,
      img: "/images/brand/bouxavenue.png",
      url: "https://www.bouxavenue.com/",
      name: "bouxavenue",
      country: "uk",
    },
    {
      id: 89,
      img: "/images/brand/desigual.png",
      url: "https://www.desigual.com/es_ES/",
      name: "desigual",
      country: "uk",
    },
    {
      id: 90,
      img: "/images/brand/vertbaudet.png",
      url: "https://www.vertbaudet.com/en/",
      name: "vertbaudet",
      country: "uk",
    },
    {
      id: 91,
      img: "/images/brand/emp.png",
      url: "https://www.emp-online.com/",
      name: "emp",
      country: "uk",
    },
    {
      id: 92,
      img: "/images/brand/mamasandpapas.png",
      url: "https://www.mamasandpapas.com/",
      name: "mamasandpapas",
      country: "uk",
    },
    {
      id: 94,
      img: "/images/brand/elc.png",
      url: "https://www.elc.co.uk/",
      name: "elc",
      country: "uk",
    },
    {
      id: 95,
      img: "/images/brand/boohooman.png",
      url: "https://www.boohooman.com/",
      name: "boohooman",
      country: "uk",
    },
    {
      id: 96,
      img: "/images/brand/burton.png",
      url: "https://www.burton.com/us/en/home",
      name: "burton",
      country: "uk",
    },
    {
      id: 97,
      img: "/images/brand/charlestyrwhitt.png",
      url: "https://www.charlestyrwhitt.com/eu/home",
      name: "charlestyrwhitt",
      country: "uk",
    },
    {
      id: 98,
      img: "/images/brand/taobao.png",
      url: "https://world.taobao.com/",
      name: "taobao",
      country: "china",
    },
  ];

  return (
    <div>
      <Swiper
        className="marketplace-slider animate__animated animate__fadeIn"
        navigation={true}
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={4}
        onSlideChange={() => {}}
        onSwiper={(swiper) => {}}
        breakpoints={{
          // when window width is >= 100px
          100: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          // when window width is >= 600px
          600: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          // when window width is >= 650px
          650: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // when window width is >= 900px
          900: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // when window width is >= 1200px
          1200: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          // when window width is >= 1600px
          1600: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {sliderList
          .filter((item) => item.country === country)
          .map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <SliderItem data={item} />
              </SwiperSlide>
            );
          })}
        <SwiperSlide>
          <CustomItem />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MarkeplaceSlider;
