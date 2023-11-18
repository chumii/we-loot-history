import './App.css';
import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import { FilterMatchMode } from 'primereact/api';
import { InputText } from 'primereact/inputtext';

function App() {

  const [data, setData] = useState([]);
  const [overalldata, setOveralldata] = useState([]);
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });



  const fetchHistory = async () => {
    try {
      const response = await fetch('export.json');
      const data = await response.json();
      let temp = {};
      for (const item of data) {
        item.player = item.player.split("-")[0];
      }

      data.forEach(entry => {
        const { player, instance, response } = entry;

        const difficulty = instance.split("-")[1];

        if (!temp[player]) {
          temp[player] = {};
        }

        if (response !== "Banking") {
          if (!temp[player][difficulty]) {
            temp[player][difficulty] = 1;
          } else {
            temp[player][difficulty]++;
          }
        }
      });

      setData(data);
      setOveralldata(temp);

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
    <div className="Wrapper">
      <aside>
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
      </aside>
      <main>
        <InputText placeholder="Filter"
          onInput={(e) =>
            setFilters({
              global: { value: e.target.value, matchMode: FilterMatchMode.CONTAINS }
            })
          }
        />

        <DataTable value={data} sortMode='multiple' filters={filters} showGridlines stripedRows >
          <Column field="player" header="Name" sortable />
          <Column field="itemName" header="Item" body={itemTemplate} sortable />
          <Column field="equipLoc" header="Slot" sortable />
          <Column field="boss" header="Boss" sortable />
          <Column field="instance" header="Difficulty" body={difficulyTemplate} sortable />
          <Column field='response' header="Response" sortable />
          <Column field="note" header="Note" />
          <Column field="date" header="Datum" sortable />
        </DataTable>
      </main >
    </div>

  );
}

export default App;


