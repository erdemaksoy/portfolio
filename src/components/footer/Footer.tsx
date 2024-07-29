import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__container container">
          <h1 className="footer__title">Erdem Aksoy</h1>
          <ul className="footer__list">
            <li>
              <a href="#about" className="footer__link">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="footer__link">
                Skills
              </a>
            </li>
            <li>
              <a href="#services" className="footer__link">
                Fields
              </a>
            </li>
            <li>
              <a href="#qualification" className="footer__link">
                Qualification
              </a>
            </li>
          </ul>

          <div className="footer__social">
            <a
              href="https://www.instagram.com/erdem0aksoy/"
              className="footer__social-link"
              target="_blank"
            >
              <i className="uil uil-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/erdemaksoyy/"
              className="footer__social-link"
              target="_blank"
            >
              <i className="uil uil-linkedin"></i>
            </a>
            <a
              href="https://github.com/erdemaksoy"
              className="footer__social-link"
              target="_blank"
            >
              <i className="uil uil-github-alt"></i>
            </a>
          </div>

          <span className="footer__copy">
            &#169; Erdem Aksoy. All rights reserved
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
