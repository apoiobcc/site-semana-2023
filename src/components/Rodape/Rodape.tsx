import Apoio from "./Apoio/Apoio";
import Colaboradores from "./Colaboradores/Colaboradores";

export default function () {
    return (
        <div className="Rodape__container">
            <Colaboradores></Colaboradores>
            <Apoio></Apoio>
        </div>
    )
}