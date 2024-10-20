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
    city: string;
    state: string;
    type: string;
    resources_needed: string;
    priority: number;
    assistance: string; 
    teamAssigned: Team; 
    severity: number;
    description: string;
}