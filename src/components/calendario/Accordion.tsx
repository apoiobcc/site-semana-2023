import Panel from "./Panel";

export default function Accordion (props) {
    const sections = props.cronograma.map((item, index) => (
        <Panel dia={index} conteudo={item} key={index}/>
    ))
    return (
        <div className="Accordion__container">
            {sections}
        </div>
    )
}