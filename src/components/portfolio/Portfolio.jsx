import React from "react";
import IMG2 from "../../assets/chessIMG1.jpg";
import IMG3 from "../../assets/socerIMG.jpg";
import IMG4 from "../../assets/gymIMG.jpg";

import "./portfolio.css";
//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    
    {
      id: 1,
      title: "Gym",
      img: IMG4,
      description:
        "Regular physical exercising has improved my health by increasing oxygen and nutrients delivered to my tissues, organs, and this helped cardiovascular to work more efficiently.",
      joinMe: "https://vigorgroundfitness.com/",
    },
    {
      id: 2,
      title: "Chess",
      img: IMG2,
      description: "Chess is a board game between two players. It is sometimes called Western chess or international chess. This game improved my way of thinking and solving problems.",
      joinMe: "https://www.chess.com",
    },
    {
      id: 3,
      title: "Soccer",
      img: IMG3,
      description: "Soccer is a game played by two teams of eleven players with a round ball that may not be touched with the hands or arms during play except by the goalkeepers.",
      joinMe: "https://www.livesoccertv.com/",
    }
  ];

  return (
    <section id="portfolio">
      <h5>My Hobbies</h5>
      <h2>Hobbies</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.joinMe}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                Join Me
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
