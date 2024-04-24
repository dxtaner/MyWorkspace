document.addEventListener("DOMContentLoaded", function () {
  const countdownDateInput = document.getElementById("countdownDate");
  const startCountdownButton = document.getElementById("startCountdown");
  const daysElement = document.getElementById("days");
  const hoursElement = document.getElementById("hours");
  const minsElement = document.getElementById("mins");
  const secondsElement = document.getElementById("seconds");

  let countdownInterval;

  function startCountdown() {
    const countdownDate = new Date(countdownDateInput.value).getTime();

    function updateCountdown() {
      const currentDate = new Date().getTime();
      const timeLeft = countdownDate - currentDate;

      if (timeLeft <= 0) {
        clearInterval(countdownInterval);
        daysElement.innerText = "0";
        hoursElement.innerText = "0";
        minsElement.innerText = "0";
        secondsElement.innerText = "0";
      } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        daysElement.innerText = days;
        hoursElement.innerText = hours;
        minsElement.innerText = minutes;
        secondsElement.innerText = seconds;
      }
    }

    countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
  }

  startCountdownButton.addEventListener("click", function () {
    clearInterval(countdownInterval);
    startCountdown();
  });
});
