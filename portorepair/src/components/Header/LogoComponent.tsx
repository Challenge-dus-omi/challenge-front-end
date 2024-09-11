import logo from '../../assets/logo-portorepair.png';

export default function LogoComponent() {
  return (
    <div className="container-logo">
      <a href="./index.html">
        <picture className="logo-portorepair-header">
          <img src={logo} alt="Logo Porto Repair" />
        </picture>
      </a>
    </div>
  );
};

