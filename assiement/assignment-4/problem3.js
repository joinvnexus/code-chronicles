function bestTeam(player1, player2) {
    // Step 1: Check if both inputs are objects
    if (typeof player1 !== "object" || typeof player2 !== "object" || player1 === null || player2 === null) {
        return "Invalid";
    }

    // Step 2: Get values from player1
    const foul1 = player1.foul;
    const cardY1 = player1.cardY;
    const cardR1 = player1.cardR;

    // Step 3: Get values from player2
    const foul2 = player2.foul;
    const cardY2 = player2.cardY;
    const cardR2 = player2.cardR;

    // Step 4: Calculate total penalties for each team
    const total1 = foul1 + cardY1 + cardR1;
    const total2 = foul2 + cardY2 + cardR2;

    // Step 5: Compare totals and decide the winner
    if (total1 < total2) {
        return player1.name;
    } else if (total2 < total1) {
        return player2.name;
    } else {
        return "Tie";
    }
}

console.log(bestTeam(
    { name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
    { name: "Argentina", foul: 7, cardY: 0, cardR: 0 }
)); // Brazil

console.log(bestTeam(
    { name: "Germany", foul: 12, cardY: 0, cardR: 0 },
    { name: "Sweden", foul: 7, cardY: 4, cardR: 1 }
)); // Tie

console.log(bestTeam(
    { name: "Germany", foul: 10, cardY: 1, cardR: 1 },
    { name: "France", foul: 10, cardY: 2, cardR: 1 }
)); // Germany

console.log(bestTeam(
    { name: "Germany", foul: 10, cardY: 1, cardR: 1 },
    "France"
)); // Invalid

