function scrabbleScore(w) {

    var letters = w.split("");
    var score = 0;

    for (let i = 0; i < letters.length; i++) {
        i = letters[i].toUpperCase();
        if (letters[i] == A || letters[i] == E || letters[i] == I || letters[i] == O || letters[i] == U || letters[i] == L || letters[i] == N || letters[i] == A || letters[i] == A || letters[i] == A) {
            score += 1;
        }
        if (letters[i] == D || letters[i] == G) {
            score += 2;
        }
        if (letters[i] == B || letters[i] == C || letters[i] == M || letters[i] == P) {
            score += 3;
        }
        if (letters[i] == F || letters[i] == H || letters[i] == V || letters[i] == W || letters[i] == Y) {
            score += 4;
        }
        if (letters[i] == K) {
            score += 5;
        }
        if (letters[i] == J || letters[i] == X) {
            score += 8;
        }
        if (letters[i] == Q || letters[i] == Z) {
            score += 10;
        }
    }

    return score;
    
}
