import { LineChart } from '@mantine/charts';
import { useState } from 'react';
import { DatePickerInput } from '@mantine/dates';
import { useDataset } from '../hooks/dataset';
import { useFilteredData, useFilters } from '../hooks/filters';

export default function Dashboard() {
    const dataset = useDataset();
    const filters = useFilters();
    const filteredData = useFilteredData(filters, dataset);
    const [date, setDate] = useState<[Date | null, Date | null]>([null, null]);
    console.log(date);

    return (
        <div>
            <DatePickerInput
                w="30%"
                type="range"
                label="Pick dates range"
                placeholder="Pick dates range"
                value={date}
                onChange={setDate}
            />
            <LineChart
                w="40%"
                h={300}
                data={filteredData}
                dataKey="Date"
                series={[
                    { name: 'Inventory', color: 'green.6' },
                    { name: 'Sales', color: 'blue.6' },
                ]}
                curveType="linear"
            />
        </div>
    );
}
