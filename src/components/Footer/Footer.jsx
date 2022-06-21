import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer.scss'
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div className="title">Contact Us</div>
                <div className="iconGroup">
                    <FontAwesomeIcon icon={faFacebookF} className="icon" />
                    <FontAwesomeIcon icon={faTwitter} className="icon" />
                    <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
                    <FontAwesomeIcon icon={faInstagram} className="icon" />
                </div>
            </div>

            <div className="bottom">
                <div className="title">Enter Email Address to Subscribe</div>
                <div className="form">
                    <input type="text" placeholder='Email' />
                    <button>Send</button>
                </div>
            </div>

            <p>2022 &copy; MKK</p>
        </div>
    );
}

export default Footer;