require("dotenv").config();
const { Telegraf } = require("telegraf");

const magic_token = "1722875475:AAGEW36sbp2bDrPB4NGKTY5ePe3agHkL_IQ";

const bot = new Telegraf(magic_token);

function start() {
  bot.telegram.setMyCommands([
    { command: "/start", description: "Hello It's Foxy Surprise bot)" },
    { command: "/info", description: "Information about game" },
    {
      command: "/example",
      description: "Show me example of this translation)",
    },
    { command: "/clear", description: "Clear all chat messages" },
  ]);

  bot.command("start", (ctx) => {
    ctx.telegram.sendSticker(
      ctx.chat.id,
      "https://tlgrm.ru/_/stickers/e6e/64b/e6e64b3e-0f82-3804-b920-c738ae81d187/192/19.webp"
    );

    console.log("Some start");
  });

  bot.command("info", (ctx) => {
    ctx.telegram.sendMessage(
      ctx.chat.id,
      "Bot has changed you'r text on the stickers or smiles"
    );
  });

  bot.command("example", (ctx) => {
    ctx.telegram.sendMessage(ctx.chat.id, "translation example");
  });

  bot.command("clear", (ctx) => {
    for (let i = 0; i < ctx.message.message_id; i++) {
      ctx.deleteMessage(i + 1);
    }
  });

  bot.on("message", (ctx) => {
    ctx.telegram.sendMessage(ctx.chat.id, ctx.chat.type);
  });
}

start();

//module.exports = bot;
