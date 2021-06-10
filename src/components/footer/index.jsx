import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import { IoMdPaperPlane } from "react-icons/io";

import * as S from "./Footer";

export default function Footer() {
  return (
    <S.FooterSection>
      <S.FooterContainer>
        <S.FooterCol>
          <h3>Extras</h3>
          <a href="#">Brands</a>
          <a href="#">Gift Certificates</a>
          <a href="#">Affiliate</a>
          <a href="#">Specials</a>
          <a href="#">Site Map</a>
        </S.FooterCol>
        <S.FooterCol>
          <h3>INFORMATION</h3>
          <a href="#">About Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Contact Us</a>
          <a href="#">Site Map</a>
        </S.FooterCol>
        <S.FooterCol>
          <h3>MY ACCOUNT</h3>
          <a href="#">Order History</a>
          <a href="#">Wishlist</a>
          <a href="#">Newsletter</a>
          <a href="#">Returns</a>
        </S.FooterCol>
        <S.FooterCol>
          <h3>CONTACT US</h3>
          <p>
            <span>
              <FiMapPin />
            </span>
            42 Dream House, Dreammy street, 7131 Dreamville, USA
          </p>
          <p>
            <span>
              <FiMail />
            </span>
            company@gmail.com
          </p>
          <p>
            <span>
              <FiPhone />
            </span>
            456-456-4512
          </p>
          <p>
            <span>
              <IoMdPaperPlane />
            </span>
            Dream City, USA
          </p>
        </S.FooterCol>
      </S.FooterContainer>
    </S.FooterSection>
  );
}
