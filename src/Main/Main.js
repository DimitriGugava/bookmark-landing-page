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
const Main = () => {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuClick = () => {
    return setShowMenu(!showMenu);
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
            <img className="monitor" src={monitor} />
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
            <h2 className="optionText">Simple Bookmarking</h2>
            <div className="line"></div>
            <h2 className="optionText2">Speedy Searching</h2>
            <div className="line"></div>
            <h2 className="optionText3">Easy Sharing</h2>
            <div className="line"></div>
          </div>
          <div className="monitorImageBox2">
            <img className="monitor2" src={monitor2} />
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
                  <img className="arrowDown" src={arrowBellow} />
                </div>
                <p className="answerText">
                  Vivamus luctus eros aliquet convallis ultricies. Mauris augue
                  massa, ultricies non ligula. Suspendisse imperdiet. Vivamus
                  luctus eros aliquet convallis ultricies. Mauris augue massa,
                  ultricies non ligula. Suspendisse imperdie tVivamus luctus
                  eros aliquet convallis ultricies. Mauris augue massa,
                  ultricies non ligula. Suspendisse imperdiet.
                </p>
              </div>
              <div className="faqLine"></div>
              <div className="questionAndAnswerBox">
                <div className="questionBox">
                  <p className="questionText">
                    How can I request a new browser?
                  </p>
                  <img className="arrowDown" src={arrowBellow} />
                </div>
                <p className="answerText">
                  Vivamus luctus eros aliquet convallis ultricies. Mauris augue
                  massa, ultricies non ligula. Suspendisse imperdiet. Vivamus
                  luctus eros aliquet convallis ultricies. Mauris augue massa,
                  ultricies non ligula. Suspendisse imperdie tVivamus luctus
                  eros aliquet convallis ultricies. Mauris augue massa,
                  ultricies non ligula. Suspendisse imperdiet.
                </p>
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
            <input className="emailInput" type="email" />
            <button className="emailContactUsButton">Contact Us</button>
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
        <Menu />
      )}
    </>
  );
};

export default Main;
