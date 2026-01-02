import BrandLogo from "../component/BrandLogo";
import { social_media, footer_data } from "../constants/constants";
import List from "../component/List";
import FooterColumn from "../component/FooterColumn";

const currentYear = new Date().getFullYear();
const Footer = () => {
  return (
    <section id="footer">
      <div className="container">
        <div className="row justify-content-between gap-5 gap-md-0">
          {/* Brand & Socials */}
          <div className="col-12 col-md-3">
            <BrandLogo />
            {/* <ul className="d-flex align-items-center gap-3 social-list">
                {social_media.map(({ id, link, Icon }) => (
                  <li key={id}>
                    <a href={link}>
                      <Icon width={32} height={32} />
                    </a>
                  </li>
                ))}
              </ul> */}
            <List
              items={social_media}
              className="d-flex align-items-center gap-3 social-list"
              renderItem={(media) => {
                return (
                  <a href={media.link} aria-label={media.id}>
                    <media.Icon width={32} height={32} />
                  </a>
                );
              }}
            />
          </div>
          {/* <div className="col-12 col-md-3">
            <div className="col-wrapper">
              <h6 className="footer-title">Quick Links</h6>
              <ul className="footer-list">
                <li className="mb-2">Blog</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="col-wrapper">
              <h6 className="footer-title">Contact Us</h6>
              <ul className="footer-list">
                <li className="mb-2">
                  <a className="text-white" href="mailto:contact@email.com">
                    contact@email.com
                  </a>
                </li>
                <li>
                  <a className="text-white" href="tel:+19999999999">
                    +1 999 999 999
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
          {/* Dynamic Columns */}
          <FooterColumn
            title="Quick Links"
            items={footer_data.quickLinks}
            renderItem={(item) => (
              <a href={item.href} className="text-white">
                {item.label}
              </a>
            )}
          />
          <FooterColumn
            title="Contact Us"
            items={footer_data.contacts}
            renderItem={(item) => (
              <a href={item.href} className="text-white">
                {item.label}
              </a>
            )}
          />
        </div>
        <div className="row">
          <div className="col-12">
            <div className="col-wrapper copyright">
              <p>
                &copy; {currentYear} Niyati Patel. UI reference from GTCoding
                (Figma).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
