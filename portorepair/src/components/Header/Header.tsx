import LoginButtonComponent from "./LoginButtonComponent";
import LogoComponent from "./LogoComponent";
import MenuComponent from "./MenuComponent";

export default function Header() {
    return(
        <header>
            <LogoComponent />
            <MenuComponent />
            <LoginButtonComponent />
        </header>
    )
}