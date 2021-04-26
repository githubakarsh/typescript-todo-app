import './chsaddress.scss';
import { FunctionComponent } from 'react';
import InputComponent from '../InputComponent';

const ChsAddress : FunctionComponent<{onClick?:Function}> = ({onClick}) => {
    return <section className="chs-address-main">
        <article>
            <div className="address-title"><h4>Address : </h4></div>
            <InputComponent id="Address_1" placeholder="Address Line 1"/>
            <InputComponent id="Address_2" placeholder="Address Line 2"/>
            <InputComponent id="Address_3" placeholder="Address Line 3"/>
            <InputComponent id="Address_directions" placeholder="Directions ...."/>
            <InputComponent id="More Info ....." type="textarea"/>
            <div><button>Submit</button></div>
        </article>
    </section>
}

export default ChsAddress;


