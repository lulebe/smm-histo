const speech = require('../../speech/recognition')
const renderer = require('../../renderer')

module.exports = function (data) {}

const responses = {
  'he': "HE färbt basophile Strukturen, darunter Zellkerne oder Ribosomen, blau. Plasmaproteine, Kollagen, Mitochondiren und glattes ER werden rot gefärbt.",
  'azan': "Mit Azan erscheinen Zellkerne tief rot, Plasma blass rot, Muskelgewebe orange-rot und Kollagene bläulich. Elastische Fasern sind, wenn überhäupt, leicht rötlich."
}

const voiceErrorDE = (f) => {
  responsiveVoice.speak('Entschuldigung, die Färbung ' + f + ' kenne ich nicht.', 'Deutsch Female', {onend: () => {
    renderer.showVoiceOverlay(false)
  }})
}


speech.addCommands({
  "Was färbt die :f Färbung": (f) => {
    const value = f.toLowerCase().replace(new RegExp('[^A-Za-z]', 'g'), '')
    if (responses[value])
      responsiveVoice.speak(responses[value], 'Deutsch Female', {onend: () => {
        renderer.showVoiceOverlay(false)
      }})
    else
      voiceErrorDE(f)
  }
})