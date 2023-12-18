import './App.css';
import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import 'primereact/resources/themes/mdc-dark-indigo/theme.css';
import { FilterMatchMode } from 'primereact/api';
import { InputText } from 'primereact/inputtext';
import Nav from './Nav';
import Sidebar from './Sidebar';

//package.json "homepage": "https://chumii.github.io/we-loot-history",


function HistoryTable() {

  const [data, setData] = useState([]);
  const [overalldata, setOveralldata] = useState([]);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };


  const fetchHistory = async () => {
    try {
      const response = await fetch('export.json');
      const data = await response.json();


      let temp = {};
      for (const item of data) {
        item.player = item.player.split("-")[0];
      }

      const nameMappings = {
        "Avanaria": "Nirlendra",
      };

      data.forEach(entry => {
        const { player, instance, response } = entry;

        const difficulty = instance.split("-")[1];

        const playerName = nameMappings[player] || player;

        if (!temp[playerName]) {
          temp[playerName] = {};
        }

        if (response !== "Banking" && response !== "Disenchant" && response !== "Transmog") {
          if (!temp[playerName][difficulty]) {
            temp[playerName][difficulty] = 1;
          } else {
            temp[playerName][difficulty]++;
          }
        }
      });

      setData(data);
      setOveralldata(temp);
      console.log(temp);

    } catch (err) {
      console.error('Error fetching history: ' + err.message);
    }
  }

  useEffect(() => {
    fetchHistory();
  }, []);

  const sortedOveralldata = Object.keys(overalldata).sort();

  const difficulyTemplate = rowData => {
    const instanceType = rowData.instance.split('-')[1];
    return <span>{instanceType}</span>;
  }
  const itemTemplate = rowData => {
    const itemName = rowData.itemName;
    const itemID = rowData.itemID;
    return <span><a href={`https://wowhead.com/item=${itemID}`} target='_blank' className='itemLink'>{itemName}</a></span>;
  }

  return (
    <>



      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} sortedData={sortedOveralldata} data={overalldata} />

      {/* <div id='overlay'></div> */}

      <div className="Wrapper">
        <div className="title">
          <Nav />
        </div>


        <div className='history-table'>
          <div className='table-top'>
            <InputText placeholder="Filter"
              onInput={(e) =>
                setFilters({
                  global: { value: e.target.value, matchMode: FilterMatchMode.CONTAINS }
                })
              }
            />

            <button onClick={toggleSidebar} className='sidebar-button'>👀</button>
          </div>

          <DataTable value={data} sortMode='multiple' filters={filters} showGridlines stripedRows paginator rows={15}>
            <Column field="player" header="Name" sortable />
            <Column field="itemName" header="Item" body={itemTemplate} sortable />
            <Column field="equipLoc" header="Slot" sortable />
            <Column field="boss" header="Boss" sortable />
            <Column field="instance" header="Difficulty" body={difficulyTemplate} sortable />
            <Column field='response' header="Response" sortable />
            <Column field="note" header="Note" />
            <Column field="date" header="Datum" sortable />
          </DataTable>
        </div >
      </div>
    </>
  );
}

export default HistoryTable;


