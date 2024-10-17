export interface Storm {
    id: number;
    name: string;
    severity: number;
    aidNeeded: boolean;
    locatioon: {
        latitude: number;
        longitude: number;
        state: string;
        city: string | null;
    }
    timestamp: Date; 
}