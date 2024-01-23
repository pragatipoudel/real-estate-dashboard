import { useMemo, useState } from 'react';

export function useFilters() {
    const [minDate, setMinDate] = useState('2018-03-31');
    const [maxDate, setMaxDate] = useState('2019-03-31');
    const [regionName, setRegionName] = useState('New York, NY');

    return {
        minDate,
        maxDate,
        regionName,
        setMinDate,
        setMaxDate,
        setRegionName,
    };
}

export function useFilteredData(filters, dataset) {
    const { minDate, maxDate, regionName } = filters;

    const filteredData = useMemo(
        () =>
            dataset.filter(
                (entry) =>
                    entry.Date >= minDate &&
                    entry.Date <= maxDate &&
                    entry.RegionName === regionName,
            ),
        [dataset, maxDate, minDate, regionName],
    );
    return filteredData;
}
