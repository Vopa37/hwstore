import React from "react";
import { FooterStyled } from "./styled";

const Footer = () => {
  return (
    <FooterStyled>
      <footer className="text-white py-7 " data-navbar="smart">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-12 col-md-4 text-center text-md-left">
              <small>© ProRocketeers 2020</small>
            </div>

            <div className="col-12 col-md-4 text-center text-md-right mt-5 mt-md-0">
              <div className="social social-bg-dark">
                <a
                  className="social-facebook"
                  href="https://www.facebook.com/ProRocketeers/"
                  aria-label="Sledujte nás na Facebooku"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-facebook" />
                </a>
                <a
                  className="social-twitter"
                  href="https://twitter.com/PRocketeers"
                  aria-label="Sledujte nás na Twitteru"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-twitter" />
                </a>
                <a
                  className="social-youtube"
                  href="https://www.youtube.com/channel/UCQ8qUXt2mzHODM4J3bbJnuQ"
                  aria-label="Sledujte nás na Youtubu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-youtube" />
                </a>
                <a
                  className="social-linkedin"
                  href="https://www.linkedin.com/company/prorocketeers/"
                  aria-label="Sledujte nás na Linkedinu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin" />
                </a>
                <a
                  className="social-instagram"
                  href="https://www.instagram.com/prorocketeers"
                  aria-label="Sledujte nás na Instagramu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-instagram" />
                </a>
                <a
                  className="social-gitlab"
                  href="https://gitlab.com/prorocketeers"
                  aria-label="Sledujte nás na Gitlabu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-gitlab" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </FooterStyled>
  );
};

export default Footer;
