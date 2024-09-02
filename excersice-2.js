var userChoice = "";
var cpuChoice = "";
let rock = "img/rock.png";
let paper = "img/paper.png";
let scissor = "img/scissor.png";

let user_Score = 0;
let cpu_Score = 0;

var option_names = ["Rock", "Paper", "Scissor"];
var choose_img_Array = [rock, paper, scissor];

// let choose_img_Array = [rock, paper, scissor];
let sad_Audio = document.getElementById("sad-audio");
let clap_Audio = document.getElementById("clap-audio");

function set_heading_image(user_choice, image) {
  userChoice = user_choice;
  document.getElementById("choose-image").innerHTML = `<img src="${image}" />`;
  document.getElementById("choose_YouImg_heading").innerHTML = userChoice;
}

function cpu_random_select() {
  let index = Math.floor(Math.random() * option_names.length);
  let cpu_choice = option_names[index];
  let image = choose_img_Array[index];

  cpuChoice = cpu_choice;
  document.getElementById("choose_CpuImg_heading").innerHTML = cpuChoice;
  document.getElementById(
    "cpu-choose-image"
  ).innerHTML = `<img src="${image}" />`;
  return;
}

function tie_game() {
  document.getElementById("alert").style.display = "block";
  document.getElementById("congratulations").style.display = "none";
  document.getElementById("result").innerHTML = "Match Tied";
}

function user_win() {
  let win_title = "You Win";
  document.getElementById("alert").style.display = "block";
  document.getElementById("congratulations").style.display = "block";
  document.getElementById("congratulations").innerHTML = "Congratulations!";
  document.getElementById("result").innerHTML = win_title;
  document.getElementById("user_score").innerHTML = user_Score + 1;
  is_game_completed(win_title);
  user_Score++;
}

function cpu_win() {
  let win_title = "CPU win";
  document.getElementById("alert").style.display = "block";
  document.getElementById("congratulations").style.display = "block";
  document.getElementById("congratulations").innerHTML = "Awwww!";
  document.getElementById("result").innerHTML = "Cpu Win";
  document.getElementById("cpu_score").innerHTML = cpu_Score + 1;
  is_game_completed(win_title);
  cpu_Score++;
}

function is_game_completed(win_title) {
  let win_score = 2;
  if (win_title == "CPU win") {
    if (cpu_Score == win_score) {
      setTimeout(function () {
        document.getElementById("modal_window").style.display = "block";
        document.getElementById("final_result").innerHTML = win_title;
        sad_Audio.play();
      }, 100);
    }
  } else {
    if (user_Score == win_score) {
      setTimeout(function () {
        document.getElementById("modal_window").style.display = "block";
        document.getElementById("final_result").innerHTML = win_title;
        clap_Audio.play();
      }, 100);
    }
  }

  if (cpu_Score == 2) {
    setTimeout(function () {
      document.getElementById("modal_window").style.display = "block";
      document.getElementById("final_result").innerHTML = win_title;
      if (win_title == "CPU win") {
        sad_Audio.play();
      } else {
        clap_Audio.play();
      }
    }, 100);
  }
}

function trial(user_choice) {
  cpu_random_select();

  // get image index by user choice
  let cpu_choice = cpuChoice;
  let index = option_names.indexOf(user_choice);
  let image = choose_img_Array[index];
  // setting heading and image on the screen for user choice
  set_heading_image(user_choice, image);

  // randomly selection of choice for cpu

  // check if the game is tied or not
  if (cpu_choice == user_choice) {
    // Show the tie message to the user on screen
    tie_game();
    return;
  }

  if (user_choice == "Paper") {
    // if user chocie is Paper, and cpu choice is Rock
    if (cpu_choice == "Rock") {
      // show the user winning on the screen
      user_win();
    } else {
      cpu_win();
    }
    return;
  }

  if (user_choice == "Rock") {
    if (cpu_choice == "Paper") {
      cpu_win();
    } else {
      user_win();
    }
    return;
  }

  if (user_choice == "Scissor") {
    if (cpu_choice == "Paper") {
      user_win();
    } else {
      cpu_win();
    }
    return;
  }
}
function close_modal() {
  document.getElementById("modal_window").style.display = "none";
  location.reload();
}
