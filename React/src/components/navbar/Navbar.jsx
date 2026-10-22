import PrimaryButton from '../button/PrimaryButton.jsx';

export default function Navbar() {
  return (
    <>
<nav className="navbar">
<a href="#" className="logo">
<span className="logo-mark">A</span>
        Aivora
    </a>
<div className="nav-links">
<span className="nav-indicator" />
<label>
<input type="radio" name="nav" defaultChecked={true} />
            Features
        </label>
<label>
<input type="radio" name="nav" />
            Pricing
        </label>
<label>
<input type="radio" name="nav" />
            Blog
        </label>
<label>
<input type="radio" name="nav" />
            Contact
        </label>
</div>
<div className="nav-actions">
<button className="login-btn">
            Sign in
        </button>
<div id="navbar-button"><PrimaryButton /></div>
</div>
</nav>
    </>
  );
}
