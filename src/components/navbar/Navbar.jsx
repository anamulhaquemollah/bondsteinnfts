import "./navbar.css";
import { CiSearch } from "react-icons/ci";
import { MdClose, MdMenu } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="nav default-padding">
      <div className="nav__logo">NAFTERS</div>
      <div className="nav__links">
        <ul>
          <li>
            <a href="#marketplace">Marketplace</a>
          </li>
          <li>
            <a href="#resource">Resource</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </div>
      <div className="nav__search-buttons">
        <div className="search relative">
          <input type="text" placeholder="search" />
          <CiSearch className="absolute top-4 right-4" size={20} />
        </div>
        <button className="upload nav__button">Upload</button>
        <button className="connectWallet nav__button">Connect Wallet</button>
      </div>

      <div className="burger-menu">
        {showMenu ? (
          <MdClose size={40} onClick={() => setShowMenu(false)} />
        ) : (
          <MdMenu size={40} onClick={() => setShowMenu(true)} />
        )}

        {showMenu && (
          <div className="burger__menu-container">
            <ul className="burger__menu-links">
              <li>
                <a href="#mar">Marketplace</a>
              </li>
              <li>
                <a href="#res">Resource</a>
              </li>
              <li>
                <a href="#ab">About</a>
              </li>
            </ul>
            <div className="burger__menu-button">
              <button>Upload</button>
              <button>Connect Wallet</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
