import './input.scss';
import { FunctionComponent } from 'react';

const InputComponent : FunctionComponent<
    {id: string,
        type?: string,
    placeholder?: string}> = ({id,
        placeholder,
        type
    }) => {
    return <div className="input-container">
    <input id={id} className="input" placeholder={placeholder} type={type}/>
</div>
}

export default InputComponent;
