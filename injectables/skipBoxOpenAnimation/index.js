if (blooketUtility.prefs.skipBoxOpenAnimation.value) {
  const cachedTimeout = window.setTimeout;
  window.setTimeout = function () {
    if (
      (arguments[0].toString() ===
        `function(){document.addEventListener("mousedown",t.handleClick,!1)}` &&
        arguments[1] === 3250) ||
      (arguments[0].toString() ===
        `function(){var e=null,n=45,a=Object(w.a)(t.state.unlockedBlook);if(t.canvasParentRef){"Rare"===a?(e=new ae(t.canvasParentRef.offsetWidth/2,t.canvasParentRef.offsetHeight/2,t.p5),n=55):"Epic"===a?(e=new oe(t.canvasParentRef.offsetWidth/2,t.canvasParentRef.offsetHeight/2,t.p5),n=75):"Legendary"===a?(e=new re(t.canvasParentRef.offsetWidth/2,t.canvasParentRef.offsetHeight/2,t.p5),n=110):"Chroma"===a?(e=new se(t.canvasParentRef.offsetWidth/2,t.canvasParentRef.offsetHeight/2,t.p5),n=125):e=new ne(t.canvasParentRef.offsetWidth/2,t.canvasParentRef.offsetHeight/2,t.p5);for(var o=0;o<n;o++)e.addParticle();t.particleSystems.push(e)}}` &&
        arguments[1] === 2000)
    ) {
      arguments[1] = 0;
    }
    return cachedTimeout(...arguments);
  };
  const styleElement = document.createElement("style");
  styleElement.innerHTML =
    `
		.styles__mysteryBoxContainerOpen___39AUK-camelCase {
			animation: styles__open___3b-ns-camelCase 0s linear;
		}
		.styles__unlockedBlook___OyCN3-camelCase {
			animation: styles__fadeInCenter___1y_-9-camelCase 0.5s linear 0.25s forwards;
		}
		.styles__rarityText___12Y8w-camelCase {
			animation: styles__fadeInCenter___1y_-9-camelCase 0.5s linear 0.5s forwards
		}
		`;
  document.body.appendChild(styleElement);
}
