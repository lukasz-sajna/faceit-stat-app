import { Csgo } from './cs-go';
import { Pubg } from './pubg';
import { Valorant } from './valorant';

export interface Games {
    valorant: Valorant;
    pubg: Pubg;
    csgo: Csgo;
}
