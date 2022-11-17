/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Logs out all of the song titles.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 */
function printAllSongTitles(songs) {
  return songs.forEach((songs) => {
    console.log(songs.title)
    //--^songs.title to return the title of each son AFTER the whole songs array in iterated through--Line 6^
  });
}

/**
 * Logs out the song title and song artist.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 *
 * EXAMPLE:
 *  printSongDetails(songs);
 *  //> "Berlin Tsukin by Taiyo Ky"
 *  //> "Up by Sebastian Kamae"
 *  //> ...
 */
function printSongDetails(songs) {
  return songs.forEach((songs) => {
    console.log(`${songs.title} by ${songs.artist}`)

  });//^--Line 33--tried putting all desired info in the forEach() but remebered if it is not truthy with cdesired console.log()then it will not pass the test
  //^--Line 34---remeber to pull all desired info w/ an example like this, it will not pass if something is missing in console.log(), i.e=> songs.title , artist<=artist was considered not declared because i needed song.artist
}

/**
 * Logs out all of the song titles which have a runtime over three minutes.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 */
function printSongTitlesOverThreeMinutes(songs) {
  return songs.forEach(songs => {
    if (songs.runtimeInSeconds > 180)
      console.log(songs.title)

  })
}


module.exports = {
  printAllSongTitles,
  printSongDetails,
  printSongTitlesOverThreeMinutes,
};
