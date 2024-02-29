import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import contactImg from "../../assets/contact.png";
import imgMenu from "../../assets/menu.png"

// as navbar is only at 80% of out screen
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  //in this there is 3 component: logo + seciton-navigation + contact_me
  return (
    <nav className="Navbar">
      <Link activeClass="active" to ='intro' spy={true} smooth={true} offset={-100} diuration={500} className="text">
      
      </Link>
      <p className="logotext">श्याम</p>
      

      <div className="desktopMenu">
        <Link activeClass="active" to ='intro' spy={true} smooth={true} offset={-50} diuration={500} className="deskMenuListItem">Home</Link>
        <Link activeClass="active" to ='about' spy={true} smooth={true} offset={-50} diuration={500} className="deskMenuListItem">About</Link>
        <Link activeClass="active" to ='Projects' spy={true} smooth={true} offset={-50} diuration={500} className="deskMenuListItem">Projects</Link>
        <Link activeClass="active" to ='contactPage' spy={true} smooth={true} offset={-100} diuration={500} className="deskMenuListItem">Skills</Link>
      </div>

      <button className="desktopMenuButton" onClick={()=>{
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'})}
      }>
          
        <img src={contactImg} alt="" className="desktopmenuImg" />
        contact me
      </button>

      <img src={imgMenu} alt="Menu" className="MobMenu" onClick={()=>setShowMenu(!showMenu)} />
      
      <div className="navMenu" style={{display: showMenu ? 'flex' : 'none'}}>
        <Link activeClass="active" to ='intro' spy={true} smooth={true} offset={-100} diuration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
        <Link activeClass="active" to ='about' spy={true} smooth={true} offset={-50} diuration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
        <Link activeClass="active" to ='Projects' spy={true} smooth={true} offset={-50} diuration={500} className="listItem" onClick={()=>setShowMenu(false)}>Projects</Link>
        <Link activeClass="active" to ='contactPage' spy={true} smooth={true} offset={-50} diuration={500} className="listItem" onClick={()=>setShowMenu(false)}>Skills</Link>
        <Link activeClass="active" to ='contact' spy={true} smooth={true} offset={-100} diuration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
