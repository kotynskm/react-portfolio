import { pageLinks } from "../data";

const Navbar = () => {
  return (
    <div className="nav-container sticky">
      <ul className="nav-links">
        {pageLinks.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.href}>{link.text}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Navbar;
