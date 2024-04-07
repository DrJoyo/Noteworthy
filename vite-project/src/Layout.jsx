import { Outlet, Link } from "react-router-dom";
import Button from "./Button"
import logo from './noteworthy-logo.png'

const Layout = () => {
  const logoStyle = {
    position:'absolute',
    left: '50px',
    top: '50px',
    borderRadius: '50%'
  }
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img src={logo} style={logoStyle}/>
            </Link>
            <Link to="/about">
              <Button text="About Us" top='80px' right='33%'></Button>
            </Link>
            <Link to="/videos">
              <Button text="Videos" top='80px' right='20%'></Button>
            </Link>
            <Link to="/members">
              <Button text="Members" top='80px' right='7%'></Button>
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;