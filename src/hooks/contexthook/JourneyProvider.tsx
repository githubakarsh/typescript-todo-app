
import { JourneyContext } from './AppContext';
import { FunctionComponent } from 'react';
import { JourneyProviderInterface } from '../../interfaces/JourneyPlaceholder';

const JourneyProvider :  FunctionComponent<{value: JourneyProviderInterface}> = (props) => {
    return <JourneyContext.Provider value={props.value}>
            {props.children}
        </JourneyContext.Provider>
}

export default JourneyProvider;
