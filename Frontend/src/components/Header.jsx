const Header = () => {
  return (

  <header id="header" className=" header dark-background d-flex flex-column">
    <i className="header-toggle d-xl-none bi bi-list"></i>
<div className="profile-img">
  <img 
    src="assets/img/profile.jpg" 
    alt="Profile" 
    className="img-fluid rounded-circle h-full w-full "
  />
</div>

    <div className="logo d-flex align-items-center justify-content-center">
      <h1 className="sitename">Aditya Kushwaha</h1>
    </div>
    <div className="social-links text-center">
     <a href="https://x.com/adityak9477?t=gIOoyEF2rhUK2SZGsPjiAA&s=09" className="twitter"><i className="bi bi-twitter-x"></i></a>
      <a href="https://www.facebook.com/share/18YgJ5BnNy/" className="facebook"><i className="bi bi-facebook"></i></a>
      <a href="https://www.instagram.com/_aadi.kushwaha_?igsh=MWRpZnptcGlqbXl3ZQ==" className="instagram"><i
          className="bi bi-instagram"></i></a>
      <a href="http://www.github.com/aadikushwaha" className="google-plus"><i className="bi bi-github"></i></a>
      <a href="http://www.linkedin.com/in/aditya-kushwaha-77261b1b7"
        className="linkedin"><i className="bi bi-linkedin"></i></a></div>

    <nav id="navmenu" className="navmenu">
      <ul>
        <li><a href="#hero" className="active"><i className="bi bi-house navicon"></i>Home</a></li>
        <li><a href="#about"><i className="bi bi-person navicon"></i> About</a></li>
        <li><a href="#resume"><i className="bi bi-file-earmark-text navicon"></i> Resume</a></li>
        <li><a href="#portfolio"><i className="bi bi-images navicon"></i> Projects</a></li>
        <li><a href="#services"><i className="bi bi-hdd-stack navicon"></i> Services</a></li>
        <li><a href="#contact"><i className="bi bi-envelope navicon"></i> Contact</a></li>
      </ul>
    </nav>

  </header>

    )
};
export default Header;
