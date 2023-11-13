input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("C5 G B A F A C5 B ", 120), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("E D E D F D F F ", 120), music.PlaybackMode.UntilDone)
})
