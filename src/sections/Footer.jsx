import BrandLogo from "../component/BrandLogo";
import { social_media, footer_data, currentYear } from "../constants/constants";
import List from "../component/List";
import FooterColumn from "../component/FooterColumn";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row justify-content-between gap-5 gap-md-0">
          {/* Brand & Socials */}
          <div className="col-12 col-md-3">
            <BrandLogo />
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
    </footer>
  );
};

export default Footer;
