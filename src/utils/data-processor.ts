function processSingleDataset(data) {
    const transformedData = data.flatMap((entry) => {
        const {
            RegionID,
            SizeRank,
            RegionName,
            RegionType,
            StateName,
            ...dates
        } = entry;
        return Object.entries(dates).map(([Date, Value]) => ({
            Date,
            Value,
            RegionID,
            SizeRank,
            RegionName,
            RegionType,
            StateName,
        }));
    });
    return transformedData;
}

function getKey(entry) {
    return `${entry.Date}-${entry.RegionID}`;
}

export function processDataset(inventoryData, salesData) {
    processSingleDataset(inventoryData);
    processSingleDataset(salesData);

    const inventory = processSingleDataset(inventoryData);
    const sales = processSingleDataset(salesData);

    const inventoryObj = inventory.reduce((acc, entry) => {
        const key = getKey(entry);
        acc[key] = entry;
        return acc;
    }, {});

    const mergedData = sales.map((entry1) => {
        const key = getKey(entry1);
        const matchingEntry = inventoryObj[key];

        if (matchingEntry) {
            return {
                Date: entry1.Date,
                RegionId: entry1.RegionID,
                RegionName: entry1.RegionName,
                RegionType: entry1.RegionType,
                StateName: entry1.StateName,
                SizeRank: entry1.SizeRank,
                Sales: entry1.Value,
                Inventory: matchingEntry.Value,
            };
        }
        return {
            Date: entry1.Date,
            RegionId: entry1.RegionID,
            RegionName: entry1.RegionName,
            RegionType: entry1.RegionType,
            StateName: entry1.StateName,
            SizeRank: entry1.SizeRank,
            Sales: entry1.Value,
        };
    });

    return mergedData;
}
