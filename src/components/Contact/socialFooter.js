import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faSlack,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

function SocialFooter() {
  return (
    <footer>
      <h1>Find me on these platforms:</h1>
      <div className="center">
        <a
          href="https://www.linkedin.com/in/w-r"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} title="My LinkedIn" className="social-icons" />
        </a>
        <a
          href="https://github.com/Will-Riffe"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} title="My GitHub" className="social-icons" />
        </a>
        <a
          href="https://contactmeworld.slack.com/team/U05S2NVQ8BC"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faSlack} title="My Slack" className="social-icons" />
        </a>
        <a
          href="https://www.discordapp.com/users/444634944598441987"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faDiscord} title="My Discord" className="social-icons" />
        </a>
      </div>
    </footer>
  );
}

export default SocialFooter;
