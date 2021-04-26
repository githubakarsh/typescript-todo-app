
import { FunctionComponent } from 'react';
import './namesection.scss';
import InputComponent from '../InputComponent';


const ChsInput : 
    FunctionComponent<{onClick : Function, 
                    title: string,
                    id : string, 
                    placeholder?: string}> = ({
                        title,
                        placeholder,
                        onClick,
                        id
                    }) => {
    return <section className="name-section-main">
        <article>
            <div className="namesection-title-container"><h4>{title}</h4></div>
            <InputComponent 
                id={id}
                placeholder={placeholder}
            />
            <div className="namsesection-button-container">
                <button className="namespace-button" onClick={() => onClick()}>Next</button>
            </div>
        </article>
    </section>
}

export default ChsInput;
