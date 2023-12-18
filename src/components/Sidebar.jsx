import React from 'react';
import './App.css';

const Sidebar = ({ isOpen, toggleSidebar, data, sortedData }) => {

    const sortedOveralldata = sortedData;
    const overalldata = data;
    console.log(sortedOveralldata);

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="asideHeaderPlayer">Name</div>
            <div className="asideHeader">Normal</div>
            <div className="asideHeader">Heroic</div>
            <div className="asideHeader">Mythic</div>
            {sortedOveralldata.map(player => (
                <>
                    <div className="asideRowPlayer">{player}</div>
                    <div className="asideRow">{overalldata[player].Normal}</div>
                    <div className="asideRow">{overalldata[player].Heroic}</div>
                    <div className="asideRow">{overalldata[player].Mythic}</div>
                </>
            ))}
            <button onClick={toggleSidebar}>Close Sidebar</button>
        </div>
    );
};

export default Sidebar;