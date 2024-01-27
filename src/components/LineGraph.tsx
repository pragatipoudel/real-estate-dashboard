import { Card, Text, Title } from '@mantine/core';
import { useMemo } from 'react';
import { LineChart } from '@mantine/charts';
import { useLineChartSeries } from '../hooks/line-series';

interface LineGraphProps {
    data: any;
    value: string;
    series: string;
}

const colors = ['#B2456E', '#EDCD44', '#4C8055', '#3B5BA5', '#B46543'];

export default function LineGraph({ data, value, series }: LineGraphProps) {
    const valueSeries = useLineChartSeries(data, value, series);
    const lineChartSeries = useMemo(() => {
        const uniqueRegions = [
            ...new Set<string>(data.map((datum) => datum.RegionName)),
        ];

        return uniqueRegions.map((regionName, index) => {
            const returnValue = {
                name: regionName,
                color: colors[index],
            };
            return returnValue;
        });
    }, [data]);

    return (
        <Card shadow="sm" padding="xl">
            <Card.Section>
                <Title p="md" order={2}>
                    {value}
                </Title>
            </Card.Section>
            <Card.Section>
                <LineChart
                    w="100%"
                    h={250}
                    p="md"
                    data={valueSeries}
                    dataKey="Date"
                    series={lineChartSeries}
                    lineChartProps={{ syncId: 'realestatenumbers' }}
                    curveType="linear"
                />
            </Card.Section>
        </Card>
    );
}
