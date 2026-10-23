"use strict";

const base = require("@playwright/test");

// Browser tests reveal cards, which plays VOICEVOX clips and speechSynthesis
// through the speakers. Every page in a test's context starts muted: media
// elements play muted and utterances speak at volume 0, so the playback code
// paths still run and tests that replace play() or speak() keep working.
function muteAudio() {
  const play = HTMLMediaElement.prototype.play;
  HTMLMediaElement.prototype.play = function mutedPlay(...args) {
    this.muted = true;
    return play.apply(this, args);
  };
  if (window.SpeechSynthesis) {
    const speak = SpeechSynthesis.prototype.speak;
    SpeechSynthesis.prototype.speak = function silentSpeak(utterance) {
      if (utterance) utterance.volume = 0;
      return speak.call(this, utterance);
    };
  }
}

const test = base.test.extend({
  context: async ({ context }, use) => {
    await context.addInitScript(muteAudio);
    await use(context);
  },
});

module.exports = { ...base, test };
