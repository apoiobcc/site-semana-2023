import Panel from "./Panel";
import { useEffect, useState } from "react";

export default function Accordion (props) {
    const [visiblePanel, setVisiblePanel] = useState(0);
    const changeVisiblePanel = (panelIndex) => {
        if(panelIndex == visiblePanel) setVisiblePanel(5);
        else setVisiblePanel(panelIndex);
    }
    const sections = props.cronograma.map((item, index) => (
        <Panel dia={index} conteudo={item} handleClick={changeVisiblePanel} visPan={visiblePanel} key={index}/>
    ));
    return (
        <div className="Accordion__container">
            {sections}
        </div>
    )
}