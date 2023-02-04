import "./Menu.css";
import contactBookmark from "../../icons/contactBookmark.svg";
import facebook from "../../icons/facebook.svg";
import twitter from "../../icons/twitter.svg";
import close from "../../icons/close.svg";
const Menu = (props) => {
  return (
    <div className="menuBox">
      <div className="menuHeaderPart">
        <div className="menuBookmarkPart">
          <img src={contactBookmark} className="menuBookmarkIcon" />
          <h2 className="menuBookmarkText">BOOKMARK</h2>
        </div>
        <img className="closeIcon" src={close} onClick={props.showMenuClick} />
      </div>
      <div className="menuList">
        <div className="menuNormalTextBox">
          <div className="menuLine"></div>
          <p className="menuNormalText">FEATURES</p>
          <div className="menuLine"></div>
          <p className="menuNormalText">PRICING</p>
          <div className="menuLine"></div>
          <p className="menuNormalText">CONTACT</p>
          <div className="menuLine"></div>
        </div>
      </div>
      <button className="menuLogin">LOGIN</button>
      <div className="menuSocNetworks">
        <img src={facebook} className="menuSocNetIcons" />
        <img src={twitter} className="menuSocNetIcons" />
      </div>
    </div>
  );
};

export default Menu;
