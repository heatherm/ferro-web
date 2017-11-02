// 'use strict'
//
// function createAudioElement(blobUrl) {
//   var parent = document.getElementById("sound")
//   while (parent.firstChild) {
//     parent.removeChild(parent.firstChild)
//   }
//
//   const downloadEl = document.createElement('a')
//   downloadEl.style = 'display: block'
//   downloadEl.innerHTML = 'download'
//   downloadEl.download = 'audio.webm'
//   downloadEl.href = blobUrl
//
//
//   const audioEl = document.createElement('audio')
//   audioEl.controls = true
//   const sourceEl = document.createElement('source')
//   sourceEl.src = blobUrl
//   sourceEl.type = 'audio/webm'
//
//   audioEl.appendChild(sourceEl)
//   parent.appendChild(audioEl)
//   parent.appendChild(downloadEl)
//
//   var sound = new p5.SoundFile(blobUrl,
//     function(){
//       $('.record-button').text('Record for 1 second')
//       var peaks = sound.getPeaks()
//       console.log(peaks + '')
//   }, function(){
//
//   })
//
//
//
// }
//
//
// var recordNoise = function (e) {
//   $('.record-button').text('Recording...')
//   navigator.mediaDevices.getUserMedia({audio: true}).then(function (stream) {
//     const chunks = []
//     const recorder = new MediaRecorder(stream)
//
//     recorder.ondataavailable = function (e) {
//       chunks.push(e.data)
//       if (recorder.state == 'inactive') {
//
//         const blob = new Blob(chunks, {type: 'audio/webm'})
//         createAudioElement(URL.createObjectURL(blob))
//       }
//     }
//     recorder.start(1000)
//     setTimeout(function () {
//       recorder.stop()
//     }, 1000)
//   }).catch(console.error)
// }