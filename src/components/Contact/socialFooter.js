import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faSlack,
  faDiscord
} from "@fortawesome/free-brands-svg-icons";

function SocialFooter() {
  return (
    <footer>
      <h1>Find me on these platforms:</h1>
      <div>
        <FontAwesomeIcon
          icon={faLinkedin}
          style={{ color: "#d59901", height: "5em" }}
        />
        <FontAwesomeIcon
          icon={faGithub}
          style={{ color: "#d59901", height: "5em" }}
        />
        <FontAwesomeIcon
          icon={faSlack}
          style={{ color: "#d59901", height: "5em" }}
        />
        <FontAwesomeIcon
          icon={faDiscord}
          style={{ color: "#d59901", height: "5em"  }}
        />
      </div>
    </footer>
  );
}

export default SocialFooter;
