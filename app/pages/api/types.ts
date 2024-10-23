export class Team {
    name: string; 
    head_count: number;
    supplies: string;
    priority: number;
    skill: number;
    notes: string; 
    deplyoment_length: number
}

export interface Site {
    id: number;
    name: string;
    state: string;
    type: string;
    priority: number;
    aidNeeded: string; 
    severity: number;
    description: string;
}
