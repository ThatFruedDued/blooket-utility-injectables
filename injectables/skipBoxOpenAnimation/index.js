if (blooketUtility.prefs.skipBoxOpenAnimation.value) {
  const cachedTimeout = window.setTimeout;
  window.setTimeout = function () {
    if (
      (arguments[0].toString().trim() ===
        `function(){document.addEventListener("mousedown",t.handleClick,!1)}` &&
        arguments[1] === 3250) ||
      (arguments[0].toString().trim() ===
        `function(){var e=null,n=45,r=Object(w.a)(t.state.unlockedBlook);if(t.canvasParentRef){"Rare"===r?(e=new re(t.canvasParentRef.offsetWidth/2,t.canvasParentRef.offsetHeight/2,t.p5),n=55):"Epic"===r?(e=new oe(t.canvasParentRef.offsetWidth/2,t.canvasParentRef.offsetHeight/2,t.p5),n=75):"Legendary"===r?(e=new ae(t.canvasParentRef.offsetWidth/2,t.canvasParentRef.offsetHeight/2,t.p5),n=110):"Chroma"===r?(e=new ie(t.canvasParentRef.offsetWidth/2,t.canvasParentRef.offsetHeight/2,t.p5),n=125):e=new ne(t.canvasParentRef.offsetWidth/2,t.canvasParentRef.offsetHeight/2,t.p5);for(var o=0;o<n;o++)e.addParticle();t.particleSystems.push(e)}}` &&
        arguments[1] === 2000)
    ) {
      arguments[1] = 0;
    }
    return cachedTimeout(...arguments);
  };
  const styleElement = document.createElement("style");
  styleElement.innerHTML =
`
.styles__mysteryBoxContainerOpen___3Kaky-camelCase {
	animation: styles__open___3b-ns-camelCase 0s linear;
}
.styles__unlockedBlook___2pr1Z-camelCase {
	animation: styles__fadeInCenter___1y_-9-camelCase 0.5s linear 0.25s forwards;
}
.styles__rarityText___1PfSA-camelCase {
	animation: styles__fadeInCenter___1y_-9-camelCase 0.5s linear 0.5s forwards
}
`;
  document.body.appendChild(styleElement);
}
