async function runScript(path) {
  eval(
    await (
      await fetch(
        "https://raw.githubusercontent.com/glixzzy/blooket-hack/main/" + path
      )
    ).text()
  );
}
blooketUtility.api.gui.glixzzy = {
  title: "Glixzzy",
  ...[
    {
      title: "Battle Royale",
      ...[
        {
          isButton: true,
          title: "Auto Answer",
          onClick: () => runScript("battle-royale/autoAnswer.js"),
        },
      ],
    },
    {
      title: "Blook Rush",
      ...[
        {
          isButton: true,
          title: "Set Blooks",
          onClick: () => runScript("blook-rush/setBlooks.js"),
        },
        {
          isButton: true,
          title: "Set Defense",
          onClick: () => runScript("blook-rush/setDefense.js"),
        },
      ],
    },
    {
      title: "Cafe",
      ...[
        {
          isButton: true,
          title: "Get Coins",
          onClick: () => runScript("cafe/getCoins.js"),
        },
        {
          isButton: true,
          title: "Infinite Food Level",
          onClick: () => runScript("cafe/infiniteFoodLevel.js"),
        },
        {
          isButton: true,
          title: "Stock Infinite Food",
          onClick: () => runScript("cafe/stockInfiniteFood.js"),
        },
      ],
    },
    {
      title: "Classic",
      ...[
        {
          isButton: true,
          title: "Auto Answer",
          onClick: () => runScript("classic/autoAnswer.js"),
        },
      ],
    },
    {
      title: "Crazy Kingdom",
      ...[
        {
          isButton: true,
          title: "Choice ESP",
          onClick: () => runScript("crazy-kingdom/choiceESP.js"),
        },
        {
          isButton: true,
          title: "Max Resources",
          onClick: () => runScript("crazy-kingdom/maxResources.js"),
        },
        {
          isButton: true,
          title: "No Taxes",
          onClick: () => runScript("crazy-kingdom/noTaxes.js"),
        },
        {
          isButton: true,
          title: "Set Guests",
          onClick: () => runScript("crazy-kingdom/setGuests.js"),
        },
        {
          isButton: true,
          title: "Skip Guests",
          onClick: () => runScript("crazy-kingdom/skipGuests.js"),
        },
      ],
    },
    {
      title: "Crypto",
      ...[
        {
          isButton: true,
          title: "Get Crypto",
          onClick: () => runScript("crypto/getCrypto.js"),
        },
        {
          isButton: true,
          title: "Get Other Users Password",
          onClick: () => runScript("crypto/getOtherUsersPassword.js"),
        },
      ],
    },
    {
      title: "Factory",
      ...[
        {
          isButton: true,
          title: "Get Cash",
          onClick: () => runScript("factory/getCash.js"),
        },
        {
          isButton: true,
          title: "Get Mega Bot",
          onClick: () => runScript("factory/getMegaBot.js"),
        },
      ],
    },
    {
      title: "Fishing Frenzy",
      ...[
        {
          isButton: true,
          title: "Set Weight",
          onClick: () => runScript("fishing-frenzy/setWeight.js"),
        },
      ],
    },
    {
      title: "Global",
      ...[
        {
          isButton: true,
          title: "Add Tokens",
          onClick: () => runScript("global/addTokens.js"),
        },
        {
          isButton: true,
          title: "Get All Blooks In Game",
          onClick: () => runScript("global/getAllBlooksInGame.js"),
        },
        {
          isButton: true,
          title: "Get Every Answer Correct",
          onClick: () => runScript("global/getEveryAnswerCorrect.js"),
        },
        {
          isButton: true,
          title: "Sell Dupe Blooks",
          onClick: () => runScript("global/sellDupeBlooks.js"),
        },
        {
          isButton: true,
          title: "Spam Open Boxes",
          onClick: () => runScript("global/spamOpenBoxes.js"),
        },
      ],
    },
    {
      title: "Gold",
      ...[
        {
          isButton: true,
          title: "Chest ESP",
          onClick: () => runScript("gold/chestESP.js"),
        },
        {
          isButton: true,
          title: "Get Gold",
          onClick: () => runScript("gold/getGold.js"),
        },
      ],
    },
    {
      title: "Racing",
      ...[
        {
          isButton: true,
          title: "Instant Win",
          onClick: () => runScript("racing/instantWin.js"),
        },
      ],
    },
    {
      title: "Tower of Doom",
      ...[
        {
          isButton: true,
          title: "Add Coins",
          onClick: () => runScript("tower-of-doom/addCoins.js"),
        },
        {
          isButton: true,
          title: "Lower All Enemy Stats",
          onClick: () => runScript("tower-of-doom/lowerAllEnemyStats.js"),
        },
        {
          isButton: true,
          title: "Lower Enemy Charisma",
          onClick: () => runScript("tower-of-doom/lowerEnemyCharisma.js"),
        },
        {
          isButton: true,
          title: "Lower Enemy Strength",
          onClick: () => runScript("tower-of-doom/lowerEnemyStrength.js"),
        },
        {
          isButton: true,
          title: "Lower Enemy Wisdom",
          onClick: () => runScript("tower-of-doom/lowerEnemyWisdom.js"),
        },
        {
          isButton: true,
          title: "Max Out Stats",
          onClick: () => runScript("tower-of-doom/maxOutStats.js"),
        },
      ],
    },
  ],
};
