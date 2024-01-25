import { useMemo, useState } from 'react';

export function useFilters() {
    const [date, setDate] = useState<[Date | null, Date | null]>([
        new Date('2022-01-15'),
        new Date('2023-12-15'),
    ]);
    const [regionName, setRegionName] = useState(['New York, NY']);

    return {
        date,
        setDate,
        regionName,
        setRegionName,
    };
}

export function useFilteredData(filters, dataset) {
    const { date, regionName } = filters;

    const filteredData = useMemo(
        () =>
            dataset.filter(
                (entry) =>
                    new Date(entry.Date) >= date[0] &&
                    new Date(entry.Date) <= date[1] &&
                    regionName.includes(entry.RegionName),
            ),
        [dataset, date, regionName],
    );
    return filteredData;
}
