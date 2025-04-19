export const scale =
    (val: number, oldRange:[number, number], newRange: [number, number]):number => {
    return (val-oldRange[0])*(newRange[1]-newRange[0])/(oldRange[1]-oldRange[0]) + newRange[0];
}