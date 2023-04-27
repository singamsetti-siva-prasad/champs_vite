import { HashLink } from "react-router-hash-link";
import "./navbar.css";
import Onramper from "../onramper/Onramper";
import ConnectButton from "../connectButton/Connectbutton";
// import { Web3Button } from "@web3modal/react";
// import Connect from "../connectButton/Connectbutton";
export default function Navbar() {
  return (
    <>
      <div>
        <nav id="menu">
          <input type="checkbox" id="responsive-menu" />
          <label></label>
          <div className="sl-container">
            <HashLink smooth to="/#home">
              <img className="sl-logo" src="/logo.png" alt="" />
            </HashLink>
          </div>
          <ul>
            <li>
              {" "}
              <ConnectButton />
            </li>
            <li>
              <Onramper />
            </li>

            <li>
              <a
                href="http://enteraltspace.com/"
                target="_blank"
                className="link"
                rel="noreferrer"
              >
                Company
              </a>
            </li>

            <li>
              <HashLink smooth to="/#faq" className="link">
                FAQ
              </HashLink>{" "}
            </li>
            <li>
              <HashLink smooth to="/#team" className="link">
                Team
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#about" className="link">
                About
              </HashLink>{" "}
            </li>
            <li>
              <HashLink smooth to="/#home" className="link">
                Home
              </HashLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
