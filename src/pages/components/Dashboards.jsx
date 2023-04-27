import React, {useRef, useEffect} from 'react'
import HeaderAndNavBar from './HeaderAndNavBar/HeaderAndNavBar';

import './Dashboards.css';

const { tableau } = window;

function BasicEmbed() {

    const vizRef = useRef(null);
    
    useEffect(() => {
        const vizUrl = 'https://public.tableau.com/shared/HHNP6H9QC?:display_count=n&:origin=viz_share_link';
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
        <h1 className='description'>This dashboard is here to represent the observalbe deaths of the top five causes recorded in the United States of America. The purpose of these
          graphs is to raise awareness of the leading factors in the U.S. and to show trends within the country. This visualization is a useful tool for tracking 
          different types of deaths among the various states and age ranges and identifying problem areas where help is needed.
        </h1>
        <div className='dash' ref={vizRef}></div>
    </div>
    )
}

export default BasicEmbed