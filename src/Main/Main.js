import "./Main.css";
import bookmarkedicon from "../icons/bookmarkedicon.svg";
import menuicon from "../icons/menuicon.svg";
import monitor from "../icons/monitor.svg";
import monitor2 from "../icons/monitor2.svg";
const Main = () => {
  return (
    <div className="mainContainer">
      <div className="headerBox">
        <div className="bookmarkIconTextWrap">
          <img className="bookMarkIcon" src={bookmarkedicon} />
          <h2 className="bookMarkText">BOOKMARK</h2>
        </div>
        <img className="menuOptionIcon" src={menuicon} />
      </div>
      <div className="monitorImageBox">
        <img className="monitor" src={monitor} />
      </div>
      <div className="browserBox">
        <h1 className="browserHeaderText">A Simple Bookmark Manager</h1>
        <p className="browserNormalText">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="browserButtonBox">
          <button className="chromeButton">Get it on Chrome</button>
          <button className="firefoxButton">Get it on Firefox</button>
        </div>
      </div>
      <div className="featureBox">
        <h1 className="featureHeadingText">Features</h1>
        <p className="featureNormalText">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
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
      </div>
    </div>
  );
};

export default Main;
