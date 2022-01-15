import got from "got";
import TelegramBot from "node-telegram-bot-api";
import cheerio from "cheerio";

// The Telegram token you received from @BotFather
const BOT_TOKEN = `${process.env.BOT_TOKEN}`;
const DICTIONARY_URL =
  "https://www.greek-language.gr/greekLang/modern_greek/tools/lexica/triantafyllides/search.html";
const MAX_STRING_SIZE = 4096;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(BOT_TOKEN, { polling: true });

// Matches everythins
bot.onText(/(.+)/, async (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const word = match[1]; // the captured text

  try {
    const { body } = await request(word);
    const trans = extractLemma(body);

    // check msg size cause library has limits and break msg in multiple messages
    const numOfMessages = Math.ceil(trans.length / MAX_STRING_SIZE);

    for (let i = 1; i <= numOfMessages; i++) {
      const start = (i - 1) * MAX_STRING_SIZE;
      const end = i * MAX_STRING_SIZE;
      let part = trans.substring(start, end);
      bot.sendMessage(chatId, part);
    }

    console.log("Searched: ", word);
  } catch (error) {
    console.error("Error: ", error.message);
  }
});

const extractLemma = html => {
  const $ = cheerio.load(html);
  const trans = $("#lemmas").text();
  return trans ? trans : "Δε βρέθηκε αποτέλεσμα";
};

const request = async word => {
  return got({
    url: DICTIONARY_URL,
    searchParams: {
      lq: word,
    },
  });
};
