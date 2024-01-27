import { AppShell, Grid, GridCol } from '@mantine/core';
import { useDataset } from '../hooks/dataset';
import { useFilteredData, useFilters } from '../hooks/filters';
import FilterSelection from './FilterSelection';
import LineGraph from './LineGraph';

export default function Dashboard() {
    const dataset = useDataset();
    const filters = useFilters();
    const filteredData = useFilteredData(filters, dataset);

    return (
        <>
            <AppShell.Main w="calc(100vw - 450px)">
                <Grid>
                    <GridCol span={12}>
                        <LineGraph
                            data={filteredData}
                            value="Inventory"
                            series="RegionName"
                        />
                    </GridCol>
                    <GridCol span={12}>
                        <LineGraph
                            data={filteredData}
                            value="Sales"
                            series="RegionName"
                        />
                    </GridCol>
                </Grid>
            </AppShell.Main>

            <AppShell.Aside p="md">
                <FilterSelection dataset={dataset} filters={filters} />
            </AppShell.Aside>
        </>
    );
}
