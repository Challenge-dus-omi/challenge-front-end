import BannerServicos from "../../components/Servicos/BannerServicos";
import FAQ from "../../components/Servicos/FAQ";
import ApiResquestImage from "../../components/Servicos/ApiResquestImage";
import DiagnosticFlow from "../../components/Servicos/DiagnosticFlow";

export default function Servicos(){
    return (
        <main>
            <BannerServicos />
            <ApiResquestImage />
            <DiagnosticFlow />
            <FAQ />
        </main>
    )
}