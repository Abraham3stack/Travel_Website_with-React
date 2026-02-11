import { Link, useLocation } from "react-router-dom";

function Navbar() {
  return (
    <header className="header">
      <h2 className="logo">ExploreWorld</h2>
      
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/destination">Destination</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul> 
    </header>
  );
}

export function Whoops404() {
  const location = useLocation();
  return (
    <div className="whoops">
      <h1>Whoops! Page Not Found at...{location.pathname}</h1>
    </div>
  );
}

export default Navbar;