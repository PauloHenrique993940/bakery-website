import '../styles/Footer.css';
import Logo from '../assets/modrinho.png';
import Facebook  from '../assets/social/face.png';
import Pinterest from '../assets/social/pinterest.png';
import Whatshap from '../assets/social/whatshap.png';
import Insta from '../assets/social/instagran.png';


const Footer = () => {
  return (
    <footer className="footer">
      {/* Topo */}
      <div className="footer-top">
        <div className="footer-logo">
          <img src={Logo} alt="Logo" />
        </div>

        <div className="footer-social">
          <h4>Follow us</h4>
          <ul>
            <li>
              <a href="#">
                <a href="">
                  <img src={Facebook} alt="Logo Facebook" />
                </a>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={Pinterest} alt="Logo Pinterest" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={Whatshap} alt="Logo Whatshap" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={Insta} alt="logo Instagran" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="footer-content">
        <div>
          <h3>About Us</h3>
          <p className="paragrafo">(456) 789-12301</p>
          <p className="paragrafo">info@modrino.co.uk</p>
          <p className="paragrafo">South 13th street</p>
          <p className="paragrafo">New york America</p>
        </div>

        <div className='fotter-li'>
          <h3>Explore</h3>
          <ul>
            <li>Home</li>
            <li>Blog</li>
            <li>Contact us</li>
            <li>Services</li>
          </ul>
        </div>

        <div>
          <h3>Recent News</h3>
          <p className='paragrafo'>Puff pastry bliss.</p>
          <p className='paragrafo'>Puff pastry bliss.</p>
        </div>
      </div>

      {/* Rodapé */}
      <div className="footer-bottom">
        <p>© 2024 Bake House. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
