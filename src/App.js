import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedinIn,
  faTwitter,
  
} from "@fortawesome/free-brands-svg-icons";

import { faBars } from "@fortawesome/free-solid-svg-icons"
import "./comingpage.scss";
import Logo from "../src/assets/images/logo.png";
import MainImg from "../src/assets/images/coming-pageimg.png";
import MsgIcon from "../src/assets/images/msgicon.png";

function App() {
 
  function dropDown(){
    let drop = document.querySelector('.drop')
    if( drop.style.display == 'flex' ){
      drop.style.display = 'none'
    }
    else{
      drop.style.display = 'flex'
    }
  }

  return (
    <div className="flex box-border">
      <div className="w-9/12 left-side">
        <header className="flex justify-between mt-12 mx-44 headings">

          <div>
            <img src={Logo} alt="abacus logo"></img>
          </div>


          <div className="links flex">
            <nav className="flex justify-end space-x-4 ">
              {[
                ["Home", "/"],
                ["FAQ", "/faq"],
                ["Blog", "/blog"],
              ].map(([title, url]) => (
                <a
                  href={url}
                  //when active class is added to the link, the color of the link changes to red
                  // className="px-3 py-2 text-slate-700 font-medium hover:text-slate-900"
                  className={`${window.location.pathname === url ? " text-pviolet linkStyles " : " px-3 py-2 text-slate-700 font-medium hover:text-slate-900"}`}
                  
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
        <nav className="flex flex-col  items-end space-x-4 mt-5 drop">
              {[
                ["Home", "/"],
                ["FAQ", "/faq"],
                ["Blog", "/blog"],
              ].map(([title, url]) => (
                <a
                  href={url}
                  className={`${window.location.pathname === url ? " text-pviolet linkStyles " : " px-3 py-2 text-slate-700 font-medium hover:text-slate-900"}`}

                  // className="py-2  text-slate-700 font-medium hover:text-slate-900 w-20 "
                >
                  {title}
                </a>
              ))}
            </nav>

        <main className="mx-auto px-52 text-center align-center pt-24 box-border gen-text">
          <p className="text-3xl mb-14 abacu_s">
            <span className="text-5xl font-bold abac">Abacus,</span> the Accounting
            Software to manage your business
          </p>
          <div className="comingimg">
          <img src={MainImg} alt="coming soon" ></img>
          </div>
          <h1 className="m-5 pt-2 leading-snug font-medium text-6xl mb-14 com_ing">
            Be the first to know when we launch
          </h1>
          <p>We'll let you know when we are launching</p>
          <form className="flex mt-5 justify-center">
            <input
              type="text"
              className="form-input px-4 py-2 rounded-xl border-2 mr-10 w-2/4"
              placeholder="Your email"
            />
            <button
              type="submit"
              // className="btn btn-primary px-4 py-2 rounded-xl"
              className="text-white p-2 rounded-xl notify-btn hover:bg-gradient-to-tr from-pviolet to-pblack"

            >
              notify me
              </button>
          </form>
        </main>

        <footer className="ml-40 mt-14 footer">
          <div>
          <h2 className="text-3xl font-bold">Abacus</h2>
          <p className="text-xs">As easy as it gets</p>
          </div>

          <div>
            <FontAwesomeIcon icon={faTwitter} className="mr-6" />
            <FontAwesomeIcon icon={faFacebook} className="mr-6" />
            <FontAwesomeIcon icon={faLinkedinIn} className="mr-6" />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </footer>
      </div>
      <div className="flex flex-col w-3/12 coming-page-right h-screen rounded-l-2xl">
        <div className="relative">
          <div className="absolute top-32 -left-28">
            <img src={MainImg} alt="coming soon" className="w-5/6 h-3/6"></img>
          </div>
        </div>

        <div>
          <div className="absolute bottom-20 right-20 p-3 bg-white rounded-t-full rounded-l-full">
            <img src={MsgIcon} alt="message icon" className="w-5"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
