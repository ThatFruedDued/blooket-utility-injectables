if (blooketUtility.prefs.infiniteFactory.value) {
  Object.defineProperty(Object.prototype, "timerInterval", {
    get: function () {
      return -1;
    },
    set: function (d) {
      clearInterval(d);
    },
  });
}
