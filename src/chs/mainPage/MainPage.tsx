import { FunctionComponent, useState } from 'react';
import useHelmetHook from '../../hooks/UseHelmentHook';
import './main.scss';
import ChsInput from './chsinput/ChsInput';
import ChsSelect from './chsselect/ChsSelect';
import ChsAddress from './chsaddress/ChsAddress';



const MainPage : FunctionComponent<{}> = () => {
    useHelmetHook('Covid Help Service');
    const [activeSection, setActiveSection] = useState(0);
    
    const onClickNext = () => {
        setActiveSection(activeSection+1);
    }

    return <div className="chs-main">
        <div className="title-main-container"><h3 className="chs-title">Covid Help Service</h3></div>
        {activeSection === 0 && <ChsInput 
            title="What's your Name"
            id={"name-input"}
            placeholder="Enter Name"
            onClick={onClickNext}/>}
        {activeSection === 1 && <ChsInput 
            title="What's your Phone Number"
            placeholder="Enter Phone Number"
            id={"phone-number-input"}
            onClick={onClickNext}/>}
        {activeSection === 2 && <ChsSelect 
            onClick={onClickNext}
            title="No of meals Required ?."/>}
        {activeSection === 3 && <ChsAddress />}
    </div>
}

export default MainPage;

