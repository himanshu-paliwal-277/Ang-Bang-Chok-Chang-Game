let all_red_players = document.querySelectorAll(".all_red_players");
let all_blue_players = document.querySelectorAll(".all_blue_players");
let all_green_players = document.querySelectorAll(".all_green_players");
let all_yellow_players = document.querySelectorAll(".all_yellow_players");

let all_player_chance_box = document.querySelectorAll(".all_player_chance_box");

// All coin
let coin_1 = document.querySelector(".coin_1");
let coin_2 = document.querySelector(".coin_2");
let coin_3 = document.querySelector(".coin_3");
let coin_4 = document.querySelector(".coin_4");

// Red player path
let red_players_path = {
    0: [240, 10],
    1: [340, 40],
    2: [440, 40],
    3: [440, 140],
    4: [440, 240],
    5: [440, 340],
    6: [440, 440],
    7: [340, 440],
    8: [240, 440],
    9: [140, 440],
    10: [40, 440],
    11: [40, 340],
    12: [40, 240],
    13: [40, 140],
    14: [40, 40],
    15: [140, 40],
    16: [140, 140],
    17: [140, 240],
    18: [140, 340],
    19: [240, 340],
    20: [340, 340],
    21: [340, 240],
    22: [340, 140],
    23: [240, 140],
    24: [240, 210],
}

// Blue player path
let blue_players_path = {
    0: [440, 240],
    1: [440, 340],
    2: [440, 440],
    3: [340, 440],
    4: [240, 440],
    5: [140, 440],
    6: [40, 440],
    7: [40, 340],
    8: [40, 240],
    9: [40, 140],
    10: [40, 40],
    11: [140, 40],
    12: [240, 40],
    13: [340, 40],
    14: [440, 40],
    15: [440, 140],
    16: [340, 140],
    17: [240, 140],
    18: [140, 140],
    19: [140, 240],
    20: [140, 340],
    21: [240, 340],
    22: [340, 340],
    23: [340, 240],
    24: [270, 240],
}

// Green player path
let green_players_path = {
    0: [240, 440],
    1: [140, 440],
    2: [40, 440],
    3: [40, 340],
    4: [40, 240],
    5: [40, 140],
    6: [40, 40],
    7: [140, 40],
    8: [240, 40],
    9: [340, 40],
    10: [440, 40],
    11: [440, 140],
    12: [440, 240],
    13: [440, 340],
    14: [440, 440],
    15: [340, 440],
    16: [340, 340],
    17: [340, 240],
    18: [340, 140],
    19: [240, 140],
    20: [140, 140],
    21: [140, 240],
    22: [140, 340],
    23: [240, 340],
    24: [240, 270],
}

// Yellow player path
let yellow_players_path = {
    0: [40, 240],
    1: [40, 140],
    2: [40, 40],
    3: [140, 40],
    4: [240, 40],
    5: [340, 40],
    6: [440, 40],
    7: [440, 140],
    8: [440, 240],
    9: [440, 340],
    10: [440, 440],
    11: [340, 440],
    12: [240, 440],
    13: [140, 440],
    14: [40, 440],
    15: [40, 340],
    16: [140, 340],
    17: [240, 340],
    18: [340, 340],
    19: [340, 240],
    20: [340, 140],
    21: [240, 140],
    22: [140, 140],
    23: [140, 240],
    24: [210, 240],
}

let player_position = {
    "red": [0, 0, 0, 0],
    "blue": [0, 0, 0, 0],
    "green": [0, 0, 0, 0],
    "yellow": [0, 0, 0, 0],
}

// let current_position = player_position[red][0];

// Red player moves when clicked
all_red_players.forEach((red_player, index) => {
    red_player.addEventListener("click", () => {
        let current_position = player_position["red"][index];
        let intervalId = setInterval(() => {
            player_position["red"][index] = current_position;
            console.log(player_position["red"]);
            current_position++;
            if(current_position > 24) {
                clearInterval(intervalId);
            }
            red_player.style.left = `${red_players_path[current_position][0]}px`;
            red_player.style.bottom = `${red_players_path[current_position][1]}px`;
        }, 400);
    })
})

// Red player moves when clicked
all_blue_players.forEach((blue_player, index) => {
    blue_player.addEventListener("click", () => {
        let current_position = player_position["blue"][index];
        let intervalId = setInterval(() => {
            player_position["blue"][index] = current_position;
            console.log(player_position["blue"]);
            current_position++;
            if(current_position > 24) {
                clearInterval(intervalId);
            }
            blue_player.style.left = `${blue_players_path[current_position][0]}px`;
            blue_player.style.bottom = `${blue_players_path[current_position][1]}px`;
        }, 400);
    })
})

// Green player moves when clicked
all_green_players.forEach((green_player, index) => {
    green_player.addEventListener("click", () => {
        let current_position = player_position["green"][index];
        let intervalId = setInterval(() => {
            player_position["green"][index] = current_position;
            console.log(player_position["green"]);
            current_position++;
            if(current_position > 24) {
                clearInterval(intervalId);
            }
            green_player.style.left = `${green_players_path[current_position][0]}px`;
            green_player.style.bottom = `${green_players_path[current_position][1]}px`;
        }, 400);
    })
})

// Yellow player moves when clicked
all_yellow_players.forEach((yellow_player, index) => {
    yellow_player.addEventListener("click", () => {
        let current_position = player_position["yellow"][index];
        let intervalId = setInterval(() => {
            player_position["yellow"][index] = current_position;
            console.log(player_position["yellow"]);
            current_position++;
            if(current_position > 24) {
                clearInterval(intervalId);
            }
            yellow_player.style.left = `${yellow_players_path[current_position][0]}px`;
            yellow_player.style.bottom = `${yellow_players_path[current_position][1]}px`;
        }, 400);
    })
})

// Changing the player chance
all_player_chance_box[0].addEventListener("click", () => {
    let coin_1_random_no = Math.rendom();
    coin_1.style.animation = `flip_to_white_side 2s`
    coin_2.style.animation = `flip_to_white_side 2s`
    coin_3.style.animation = `flip_to_white_side 2s`
    coin_4.style.animation = `flip_to_white_side 2s`
})