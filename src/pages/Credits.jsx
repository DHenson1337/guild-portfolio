// src/pages/Credits.jsx
import { useEffect } from "react";
import { useGuild } from "../context/GuildContext";
import GuildArea from "../components/guild/GuildArea";
import "./Credits.css";

function Credits() {
  const { updateDialogue } = useGuild();

  useEffect(() => {
    updateDialogue({
      type: "html",
      content:
        "Welcome to the Hall of Acknowledgments, where we honor those whose crafts have enriched our guild!",
    });
  }, []);

  const deskContent = (
    <div>
      <h2>Hall of Acknowledgments</h2>
      <p>
        Every great guild is built upon the foundations laid by fellow
        craftsmen.
      </p>
    </div>
  );

  return (
    <GuildArea deskContent={deskContent}>
      <div className="credits-content">
        <h2>Artistic Contributions</h2>
        <div className="credits-section">
          <h3>Visual Elements</h3>
          <ul>
            <li>
              Quest Board Design -{" "}
              <a
                href="https://chronicles-of-eternia.com/forum/printthread.php?tid=2736"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chronicles of Eternia
              </a>
            </li>
            <li>
              Mystical Books -{" "}
              <a
                href="https://thetrevisan.itch.io/free-elementalbooks"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Trevisan Collection
              </a>
            </li>
            <li>
              Bounty Board -{" "}
              <a
                href="https://www.patreon.com/posts/cloister-of-eggs-85222490?l=fr"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cloister Collection
              </a>
            </li>
          </ul>

          <h3>Interface Enchantments</h3>
          <ul>
            <li>Wizard Loading Animation - Crafted by Guilmain Dorian</li>
            <li>
              Magical Cursor -{" "}
              <a
                href="https://codepen.io/mustafauncuoglu/details/vYwjzqW"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mustafa Uncuoglu
              </a>
            </li>
          </ul>

          <div className="credits-note">
            <p>
              Special thanks to all the talented artisans whose works have
              helped bring this magical portfolio to life.
            </p>
          </div>
        </div>
      </div>
    </GuildArea>
  );
}

export default Credits;
