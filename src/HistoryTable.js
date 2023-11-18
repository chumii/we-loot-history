import React, { useState, useEffect } from "react";
import Table from 'react-table';

export default function HistoryTable() {

    const [data, setData] = useState([]);

    const fetchHistory = async () => {
        try {
            const response = await fetch('export.json');
            const data = await response.json();
            setData(data);
            console.log(data);
        } catch (err) {
            console.error('Error fetching history: ' + err.message);
        }
    }

    useEffect(() => {
        fetchHistory();
    }, []);

    const columns = [
        {
            Header: 'Name',
            accessor: 'name',
        },
        {
            Header: 'Datum',
            accessor: 'date',
        },
        {
            Header: 'Item',
            accessor: 'itemName',
        },
    ]

    return (
        <div>
            <Table
                data={data}
                columns={columns}
                pageSize={5}
                pageOptions={{
                    sizeOptions: [5, 10, 20, 25],
                }}
            />
        </div>
    )
}

