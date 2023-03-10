
import "./navbar.css"; 
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
   <nav className='nav default-padding'>
    <div className="nav__logo">NAFTERS</div>
    <div className="nav__links">
        <ul>
            <li><a href="#">Marketplace</a></li>
            <li><a href="#">Resource</a></li>
            <li><a href="#">About</a></li>
        </ul>
    </div>
    <div className="nav__search-buttons">
        <div className="search relative">
            <input type="text" placeholder='search'/>
            <CiSearch className="absolute top-4 right-4" size={20}/>
        </div>
        <button className='upload'>Upload</button>
        <button className='connectWallet'>Connect Wallet</button>
    </div>
   </nav>
  )
}
export default Navbar