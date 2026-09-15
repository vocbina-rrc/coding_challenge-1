
// Player Data parameters
const players: { name: string; wins: number; losses: number; totalScore: number }[] = [
    {
        name: "ShadowStrike",
        wins: 15,
        losses: 5,
        totalScore: 28500
    },
    {
        name: "NoobMaster",
        wins: 3,
        losses: 12,
        totalScore: 4200
    },
    {
        name: "ProGamer99",
        wins: 0,
        losses: 0,
        totalScore: 0
    }
];

/**
 * Player data
 * @param id - user id
 * @param name - User's name
 * @param wins - Number of wins
 * @param losses - Number of losses
 * @param totalScore - Total score
 */

export const playerData = (id: number[], name: string[], wins: number[], losses: number[], totalScore: number[]): void => {
    console.log(`id: ${id}, name: ${name}, wins: ${wins}, losses: ${losses}, totalScore: ${totalScore}`);
}