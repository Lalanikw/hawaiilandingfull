import youtube from "./youtube.png";
import insta from "./instagram.png";
import facebook from "./facebook.png";
import './footer.css';
import {SocialIcon} from 'react-social-icons'

const Footer = () => {
  return (
    
    <div className="footer-section">
         <div> </div>
          <div className="footer-logo">
            <div className='grid-col-1'>
                <h2 className="text-xl font-semibold mb-4 text-green-400">Follow Us</h2>
                <ul className="flex gap-4 text-center">
                  <li>
              <SocialIcon target="_blank" url="https://www.youtube.com/@farawesomeworld" />
            </li>
            <li>
              <SocialIcon target="_blank" url="https://www.instagram.com/far_awesome_world?igsh=bDRkY3pzNzBubzg3&utm_source=qr" />
            </li>
            {/* <li>
              <SocialIcon target="_blank" url="https://www.instagram.com/far_awesome_world?igsh=bDRkY3pzNzBubzg3&utm_source=qr" />
            </li> */}
                </ul>
              </div>
          </div>
            <div className="text-green-400 text-2xl font-semibold ">
              <p> @ Hawaii-Landing 2024. All rights reserved.
              </p>
            </div>
      </div>
  )
  };

export default Footer;