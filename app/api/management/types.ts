export interface Team {
    name: string; 
    head_count: number;
    supplies: string;
    priority: number;
    skill: number;
    notes: string; 
}

export interface Site {
    name: string;
    city: string;
    state: string;
    event: string;
    deployment_number: number;
    resources: string;
    expertise: string;
    deplyoment_length: number; 
    priority: number;
    assistance: string; 
    teamAssigned: Team; 
}