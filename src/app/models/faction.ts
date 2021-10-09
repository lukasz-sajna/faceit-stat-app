import { Player } from './player';

export interface Faction {
    team_id: string;
    nickname: string;
    avatar: string;
    type: string;
    players: Player[];
}
