const darkReaderInterval = setInterval(() => {
  if (typeof DarkReader !== "undefined") {
    clearInterval(darkReaderInterval);
    DarkReader.enable();
  }
}, 10);
