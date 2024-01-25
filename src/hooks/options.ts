
export function useRegionNameOptions(dataset) {
    const regionOptions = [
        ...new Set<string>(dataset.map((obj) => obj.RegionName as string)),
    ];
    return regionOptions;
}
