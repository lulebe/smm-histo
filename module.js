const speech = require('../../speech/recognition')
const renderer = require('../../renderer')

module.exports = function (data) {}


const voiceErrorDE = () => {
  responsiveVoice.speak('Entschuldigung, es gab einen Fehler.', 'Deutsch Female', {onend: () => {
    renderer.showVoiceOverlay(false)
  }})
}


speech.addCommands({
  "Was färbt die :f Färbung": (f) => {
    switch (f) {
      case "HE":
        responsiveVoice.speak("H.E. färbt Zytoplasma rot und Zellkerne blau.", 'Deutsch Female', {onend: () => {
          renderer.showVoiceOverlay(false)
        }})
        break;
      case "Azan":
        responsiveVoice.speak("Azan färbt alles mögliche so und so.", 'Deutsch Female', {onend: () => {
          renderer.showVoiceOverlay(false)
        }})
        break;
      default:
        voiceErrorDE()
        break;
    }
  }
})