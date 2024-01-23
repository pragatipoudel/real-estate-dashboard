import Papa from 'papaparse';
import { useEffect, useMemo, useState } from 'react';
import { processDataset } from '../utils/data-processor';

export function useDataset() {
    const [inventoryData, setInventoryData] = useState([]);
    const [salesData, setSalesData] = useState([]);

    useEffect(() => {
        Papa.parse('/data/inventory_metro_month.csv', {
            download: true,
            header: true,
            dynamicTyping: true,
            complete: (results) => {
                setInventoryData(results.data);
            },
        });
        Papa.parse('/data/sales_metro_month.csv', {
            download: true,
            header: true,
            dynamicTyping: true,
            complete: (results) => {
                setSalesData(results.data);
            },
        });
    }, []);

    const mergedData = useMemo(
        () => processDataset(inventoryData, salesData),
        [inventoryData, salesData],
    );

    return mergedData;
}
