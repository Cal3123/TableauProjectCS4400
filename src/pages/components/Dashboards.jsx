import React, {useRef, useEffect} from 'react'
import HeaderAndNavBar from './HeaderAndNavBar/HeaderAndNavBar';

const { tableau } = window;

function BasicEmbed() {

    const vizRef = useRef(null);
    
    useEffect(() => {
        const vizUrl = 'https://public.tableau.com/views/DeathTrends_16825288216850/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link';
        const vizOptions = {
          width: '100%',
          height: '1000px',
          // hideTabs: true,
          // hideToolbar: true,
        };
        const vizContainer = vizRef.current;
        const viz = new tableau.Viz(vizContainer, vizUrl, vizOptions);
    
        return () => {
          viz.dispose();
        };
      }, []);

    return (
    <div>
        <HeaderAndNavBar/>
        <div ref={vizRef}></div>
    </div>
    )
}

export default BasicEmbed