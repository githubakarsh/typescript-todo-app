import { FunctionComponent, useState } from 'react';
import Select from 'react-select';
import './chs.scss';


const options = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '3', label: '4' },
    { value: '3', label: '5' },
    { value: '3', label: '6' }
  ]

const ChsSelect : FunctionComponent <{title: string, onClick:Function}> = ({title, onClick}) => {
    const [value, setValue] = useState('0');
    return <section className="chs-select-container">
        <article>
            <div className="chs-title-container"><h4>{title}</h4></div>
            <div className="chs-select-section"><Select options={options}/></div>
            <div className="chssection-button-container">
                <button className="chssection-button" onClick={() => onClick()}>Next</button>
            </div>
        </article>
    </section>
}

export default ChsSelect;
