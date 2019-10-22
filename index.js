import { gitmojis } from "./gitmoji/src/data/gitmojis.json";

module.exports = gitmojis.map(({ emoji, code, description }) => ({
  emoji,
  name: code.substring(1, code.length),
  description
}));
