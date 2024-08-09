import React from "react";
import first from "../../assets/QuickPicks/1.png";
import second from "../../assets/QuickPicks/2.png";
import third from "../../assets/QuickPicks/3.png";
import fourth from "../../assets/QuickPicks/4.png";
import fifth from "../../assets/QuickPicks/5.png";
import sixth from "../../assets/QuickPicks/6.png";
import seventh from "../../assets/QuickPicks/7.png";
import eighth from "../../assets/QuickPicks/8.png";
import ninth from "../../assets/QuickPicks/9.png";
import tenth from "../../assets/QuickPicks/10.png";
import eleventh from "../../assets/QuickPicks/11.png";
import twelfth from "../../assets/QuickPicks/12.png";
import thirteenth from "../../assets/QuickPicks/13.png";
import fourthteenth from "../../assets/QuickPicks/14.png";
import fifteenth from "../../assets/QuickPicks/15.png";
import sisxteenth from "../../assets/QuickPicks/16.png";
import profile from "../../assets/056cc892636460bee5791aa3f243854c.png";
import Title from "./subComponents/Title";
import "./QuickPicks.css";

const quickPicks = [
  {
    id: 1,
    image: first,
    name: "Happy",
    artist: "Pharrell Williams . Listen Again",
  },
  {
    id: 2,
    image: second,
    name: "Cheap Thrills",
    artist: "Jessi J . Listen Again",
  },
  {
    id: 3,
    image: third,
    name: "Royals",
    artist: "Florence Welch (of Florence + the Machine)",
  },
  {
    id: 4,
    image: fourth,
    name: "Havana",
    artist: "Annie Lennox (of Eurythmics)",
  },
  {
    id: 5,
    image: fifth,
    name: "Love Story",
    artist: "John Lennon (of The Beatles)",
  },
  {
    id: 6,
    image: sixth,
    name: "I Will Always Love You",
    artist: "Coldplay (fronted by Chris Martin)",
  },
  {
    id: 7,
    image: seventh,
    name: "Radioactive",
    artist: "Listen Again . Listen Again",
  },
  {
    id: 8,
    image: eighth,
    name: "Can't Stop the Feeling!",
    artist: "Calvin Harris (singer and producer)",
  },
  {
    id: 9,
    image: ninth,
    name: "Smooth",
    artist: "Coldplay (fronted by Chris Martin)",
  },
  {
    id: 10,
    image: tenth,
    name: "I Gotta Feeling",
    artist: "George Michael (of Wham!)",
  },
  {
    id: 11,
    image: eleventh,
    name: "Say Something",
    artist: "Listen Again . Listen Again",
  },
  {
    id: 12,
    image: twelfth,
    name: "Stitches",
    artist: "Peter Gabriel . Listen Again",
  },
  {
    id: 13,
    image: thirteenth,
    name: "Hey, Soul Sister",
    artist: "Sam Smith . Listen Again",
  },
  {
    id: 14,
    image: fourthteenth,
    name: "Someone Like You",
    artist: "Elton John . Listen Again",
  },
  {
    id: 15,
    image: fifteenth,
    name: "Halo",
    artist: "Ellie Goulding . Listen Again",
  },
  {
    id: 16,
    image: sisxteenth,
    name: "Rolling in the Deep",
    artist: "Adele . Listen Again",
  },
];

const QuickPicks: React.FC = () => {
  return (
    <>
      <div className="title-container-quick">
        <Title
          profileImage={profile}
          title="START RADIO FROM A SONG"
          subtitle="Quick picks"
          showPlayAllButton={true}
        />
      </div>
      <div className="quick-picks-container">
        {quickPicks.map((pick) => (
          <div key={pick.id} className="quick-pick-item">
            <img
              src={pick.image}
              alt={pick.name}
              className="quick-pick-image"
            />
            <div className="quick-pick-info">
              <div className="quick-pick-name">{pick.name}</div>
              <div className="quick-pick-artist">{pick.artist}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default QuickPicks;
