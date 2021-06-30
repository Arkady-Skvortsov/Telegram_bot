require("dotenv").config();
const { Telegraf } = require("telegraf");
const { stickers_hash } = require("./stickers");

const bot = new Telegraf(process.env.BOT_TOKEN);

function start() {
  bot.telegram.setMyCommands([
    { command: "/start", description: "Hello It's Foxy Surprise bot)" },
    { command: "/info", description: "Information about transformation" },
    {
      command: "/example",
      description: "Show me example of this translation)",
    },
    { command: "/clear", description: "Clear all chat messages" },
  ]);

  bot.command("start", (ctx) => {
    ctx.telegram.sendSticker(
      ctx.chat.id,
      "https://tlgrm.ru/_/stickers/b7a/1fc/b7a1fcc6-af74-34d0-bfde-69f003ae272c/5.webp"
    );
  });

  bot.command("info", (ctx) => {
    ctx.telegram.sendMessage(
      ctx.chat.id,
      "Bot has changed you'r text on the stickers or smiles"
    );
  });

  bot.command("example", (ctx) => {
    ctx.telegram.sendMessage(
      ctx.chat.id,
      "example of translation you'r text into stickers",
      {
        reply_markup: {
          inline_keyboard: [[{ text: "Привет", callback_data: "1" }]],
        },
      }
    );

    bot.on("callback_query", (_) => {
      ctx.telegram.sendSticker(
        ctx.chat.id,
        "https://tlgrm.ru/_/stickers/b7a/1fc/b7a1fcc6-af74-34d0-bfde-69f003ae272c/5.webp"
      );
    });
  });

  bot.command("clear", (ctx) => {
    for (let i = 0; i < ctx.message.message_id; i++) {
      ctx.deleteMessage(i + 1);
    }
  });

  bot.on("message", (ctx) => {
    stickers_hash.map((s_hash) => {
      for (let [key, value] of Object.entries(s_hash)) {
        return ctx.message.text.includes(key)
          ? ctx.telegram.sendSticker(ctx.chat.id, value)
          : null;
      }
    });

    ctx.telegram.sendMessage(ctx.chat.id, ctx.message.text);
  });

  bot.launch();
}

start();

module.exports = bot;
