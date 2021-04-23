

import { useEffect } from 'react';


const useHelmetHook = (appTitle : string) => {
    useEffect(() => {
        document.title = appTitle;
    }, [appTitle]);
}

export default useHelmetHook;
