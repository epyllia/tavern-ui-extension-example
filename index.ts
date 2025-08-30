// Assume that I will run a bundler on this file to fix up the "./SillyTavern/..."
// paths, so that in the resulting output file, they point to the correct
// location relative to the SillyTavern website root.
import { SlashCommandParser } from "./SillyTavern/public/scripts/slash-commands/SlashCommandParser";
import { SlashCommand } from "./SillyTavern/public/scripts/slash-commands/SlashCommand";

SlashCommandParser.addCommandObject(
  SlashCommand.fromProps({
    callback: async () => {
      console.log("Hello, world!");
      return "";
    },
    name: "hello-world",
  })
);
