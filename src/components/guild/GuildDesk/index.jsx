// src/components/guild/GuildDesk/index.jsx
import { motion } from "framer-motion";
import "./styles.css";

function GuildDesk() {
  return (
    <div className="desk">
      {/* Possibly a div for desk-top, desk-info, etc. */}
      <div className="desk-top" />
      <div className="desk-info">
        Some Desk Content
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
          dolorem rem provident quo dolores hic asperiores, quibusdam error
          nulla amet est veniam cum, fugiat numquam voluptate inventore quidem
          facere tempora?
        </p>
      </div>
    </div>
  );
}
export default GuildDesk;
