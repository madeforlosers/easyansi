# easyansi docs

## Todo: Table of contents

## `fromHTML(html)`

Turns a tiny amount of HTML blocks into ANSI escape sequences. this supports:

- \<b>
- \<dim>
- \<i>
- \<u>
- \<blink>
- \<s>

## `resetModes()`
Resets all modes.

## `colorTextMode(id)`
This command returns a ANSI escape sequence of one of 10 colors (that is specified with `id`) mostly supported in text terminals. This includes `default` and `reset`. the IDs are listed below:

|Color|Foreground id|Background id|
|-|-|-|
|Black|30|40|
|Red|31|41|
|Green|32|42|
|Yellow|33|43|
|Blue|34|44|
|Magenta|35|45|
|Cyan|36|46|
|White|37|47|
|Default|39|49|
|Reset|0|0|


## `colorMode16(fob, id)`
This returns the ANSI escape sequence of a 16 bit color (specified with `id` variable) in either the foreground or background (specified with `fob`, being true and false respectively). the number can be 1 through 255.

## `colorModeRGB(fob, r, g, b)`
This returns the ANSI escape sequence of an RGB color (specified with variables `r`, `g`, and `b`) in either the foreground or background (specified with `fob`, being true and false respectively). this is for terminals with TrueColor support.

## `styleMode(style)` 
This returns the ANSI escape sequence of one of nine different styles given, them being **bold**, **dim**, **italic**, **underline**, **blink**, **inverse**, **hidden**, **strikethrough**, and **reset**. Style is supposed to be a string and you are supposed to give the style *name* and not the code.

## `clearFromCursor()`
Clears all lines, starting from the cursor.

## `clearToCursor()`
Clears all lines, ending at the cursor.

## `clearScreen()`
Clears the entire screen. 

## `clearLineFromCursor()`
Clears the line, starting from the cursor.

## `clearLineToCursor()`
Clears the line, ending at the cursor.

## `clearLine()`
Clears the entire line.

## `requestCursorPos()`
Requests the cursor position(?) I'm not sure, I never got it to work.

## `cursorHome()`
Returns the cursor to home.

## `cursorTo(x, y)`
Moves the cursor to a specific x and y axis. or, if you want to be specific, a specific column and row. 

## `cursorUp(num)`
Moves cursor up specified amount of times.

## `cursorDown(num)`
Moves cursor down specified amount of times.

## `cursorLeft(num)`
Moves cursor left specified amount of times.

## `cursorRight(num)`
Moves cursor right specified amount of times.

## `cursorVisible(boolean)`
Makes the cursor either visible or invisible.

## `screenMode(mode, reset)`
Sets (or resets, if you set `reset` variable as `true`) a given screen mode. I have no idea how this works, use this if you're smart I guess.

## `saveCursorPos()`
Saves the position of the cursor.

## `returnToSavedPos()`
Returns the cursor to the saved position.

## `saveScreen()`
Saves the screen.

## `restoreScreen()`
Restores the saved screen.
