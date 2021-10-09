import { Results } from './results';
import { Teams } from './teams';

export interface Item {
    match_id: string;
    game_id: string;
    region: string;
    match_type: string;
    game_mode: string;
    max_players: number;
    teams_size: number;
    teams: Teams;
    playing_players: string[];
    competition_id: string;
    competition_name: string;
    competition_type: string;
    organizer_id: string;
    status: string;
    started_at: number;
    finished_at: number;
    results: Results;
    faceit_url: string;
}
