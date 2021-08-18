function show_random_value() {
    let hands = ["rock", "paper", "scissor"];
    var rand = hands[~~(Math.random() * hands.length)];
    document.getElementById("random_val").innerHTML = rand;
}
