import "./Main.css";
import bookmarkedicon from "../icons/bookmarkedicon.svg";
import menuicon from "../icons/menuicon.svg";
import monitor from "../icons/monitor.svg";
import monitor2 from "../icons/monitor2.svg";
import chrome from "../icons/chrome.svg";
import line from "../icons/line.svg";
import opera from "../icons/opera.svg";
import firefox from "../icons/firefox.svg";
import arrowBellow from "../icons/arrowBellow.svg";
import contactBookmark from "../icons/contactBookmark.svg";
import facebook from "../icons/facebook.svg";
import twitter from "../icons/twitter.svg";
import { useState } from "react";
import Menu from "../Main/Menu/Menu";
import speedysearching from "../icons/speedysearching.svg";
import easysharing from "../icons/easysharing.svg";
import arrowup from "../icons/arrowup.svg";
import { useRef } from "react";
import { useEffect } from "react";
import error from "../icons/error.svg";
const Main = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showBookmarking, setShowBookmarking] = useState(true);
  const [showwSearch, setShowSearch] = useState(false);
  const [showwSharing, setShowsharing] = useState(false);
  const [validEmail, setValidEmail] = useState(false);

  const [transition, setTransition] = useState({
    transform: "scale(1)",
    transition: "background-color 0.5s ease",
  });

  const changeToBookmarking = () => {
    setShowBookmarking(true);
    setShowSearch(false);
    setShowsharing(false);
    setTransition({
      transform: "scale(1.2)",
      transition: "background-color 1.5s ease",
    });
  };

  const changeToSpeedy = () => {
    setShowBookmarking(false);
    setShowSearch(true);
    setShowsharing(false);
    setTransition({
      transform: "scale(1.2)",
      transition: "background-color 1.5s ease",
    });
  };

  const changeToSharing = () => {
    setShowBookmarking(false);
    setShowSearch(false);
    setShowsharing(true);
    setTransition({
      transform: "scale(1.2)",
      transition: "background-color 1.5s ease",
    });
  };

  const [rotateArrow, setrotateArrow] = useState(true);
  const [isRotated, setIsRotated] = useState([true, true]);

  const arrowRorateClick = (index) => {
    setrotateArrow(index);
    const newIsRotated = [...isRotated];
    newIsRotated[index] = !newIsRotated[index];
    setIsRotated(newIsRotated);
  };

  const showMenuClick = () => {
    return setShowMenu(!showMenu);
  };
  const [isEmailValid, setIsEmailValid] = useState(false);
  const emailInput = useRef(null);

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const mailValidateClick = () => {
    const email = emailInput.current.value;
    setIsEmailValid(validateEmail(email));
    if (email.length > 0 && isEmailValid) {
      setValidEmail(false);
    } else {
      setValidEmail(true);
    }
  };

  return (
    <>
      {!showMenu ? (
        <div className="mainContainer">
          <div className="headerBox">
            <div className="bookmarkIconTextWrap">
              <img className="bookMarkIcon" src={bookmarkedicon} />
              <h2 className="bookMarkText">BOOKMARK</h2>
            </div>
            <img
              className="menuOptionIcon"
              src={menuicon}
              onClick={showMenuClick}
            />
          </div>

          <div className="monitorImageBox">
            <img className="monitor1" src={monitor} />
          </div>
          <div className="browserBox">
            <h1 className="browserBoxHeaderText">A Simple Bookmark Manager</h1>
            <p className="browserBoxNormalText">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
            <div className="browserBoxButtonBox">
              <button className="chromeButton">Get it on Chrome</button>
              <button className="firefoxButton">Get it on Firefox</button>
            </div>
          </div>
          <div className="featureBox">
            <h1 className="featureHeadingText">Features</h1>
            <p className="featureNormalText">
              Our aim is to make it quick and easy for you to access your
              favourite websites. Your bookmarks sync between your devices so
              you can access them on the go.
            </p>
          </div>
          <div className="threeOptionBox">
            <div className="line"></div>
            <h2 className="optionText" onClick={changeToBookmarking}>
              Simple Bookmarking
            </h2>
            <div className="line"></div>
            <h2 className="optionText2" onClick={changeToSpeedy}>
              Speedy Searching
            </h2>
            <div className="line"></div>
            <h2 className="optionText3" onClick={changeToSharing}>
              Easy Sharing
            </h2>
            <div className="line"></div>
          </div>
          <div className="monitorImageBox2">
            {showBookmarking && (
              <img className="monitor2" src={monitor2} style={transition} />
            )}
            {showwSearch && (
              <img
                className="monitor2"
                src={speedysearching}
                style={transition}
              />
            )}
            {showwSharing && (
              <img className="monitor2" src={easysharing} style={transition} />
            )}
            <div className="monitorBox2TextBox">
              <h1 className="box2HeaderText">Bookmark in one click</h1>
              <p className="box2NormalText">
                Organize your bookmarks however you like. Our simple
                drag-and-drop interface gives you complete control over how you
                manage your favourite sites.
              </p>
              <button className="box2MoreInfo">More Info</button>
            </div>
          </div>
          <div className="downloadExtentionBox">
            <h1 className="headerText">Download the extension</h1>
            <p className="normalText">
              We’ve got more browsers in the pipeline. Please do let us know if
              you’ve got a favourite you’d like us to prioritize.
            </p>
          </div>
          <div className="chromeBrowserBox">
            <img className="chromeIcon" src={chrome} />
            <div className="browserTextBox">
              <h1 className="browserHeaderText">Add to Chrome</h1>
              <a className="browserNormalText">Minimum version 62</a>
            </div>
            <img src={line} className="browserLine" />
            <button className="browserButton">Add & Install Extension</button>
          </div>
          <div className="chromeBrowserBox">
            <img className="chromeIcon" src={firefox} />
            <div className="browserTextBox">
              <h1 className="browserHeaderText">Add to Firefox</h1>
              <a className="browserNormalText">Minimum version 55</a>
            </div>
            <img src={line} className="browserLine" />
            <button className="browserButton">Add & Install Extension</button>
          </div>
          <div className="chromeBrowserBox">
            <img className="chromeIcon" src={opera} />
            <div className="browserTextBox">
              <h1 className="browserHeaderText">Add to Opera</h1>
              <a className="browserNormalText">Minimum version 46</a>
            </div>
            <img src={line} className="browserLine" />
            <button className="browserButton">Add & Install Extension</button>
          </div>
          <div className="faq">
            <div className="faqHeaderTextBox">
              <h1 className="faqHeaderText">Frequently Asked Questions</h1>
              <p className="faqNormalText">
                Here are some of our FAQs. If you have any other questions you’d
                like answered please feel free to email us.
              </p>
            </div>
            <div className="faqListBox">
              <div className="questionAndAnswerBox">
                <div className="questionBox">
                  <p className="questionText">What is Boorkmark</p>
                  {isRotated[0] ? (
                    <img
                      className="arrowDown"
                      src={arrowBellow}
                      onClick={() => arrowRorateClick(0)}
                    />
                  ) : (
                    <img
                      className="arrowDown"
                      src={arrowup}
                      onClick={() => arrowRorateClick(0)}
                    />
                  )}

                  {isRotated[0] && (
                    <p
                      className="answerText"
                      style={{
                        transition: "all 0.3s ease-out",
                      }}
                    >
                      Vivamus luctus eros aliquet convallis ultricies. Mauris
                      augue massa, ultricies non ligula. Suspendisse imperdiet.
                      Vivamus luctus eros aliquet convallis ultricies. Mauris
                      augue massa, ultricies non ligula. Suspendisse imperdie
                      tVivamus luctus eros aliquet convallis ultricies. Mauris
                      augue massa, ultricies non ligula. Suspendisse imperdiet.
                    </p>
                  )}
                </div>
              </div>
              <div className="faqLine"></div>
              <div className="questionAndAnswerBox">
                <div className="questionBox">
                  <p className="questionText">
                    How can I request a new browser?
                  </p>
                  {isRotated[1] ? (
                    <img
                      className="arrowDown"
                      src={arrowBellow}
                      onClick={() => arrowRorateClick(1)}
                    />
                  ) : (
                    <img
                      className="arrowDown"
                      src={arrowup}
                      onClick={() => arrowRorateClick(1)}
                    />
                  )}

                  {isRotated[1] && (
                    <p
                      className="answerText"
                      style={{
                        transition: "all 0.3s ease-out",
                      }}
                    >
                      Vivamus luctus eros aliquet convallis ultricies. Mauris
                      augue massa, ultricies non ligula. Suspendisse imperdiet.
                      Vivamus luctus eros aliquet convallis ultricies. Mauris
                      augue massa, ultricies non ligula. Suspendisse imperdie
                      tVivamus luctus eros aliquet convallis ultricies. Mauris
                      augue massa, ultricies non ligula. Suspendisse imperdiet.
                    </p>
                  )}
                </div>
              </div>
              <div className="faqLine"></div>
              <button className="moreInfo">More Info</button>
            </div>
          </div>
          <div className="sendEmailBox">
            <h2 className="sendEmailNormalText">35,000+ ALREADY JOINED</h2>
            <h1 className="sendEmailHeaderText">
              Stay up-to-date with what we’re doing
            </h1>
            <div className="wrapEmail">
              <input className="emailInput" type="email" ref={emailInput} />
              {validEmail && (
                <>
                  <img src={error} className="error" />
                  <span class="subscribe__form-error" aria-live="polite">
                    Whoops, make sure it's an email
                  </span>
                </>
              )}
              <button
                className="emailContactUsButton"
                onClick={mailValidateClick}
              >
                Contact Us
              </button>
            </div>
          </div>
          <div className="contactBox">
            <div className="contactList">
              <div className="contactBookmarkPart">
                <img src={contactBookmark} className="contactBookmarkIcon" />
                <h2 className="contactBookmarkText">BOOKMARK</h2>
              </div>
              <div className="contactNormalTextBox">
                <p className="contactNormalText">FEATURES</p>
                <p className="contactNormalText">PRICING</p>
                <p className="contactNormalText">CONTACT</p>
              </div>
              <div className="socNetworks">
                <img src={facebook} className="socNetIcons" />
                <img src={twitter} className="socNetIcons" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Menu showMenuClick={showMenuClick} />
      )}
    </>
  );
};

export default Main;
