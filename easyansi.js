exports.fromHTML = function(text){
  return text.replace(/\<b\>/g, `\x1B[1m`)
  .replace(/\<dim\>/g, "\x1B[2m")
  .replace(/\<i\>/g, `\x1B[3m`)
  .replace(/\<u\>/g, "\x1B[4m")
  .replace(/\<blink\>/g, `\x1B[5m`)
  .replace(/\<s\>/g, "\x1B[9m")
  .replace(/\<\/b\>/g, "\x1B[22m")
  .replace(/\<\/dim\>/g, "\x1B[22m")
  .replace(/\<\/i\>/g, "\x1B[23m")
  .replace(/\<\/u\>/g, "\x1B[24m")
  .replace(/\<\/blink\>/g, "\x1B[25m")
  .replace(/\<\/s\>/g, "\x1B[29m")
}

exports.resetModes = function(){
  return "\x1B[0m";
};
exports.styleMode = function(mode){
  switch(mode){
    case "bold":
      return `\x1B[1m`;
      break;
    case "dim":
      return `\x1B[2m`;
      break;
    case "italic":
      return `\x1B[3m`;
      break;
    case "underline":
      return `\x1B[4m`;
      break;
    case "blink":
      return `\x1B[5m`;
      break;
    case "inverse":
      return `\x1B[7m`;
      break;
    case "hidden":
      return `\x1B[8m`;
      break;
    case "strikethrough":
      return `\x1B[9m`;
      break;
    case "reset":
      return "\x1B[0m";
      break;
  }
};
exports.colorTextMode = function(id){
    if((id >= 30 && id <= 37) || 
       (id >= 39 && id <= 47) || 
       (id == 49) || 
     (id >= 90 && id <= 97) || 
     (id >= 100 && id <= 107)){
  return `\x1B[${parseInt(id)}m`;
    }
};
exports.colorMode16 = function(fob, id){
  return `\x1B[${2+(fob?1:2)}8;5;${parseInt(id)}m`;
}
exports.colorModeRGB = function(fob,r,g,b){
  return `\x1B[${2+(fob?1:2)}8;2;${parseInt(r)};${parseInt(g)};${parseInt(b)}m`
}

exports.clearFromCursor = function(){
  process.stdout.write(`\x1B[0J`)
}
exports.clearToCursor = function(){
  process.stdout.write(`\x1B[1J`)
}
exports.clearScreen = function(){
  process.stdout.write(`\x1B[2J`)
}
exports.clearLineFromCursor = function(){
  process.stdout.write(`\x1B[0K`)
}
exports.clearLineToCursor = function(){
  process.stdout.write(`\x1B[1K`)
}
exports.clearLine = function(){
  process.stdout.write(`\x1B[2K`)
}
exports.requestCursorPos = function() {
  process.stdout.write(`\x1B[6n`)
}
exports.cursorHome = function() {
  process.stdout.write(`\x1B[H`)
}
exports.cursorTo = function(x,y) {
  process.stdout.write(`\x1B[${parseInt(y)};${parseInt(x)}H`)
}
exports.cursorUp = function(num) {
  process.stdout.write(`\x1B[${parseInt(num)}A`)
}
exports.cursorDown = function(num) {
  process.stdout.write(`\x1B[${parseInt(num)}B`)
}
exports.cursorLeft = function(num) {
  process.stdout.write(`\x1B[${parseInt(num)}D`)
}
exports.cursorRight = function(num) {
  process.stdout.write(`\x1B[${parseInt(num)}C`)
}
exports.cursorVisible = function(bool) {
  process.stdout.write(`\x1B[?25`+(bool?"h":"l"))
}
exports.screenMode = function(mode, reset) {
  process.stdout.write(`\x1B[=${parseInt(mode)}${reset?"l":"h"}`)
}
exports.SaveCursorPos = function(isdec) {
  switch(isdec){
    case true:
      process.stdout.write(`\x1B 7`);
      break;
    case false:
      process.stdout.write(`\x1B[s`);
      break;
  }
}

exports.ReturnToSavedPos = function(isdec){
  switch(isdec){
    case true:
      process.stdout.write(`\x1B 8`);
      break;
    case false:
      process.stdout.write(`\x1B[u`);
      break;
  }
}
exports.saveScreen = function() {
  process.stdout.write(`\x1B[?47h`)
}
exports.restoreScreen = function() {
  process.stdout.write(`\x1B[?47l`)
}
