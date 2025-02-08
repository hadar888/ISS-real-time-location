interface Location {
    longitude: number;
    latitude: number;
}

export interface IssLocation {
    data: Location | null;
    timestamp: number;
}
