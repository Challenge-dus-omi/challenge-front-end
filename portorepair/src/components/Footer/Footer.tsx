import logoPorto from '../../assets/logo-porto2.png';
import logoPortoRepair from '../../assets/logo-portorepair.png';
import logoPortoRepairIA from '../../assets/logo-portorepairia.png';

export default function Footer() {
  return (
    <footer>
      <nav>
        <ul>
          <li id="footer-porto">
            <picture>
            <img src={logoPorto} alt="Logo da porto" />
            </picture>
          </li>
          <li id="footer-portorepair">
            <picture>
            <img src={logoPortoRepair} alt="Logo da porto repair" />
            </picture>
          </li>
          <li id="footer-portorepairia">
            <picture>
            <img src={logoPortoRepairIA} alt="Logo porto repair ia" />
            </picture>
          </li>
        </ul>
      </nav>
    </footer>
  );
};