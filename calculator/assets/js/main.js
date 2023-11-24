$(document).ready(() => {
  // Add function to each key
  $(".body").on("click", ".key", function () {
    let keyValue = $(this).text();
    $(".problem").text($(".problem").text() + keyValue);
  });

  // Calculate
  $("#calculate-btn").click(() => {
    let problem = $(".problem").text();
    let answer = eval(problem);
    $(".answer").text(answer);
  });
  

  // Clear
  $("#clear").click(() => {
    $(".problem").text("");
    $(".answer").text("0");
  });
}); //main
