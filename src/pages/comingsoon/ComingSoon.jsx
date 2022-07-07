import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./comingpage.scss";
import Logo from "../../assets/images/logo.png";
import MainImg from "../../assets/images/coming-pageimg.png";
// import MsgIcon from "../src/assets/images/msgicon.png";
import Mailchimp from "../../components/mailchimp/Mailchimp";

function ComingSoon(props) {
  function dropDown() {
    let drop = document.querySelector(".drop");
    if (drop.style.height === "200px") {
      drop.style.height = "0px";
      document
        .querySelectorAll(".droplink")
        .forEach((item) => (item.style.display = "none"));
    } else {
      drop.style.height = "200px";
      setTimeout(() => {
        document
          .querySelectorAll(".droplink")
          .forEach((item) => (item.style.display = "flex"));
      }, 650);
    }
  }

  return (
    <div className="flex box-border">
      <div className="w-9/12 left-side">
        <header className="flex justify-between mt-12 mx-44 headings">
          <div>
            <a href="/">
              <img src={Logo} alt="abacus logo"></img>
            </a>
          </div>

          <div className="links flex">
            <nav className="flex justify-end space-x-4 ">
              {[
                ["Home", "/"],
                ["FAQ", "signup"],
                ["Blog", "https://abacusafrica.hashnode.dev/"],
              ].map(([title, url]) => (
                <a
                  href={url}
                  //when active class is added to the link, the color of the link changes to red
                  className={`${
                    window.location.pathname === url
                      ? " text-pviolet linkStyles  "
                      : " linkStyles "
                  }`}
                >
                  {title}
                </a>
              ))}
            </nav>
          </div>

          <div className="menu-dropdown" onClick={dropDown}>
            <FontAwesomeIcon icon={faBars} className=" menu-button ml-6" />
          </div>
        </header>

        {/* dropDown Nav */}
        <div className="nav-dropdown">
          <nav className="flex flex-col items-end mt-5 mr-3 drop">
            {[
              ["Home", "/"],
              ["FAQ", "signup"],
              ["Blog", "https://abacusafrica.hashnode.dev/"],
            ].map(([title, url]) => (
              <a
                href={url}
                className={`${
                  window.location.pathname === url
                    ? " text-pviolet linkStyles droplink"
                    : " linkStyles droplink"
                }`}
              >
                {title}
              </a>
            ))}
          </nav>
        </div>

        <main className="px-48 text-center align-center my-24 box-border gen-text">
          <p className="text-3xl mb-10 abacu_s">
            <span className="text-5xl font-bold">Abacus,</span> the Accounting
            Software to manage your business
          </p>
          <div className="comingimg">
            <img src={MainImg} alt="coming soon"></img>
          </div>
          <h1 className="pt-2 leading-snug font-medium text-6xl mb-8 com_ing">
            Coming Soon
          </h1>
          <p className="launch text-lg">Be the first to know when we launch</p>

          <Mailchimp />
        </main>

        <footer className="ml-40 pt-10 footer">
          <div>
            <h2 className="text-3xl font-bold">Abacus</h2>
            <p className="text-xs">As easy as it gets</p>
          </div>

          <div>
            <a href="https://twitter.com/AbacusAfrica" target="blank">
              <FontAwesomeIcon icon={faTwitter} className="mr-6" />
            </a>
            <a
              href="https://www.facebook.com/AbacusAfrica?_rdc=1&_rdr"
              target="blank"
            >
              <FontAwesomeIcon icon={faFacebook} className="mr-6" />
            </a>
            <a
              href="https://www.linkedin.com/company/abacus-africa/"
              target="blank"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="mr-6" />
            </a>
            <a href="https://www.instagram.com/abacusafrica/" target="blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </footer>
      </div>

      <div className="flex flex-col w-3/12 coming-page-right h-screen rounded-l-2xl">
        <div className="relative">
          <div className="absolute top-32 -left-28">
            <img src={MainImg} alt="coming soon" className="w-5/6 h-3/6"></img>
          </div>
        </div>

        {/* <div>
          <div className="absolute bottom-20 right-20 p-3 bg-white rounded-t-full rounded-l-full">
            <a href="/"><img src={MsgIcon} alt="message icon" className="w-5"></img></a>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default ComingSoon;
