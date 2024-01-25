import { LineChart } from '@mantine/charts';
import { MonthPickerInput } from '@mantine/dates';
import { MultiSelect, Text } from '@mantine/core';
import { useMemo } from 'react';
import { useDataset } from '../hooks/dataset';
import { useFilteredData, useFilters } from '../hooks/filters';
import { useRegionNameOptions } from '../hooks/options';
import { useLineChartSeries } from '../hooks/line-series';

export default function Dashboard() {
    const dataset = useDataset();
    const filters = useFilters();
    const filteredData = useFilteredData(filters, dataset);
    const regionOptions = useRegionNameOptions(dataset);
    const inventorySeries = useLineChartSeries(
        filteredData,
        'Inventory',
        'RegionName',
    );
    const salesSeries = useLineChartSeries(filteredData, 'Sales', 'RegionName');
    const lineChartSeries = useMemo(() => {
        const uniqueRegions = [
            ...new Set<string>(filteredData.map((datum) => datum.RegionName)),
        ];
        const colors = ['#B2456E', '#EDCD44', '#4C8055', '#3B5BA5', '#B46543'];
        let i = 0;

        return uniqueRegions.map((regionName) => {
            const returnValue = {
                name: regionName,
                color: colors[i],
            };
            i += 1;
            return returnValue;
        });
    }, [filteredData]);

    return (
        <div>
            <MonthPickerInput
                w="30%"
                type="range"
                label="Pick dates range"
                placeholder="Pick dates range"
                value={filters.date}
                onChange={filters.setDate}
            />
            <MultiSelect
                w="30%"
                label="Region"
                placeholder="Pick upto 5 regions"
                data={regionOptions}
                value={filters.regionName}
                maxValues={5}
                onChange={filters.setRegionName}
                clearable
                searchable
            />
            <Text mb="md" pl="md">
                Inventory:
            </Text>
            <LineChart
                w="60%"
                h={300}
                data={inventorySeries}
                dataKey="Date"
                series={lineChartSeries}
                lineChartProps={{ syncId: 'realestatenumbers' }}
                curveType="linear"
            />
            <Text mb="md" pl="md">
                Sales:
            </Text>
            <LineChart
                w="60%"
                h={300}
                data={salesSeries}
                dataKey="Date"
                series={lineChartSeries}
                lineChartProps={{ syncId: 'realestatenumbers' }}
                curveType="linear"
            />
        </div>
    );
}
