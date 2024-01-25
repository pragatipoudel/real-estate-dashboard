import { useMemo } from 'react';

export function useLineChartSeries(
    filteredDataset,
    valueColumn,
    groupColumn: string,
) {
    return useMemo(
        () =>
            Object.values(
                filteredDataset.reduce((acc, entry) => {
                    const groupName = entry[groupColumn];
                    const date = entry.Date;
                    const value = entry[valueColumn];

                    if (!acc[date]) {
                        acc[date] = {
                            Date: date,
                            [groupName]: value,
                        };
                    } else {
                        acc[date][groupName] = value;
                    }
                    return acc;
                }, {}),
            ),
        [filteredDataset, groupColumn, valueColumn],
    );
}
