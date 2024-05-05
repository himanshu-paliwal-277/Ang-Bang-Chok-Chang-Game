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

// Sounds
let flipping_sound = new Audio("./Assets/coin_flip_sound.mp3");
let moving_sound = new Audio("./Assets/moving_sound.mp3");
let player_death_sound = new Audio("./Assets/player_death_sound.mp3");

// Number getting by flipping coins
let currently_getting_number = 0;

// player chance
let player_chance = 1;

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
};

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
};

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
};

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
};

let player_position = {
  red: [0, 0, 0, 0],
  blue: [0, 0, 0, 0],
  green: [0, 0, 0, 0],
  yellow: [0, 0, 0, 0],
};

// let current_position = player_position[red][0];

// Red player moves when clicked
all_red_players.forEach((red_player, index) => {
  red_player.addEventListener("click", () => {
    let killing_player_chance = false;
    if (player_chance === 1) {
      let current_position = player_position["red"][index];
      let previous_position = current_position;
      let intervalId = setInterval(() => {
        player_position["red"][index] = current_position;
        current_position++;
        if (current_position > previous_position + currently_getting_number) {
          clearInterval(intervalId);
          killing_player_chance = check_if_red_player_eat_some_other_player(current_position - 1);
          console.log("Player chance = ", player_chance);
          console.log("killing_player_chance = ", killing_player_chance);
          if (
            currently_getting_number !== 4 &&
            currently_getting_number !== 8 &&
            currently_getting_number !== 0 &&
            killing_player_chance === false
          ) {
            // Red turn over
            all_red_players.forEach((element) => {
              element.style.animation = `none`;
            });
            // Now blue turn
            all_blue_players.forEach((element) => {
              element.style.animation = `can_move 2s infinite linear`;
            });
            all_player_chance_box[0].disabled = true;
            all_player_chance_box[3].disabled = false;
            all_player_chance_box[0].innerHTML = "";
            setTimeout(() => {
              all_player_chance_box[3].innerHTML = `
                    <div class="coin coin_1 flex justify-center items-center">
                        <div class="absolute bg-gray-400 w-7 h-7 black_side rounded-full"></div>
                        <div class="absolute bg-white w-7 h-7 white_side rounded-full"></div>
                    </div>
                    <div class="coin coin_2 flex justify-center items-center">
                        <div class="absolute bg-gray-400 w-7 h-7 black_side rounded-full"></div>
                        <div class="absolute bg-white w-7 h-7 white_side rounded-full"></div>
                    </div>
                    <div class="coin coin_3 flex justify-center items-center">
                        <div class="absolute bg-gray-400 w-7 h-7 black_side rounded-full"></div>
                        <div class="absolute bg-white w-7 h-7 white_side rounded-full"></div>
                    </div>
                    <div class="coin coin_4 flex justify-center items-center">
                        <div class="absolute bg-gray-400 w-7 h-7 black_side rounded-full"></div>
                        <div class="absolute bg-white w-7 h-7 white_side rounded-full"></div>
                    </div>`;
              coin_1 = document.querySelector(".coin_1");
              coin_2 = document.querySelector(".coin_2");
              coin_3 = document.querySelector(".coin_3");
              coin_4 = document.querySelector(".coin_4");
            }, 200);
          }
          currently_getting_number = 0;
        } else {
          all_player_chance_box[0].disabled = false;
          red_player.style.left = `${red_players_path[current_position][0]}px`;
          red_player.style.bottom = `${red_players_path[current_position][1]}px`;
          moving_sound.play();
        }
      }, 300);
      if (
        currently_getting_number !== 4 &&
        currently_getting_number !== 8 &&
        currently_getting_number !== 0 &&
        killing_player_chance === false
      ) {
        player_chance++;
      }
    }
  });
});

// Function to check if red player eat some other player {This function is working}
function check_if_red_player_eat_some_other_player(current_position_of_red_player) {
  let is_killed = false;
  // Is red kill blue player
  player_position["blue"].forEach((Blue_player_position, index) => {
    if (Blue_player_position === current_position_of_red_player - 4 && current_position_of_red_player !== 4 && current_position_of_red_player !== 8 && current_position_of_red_player !== 12) {
      player_death_sound.play();
      player_position["blue"][index] = 0;
      all_blue_players[index].style.left = `${blue_players_path[0][0]}px`;
      all_blue_players[index].style.bottom = `${blue_players_path[0][1]}px`;
      player_chance = 1;
      is_killed = true;
    }
  });
  // Is red kill green player - {not working !}
  player_position["green"].forEach((Green_player_position, index) => {
    if (Green_player_position === current_position_of_red_player - 4 && current_position_of_red_player !== 4 && current_position_of_red_player !== 8 && current_position_of_red_player !== 12) {
      player_death_sound.play();
      player_position["green"][index] = 0;
      all_green_players[index].style.left = `${green_players_path[0][0]}px`;
      all_green_players[index].style.bottom = `${green_players_path[0][1]}px`;
      player_chance = 1;
      is_killed = true;
    }
  });
  // Is red kill yellow player
  player_position["yellow"].forEach((Yellow_player_position, index) => {
    if (Yellow_player_position === current_position_of_red_player - 4 && current_position_of_red_player !== 4 && current_position_of_red_player !== 8 && current_position_of_red_player !== 12) {
      player_death_sound.play();
      player_position["yellow"][index] = 0;
      all_yellow_players[index].style.left = `${yellow_players_path[0][0]}px`;
      all_yellow_players[index].style.bottom = `${yellow_players_path[0][1]}px`;
      player_chance = 1;
      is_killed = true;
    }
  });
  return is_killed;
  // console.log("current_position_of_red_player = ", current_position_of_red_player);
}

// Blue player moves when clicked
all_blue_players.forEach((blue_player, index) => {
  blue_player.addEventListener("click", () => {
    if (player_chance === 2) {
      let current_position = player_position["blue"][index];
      let previous_position = current_position;
      let intervalId = setInterval(() => {
        player_position["blue"][index] = current_position;
        current_position++;
        if (current_position > previous_position + currently_getting_number) {
          clearInterval(intervalId);
          if (
            currently_getting_number !== 4 &&
            currently_getting_number !== 8 &&
            currently_getting_number !== 0
          ) {
            // blue turn over
            all_blue_players.forEach((element) => {
              element.style.animation = `none`;
            });
            // Now Green turn
            all_green_players.forEach((element) => {
              element.style.animation = `can_move 2s infinite linear`;
            });
            all_player_chance_box[3].disabled = true;
            all_player_chance_box[2].disabled = false;
            all_player_chance_box[3].innerHTML = "";
            setTimeout(() => {
              all_player_chance_box[2].innerHTML = `
                    <div class="coin coin_1 flex justify-center items-center">
                        <div class="absolute bg-gray-400 w-7 h-7 black_side rounded-full"></div>
                        <div class="absolute bg-white w-7 h-7 white_side rounded-full"></div>
                    </div>
                    <div class="coin coin_2 flex justify-center items-center">
                        <div class="absolute bg-gray-400 w-7 h-7 black_side rounded-full"></div>
                        <div class="absolute bg-white w-7 h-7 white_side rounded-full"></div>
                    </div>
                    <div class="coin coin_3 flex justify-center items-center">
                        <div class="absolute bg-gray-400 w-7 h-7 black_side rounded-full"></div>
                        <div class="absolute bg-white w-7 h-7 white_side rounded-full"></div>
                    </div>
                    <div class="coin coin_4 flex justify-center items-center">
                        <div class="absolute bg-gray-400 w-7 h-7 black_side rounded-full"></div>
                        <div class="absolute bg-white w-7 h-7 white_side rounded-full"></div>
                    </div>`;
              coin_1 = document.querySelector(".coin_1");
              coin_2 = document.querySelector(".coin_2");
              coin_3 = document.querySelector(".coin_3");
              coin_4 = document.querySelector(".coin_4");
            }, 200);
          }
          currently_getting_number = 0;
        } else {
          all_player_chance_box[3].disabled = false;
          blue_player.style.left = `${blue_players_path[current_position][0]}px`;
          blue_player.style.bottom = `${blue_players_path[current_position][1]}px`;
          moving_sound.play();
        }
      }, 300);
      if (
        currently_getting_number !== 4 &&
        currently_getting_number !== 8 &&
        currently_getting_number !== 0
      ) {
        player_chance++;
      }
    }
  });
});

// Green player moves when clicked
all_green_players.forEach((green_player, index) => {
  green_player.addEventListener("click", () => {
    if (player_chance === 3) {
      let current_position = player_position["green"][index];
      let previous_position = current_position;
      let intervalId = setInterval(() => {
        player_position["green"][index] = current_position;
        current_position++;
        if (current_position > previous_position + currently_getting_number) {
          clearInterval(intervalId);
          if (
            currently_getting_number !== 4 &&
            currently_getting_number !== 8 &&
            currently_getting_number !== 0
          ) {
            // green turn over
            all_green_players.forEach((element) => {
              element.style.animation = `none`;
            });
            // Now yellow turn
            all_yellow_players.forEach((element) => {
              element.style.animation = `can_move 2s infinite linear`;
            });
            all_player_chance_box[2].disabled = true;
            all_player_chance_box[1].disabled = false;
            all_player_chance_box[2].innerHTML = "";
            setTimeout(() => {
              all_player_chance_box[1].innerHTML = `
                    <div class="coin coin_1 flex justify-center items-center">
                        <div class="absolute bg-gray-400 w-7 h-7 black_side rounded-full"></div>
                        <div class="absolute bg-white w-7 h-7 white_side rounded-full"></div>
                    </div>
                    <div class="coin coin_2 flex justify-center items-center">
                        <div class="absolute bg-gray-400 w-7 h-7 black_side rounded-full"></div>
                        <div class="absolute bg-white w-7 h-7 white_side rounded-full"></div>
                    </div>
                    <div class="coin coin_3 flex justify-center items-center">
                        <div class="absolute bg-gray-400 w-7 h-7 black_side rounded-full"></div>
                        <div class="absolute bg-white w-7 h-7 white_side rounded-full"></div>
                    </div>
                    <div class="coin coin_4 flex justify-center items-center">
                        <div class="absolute bg-gray-400 w-7 h-7 black_side rounded-full"></div>
                        <div class="absolute bg-white w-7 h-7 white_side rounded-full"></div>
                    </div>`;
              coin_1 = document.querySelector(".coin_1");
              coin_2 = document.querySelector(".coin_2");
              coin_3 = document.querySelector(".coin_3");
              coin_4 = document.querySelector(".coin_4");
            }, 200);
          }
          currently_getting_number = 0;
        } else {
          all_player_chance_box[2].disabled = false;
          green_player.style.left = `${green_players_path[current_position][0]}px`;
          green_player.style.bottom = `${green_players_path[current_position][1]}px`;
          moving_sound.play();
        }
      }, 300);
      if (
        currently_getting_number !== 4 &&
        currently_getting_number !== 8 &&
        currently_getting_number !== 0
      ) {
        player_chance++;
      }
    }
  });
});

// Yellow player moves when clicked
all_yellow_players.forEach((yellow_player, index) => {
  yellow_player.addEventListener("click", () => {
    if (player_chance === 4) {
      let current_position = player_position["yellow"][index];
      let previous_position = current_position;
      let intervalId = setInterval(() => {
        player_position["yellow"][index] = current_position;
        current_position++;
        if (current_position > previous_position + currently_getting_number) {
          clearInterval(intervalId);
          if (
            currently_getting_number !== 4 &&
            currently_getting_number !== 8 &&
            currently_getting_number !== 0
          ) {
            // yellow turn over
            all_yellow_players.forEach((element) => {
              element.style.animation = `none`;
            });
            // Now red turn
            all_red_players.forEach((element) => {
              element.style.animation = `can_move 2s infinite linear`;
            });
            all_player_chance_box[1].disabled = true;
            all_player_chance_box[0].disabled = false;
            all_player_chance_box[1].innerHTML = "";
            setTimeout(() => {
              all_player_chance_box[0].innerHTML = `
                    <div class="coin coin_1 flex justify-center items-center">
                        <div class="absolute bg-gray-400 w-7 h-7 black_side rounded-full"></div>
                        <div class="absolute bg-white w-7 h-7 white_side rounded-full"></div>
                    </div>
                    <div class="coin coin_2 flex justify-center items-center">
                        <div class="absolute bg-gray-400 w-7 h-7 black_side rounded-full"></div>
                        <div class="absolute bg-white w-7 h-7 white_side rounded-full"></div>
                    </div>
                    <div class="coin coin_3 flex justify-center items-center">
                        <div class="absolute bg-gray-400 w-7 h-7 black_side rounded-full"></div>
                        <div class="absolute bg-white w-7 h-7 white_side rounded-full"></div>
                    </div>
                    <div class="coin coin_4 flex justify-center items-center">
                        <div class="absolute bg-gray-400 w-7 h-7 black_side rounded-full"></div>
                        <div class="absolute bg-white w-7 h-7 white_side rounded-full"></div>
                    </div>`;
              coin_1 = document.querySelector(".coin_1");
              coin_2 = document.querySelector(".coin_2");
              coin_3 = document.querySelector(".coin_3");
              coin_4 = document.querySelector(".coin_4");
            }, 200);
          }
          currently_getting_number = 0;
        } else {
          all_player_chance_box[1].disabled = false;
          yellow_player.style.left = `${yellow_players_path[current_position][0]}px`;
          yellow_player.style.bottom = `${yellow_players_path[current_position][1]}px`;
          moving_sound.play();
        }
      }, 300);
      if (
        currently_getting_number !== 4 &&
        currently_getting_number !== 8 &&
        currently_getting_number !== 0
      ) {
        player_chance = 1;
      }
    }
  });
});

// By default first move is red
all_red_players.forEach((element) => {
  element.style.animation = `can_move 2s infinite linear`;
});

// By default all_player_chance_box are disable or red all_player_chance_box is enable
all_player_chance_box[1].disabled = true;
all_player_chance_box[2].disabled = true;
all_player_chance_box[3].disabled = true;

// Changing the player chance
all_player_chance_box.forEach((player_chance_box, index) => {
  player_chance_box.addEventListener("click", () => {
    flipping_sound.play();
    coin_1.style.animation = `none`;
    coin_2.style.animation = `none`;
    coin_3.style.animation = `none`;
    coin_4.style.animation = `none`;
    // Coins toss logic
    let coin_1_random_no = Math.floor(Math.random() * 2);
    let coin_2_random_no = Math.floor(Math.random() * 2);
    let coin_3_random_no = Math.floor(Math.random() * 2);
    let coin_4_random_no = Math.floor(Math.random() * 2);
    setTimeout(() => {
      // Coin 1 randomly toss
      if (coin_1_random_no === 1) {
        coin_1.style.animation = `flip_to_white_side 2s forwards linear`;
      } else {
        coin_1.style.animation = `flip_to_black_side 2s forwards linear`;
      }
      // Coin 2 randomly toss
      if (coin_2_random_no === 1) {
        coin_2.style.animation = `flip_to_white_side 2s forwards linear`;
      } else {
        coin_2.style.animation = `flip_to_black_side 2s forwards linear`;
      }
      // Coin 3 randomly toss
      if (coin_3_random_no === 1) {
        coin_3.style.animation = `flip_to_white_side 2s forwards linear`;
      } else {
        coin_3.style.animation = `flip_to_black_side 2s forwards linear`;
      }
      // Coin 4 randomly toss
      if (coin_4_random_no === 1) {
        coin_4.style.animation = `flip_to_white_side 2s forwards linear`;
      } else {
        coin_4.style.animation = `flip_to_black_side 2s forwards linear`;
      }
    }, 100);
    currently_getting_number = 0;
    if (
      coin_1_random_no === 0 &&
      coin_2_random_no === 0 &&
      coin_3_random_no === 0 &&
      coin_4_random_no === 0
    ) {
      currently_getting_number = 8;
    } else {
      currently_getting_number =
        coin_1_random_no +
        coin_2_random_no +
        coin_3_random_no +
        coin_4_random_no;
    }
    // console.log("Current Number = ", currently_getting_number);
    player_chance_box.disabled = true;
  });
});
