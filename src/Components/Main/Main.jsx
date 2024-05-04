import React, { useEffect } from "react";
import "./main.css";
import "./main.scss";
import img1 from "../../photos/img1lon.png";
import img2 from "../../photos/img2sing.webp";
import img3 from "../../photos/img3china.jpg";
import img4 from "../../photos/img4paris.jpg";
import img5 from "../../photos/img5dubai.jpg";
import img6 from "../../photos/img6newyork.jpg";
import img7 from "../../photos/img7thai.jpg";
import img8 from "../../photos/img8delhi.avif";
import img9 from "../../photos/img9hong.webp";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuClipboardCheck } from "react-icons/lu";
import Aos from "aos";
import "aos/dist/aos.css";
const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: "London",
    location: "UK",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "London is a world cultural capital. It is the world's most-visited city as measured by international arrivals and has the world's largest city airport system measured by passenger traffic. London's 43 universities form the largest concentration of higher education institutes in Europe.",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Singapore",
    location: "Singapore",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Singapore is a sunny, tropical island in Southeast Asia, off the southern tip of the Malay Peninsula. It is about 275 square miles, smaller than the State of Rhode Island, and inhabited by over five million people, of which the resident population comprises four major communities; Chinese, Malay, Indian and Eurasian.",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Macau",
    location: "China",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Macau has been known as 'Monte Carlo of the Orient' and 'Las Vegas of the East', which is attributed to the vast number of Casinos throughout the location. It is understood that visitors to Macau greatly focus on gambling, with an average stay of 1.5 nights.",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Paris",
    location: "France",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Unlike other great cities, Paris is always alive and pulsating. This vibrant city is a kaleidoscope of art, literature, film, architecture, and whatnot. Paris is portrayed as the city of lights (“La Ville-Lumière”), the city of love, and the city of fashion, and is one of the richest cities in the world. ",
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "Dubai",
    location: "UAE",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Dubai is a city of skyscrapers, ports, and beaches, where big business takes place alongside sun-seeking tourism. Because of its large expatriate population, it feels like a Middle Eastern melting pot, and the atmosphere is generally tolerant. ",
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "New York City",
    location: "US",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "NYC is a place like no other. If you're short on time, here's a quick answer to your question: Some words to describe New York City are vibrant, diverse, electric, ambitious, restless, gritty, artsy, cosmopolitan, crowded, and resilient. ",
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: "Phuket",
    location: "Thailand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Phuket is among the world's finest beach destinations, with fine white sands, nodding palm trees, glittering seas and lively towns. It has something for a wide array of tastes and budgets, with hundreds of hotels to choose from, an eclectic choice of dining and plenty of partying options.",
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: "Delhi",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "India has a unique culture and is one of the oldest and greatest civilizations of the world. India has achieved all-round socio-economic progress since its Independence. India covers an area of 32,87,263 sq. km, extending from the snow-covered Himalayan heights to the tropical rain forests of the south.",
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: "Hong Kong",
    location: "China",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Hong Kong is a special administrative region (SAR) of the People's Republic of China. It comprises 200 islands located in Eastern Asia bordering the South China Sea and China. Much of Hong Kong's terrain is hilly to mountainous with steep slopes. The government system is a limited democracy; the chief of state is the president of China, and the head of government is the chief executive of Hong Kong.",
  },
];
const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title" data="true">
          Most visited destinations
        </h3>
      </div>
      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div
                key={id}
                data-aos="fade-up"
                className="singleDestination"
                data="true"
              >
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>
                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className="btn flex">
                    DETAILS <LuClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
