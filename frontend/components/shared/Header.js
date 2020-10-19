import { useState } from "react"
import Link from 'next/link';

const Header = () => {
  //UI/UX
  const [toggle, setToggle] = useState("")
  const onToggle = () => {
    setToggle(toggle => toggle == "responsive" ? toggle = "" : toggle = "responsive")
  }
  return (
    <div className="header" id="myLinks">
      <Link href='/'>
        <a className="logo">Juragan Kuota</a>
      </Link>
      <a className="icon" onClick={() => onToggle()}>
        <i className="fa fa-bars"></i>
      </a>
      <div className={`header-right ${toggle} `}>
        <Link href='/'>
          <a >Home</a>
        </Link>
        <a href="#contact">Contact</a>
        <Link href='/orders'>
          <a>Orderan</a>
        </Link>
      </div>
    </div>
  )
}

export default Header;