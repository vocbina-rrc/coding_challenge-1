// Main parameters
let wins = 0;
let losses = 0;
let totalScore = 0;

// Calculates rating
const calculateRating = (wins: number, losses: number, totalScore: number): number => {
    const totalGames = wins + losses;
    if (totalGames === 0) {
        return 0;
    }

    const rating = (wins / totalGames) * 100 + (totalScore / totalGames);
    return Math.round(rating * 100) / 100; // Rounds to 2 decimals
};
export const playerService = (wins: number, losses: number, totalScore: number): void => {
    console.log(`Player's rating: ${calculateRating(wins, losses, totalScore)}`);
};
