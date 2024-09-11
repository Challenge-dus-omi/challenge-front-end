import BannerServicos from "../../components/Servicos/BannerServicos";
import FAQ from "../../components/Servicos/FAQ";
import LoginForm from "../../components/Servicos/LoginForm";

export default function Servicos(){
    return (
        <main>
            <BannerServicos />
            <LoginForm />
            <FAQ />
        </main>
    )
}