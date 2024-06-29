setInterval(() => {
  var skipButton = document.getElementsByClassName("ytp-skip-ad-button");
  if (skipButton != undefined && skipButton.length > 0) {
    console.log("clicked");
    skipButton[0].click();
  }
}, 2000);
