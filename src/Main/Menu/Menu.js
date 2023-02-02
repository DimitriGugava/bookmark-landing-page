import "./Menu.css";
import contactBookmark from "../../icons/contactBookmark.svg";
import facebook from "../../icons/facebook.svg";
import twitter from "../../icons/twitter.svg";
import close from "../../icons/close.svg";
const Menu = () => {
  return (
    <div className="menuBox">
      <div className="menuHeaderPart">
        <div className="menuBookmarkPart">
          <img src={contactBookmark} className="menuBookmarkIcon" />
          <h2 className="menuBookmarkText">BOOKMARK</h2>
        </div>
        <img className="closeIcon" src={close} />
      </div>
      <div className="menuList">
        <div className="menuNormalTextBox">
          <p className="menuNormalText">FEATURES</p>
          <p className="menuNormalText">PRICING</p>
          <p className="menuNormalText">CONTACT</p>
        </div>
        <div className="menuSocNetworks">
          <img src={facebook} className="menuSocNetIcons" />
          <img src={twitter} className="menuSocNetIcons" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
