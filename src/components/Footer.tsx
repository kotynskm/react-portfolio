import { socialLinks } from "../data";

const Footer = () => {
  return (
    <div className="nav-container footer">
      <ul className="nav-links">
        {socialLinks.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.href} target="_blank" rel="noreferrer">
                <i className={link.icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Footer;
