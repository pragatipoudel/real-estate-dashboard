import { MonthPickerInput } from '@mantine/dates';
import { Flex, MultiSelect } from '@mantine/core';
import { useRegionNameOptions } from '../hooks/options';

interface FilterSelectionProps {
    dataset: any;
    filters: any;
}

export default function FilterSelection({
    dataset,
    filters,
}: FilterSelectionProps) {
    const regionOptions = useRegionNameOptions(dataset);
    return (
        <Flex direction="column" gap="md">
            <MonthPickerInput
                type="range"
                label="Pick dates range"
                placeholder="Pick dates range"
                value={filters.date}
                onChange={filters.setDate}
            />
            <MultiSelect
                label="Region"
                placeholder="Pick upto 5 regions"
                data={regionOptions}
                value={filters.regionName}
                maxValues={5}
                onChange={filters.setRegionName}
                clearable
                searchable
            />
        </Flex>
    );
}
