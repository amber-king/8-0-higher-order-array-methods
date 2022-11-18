/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Reorders the array so that the song objects are organized by their runtime. The shortest song should come first.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
function sortByRuntimeAscending(songs) {
  return songs.sort((songA, songB) => songA.runtimeInSeconds - songB.runtimeInSeconds)
  //^--Reading Notes->
  //When we want to sort by something non alphabetical we need to pass sort a callback compare function. 
  //That compareFunction requires two arguments and will allow sort return an array based on the return value of those compared elements.
  //if <0 or >0 or neither is where this return will apply
}

/**
 * Reorders the array so that the song objects are organized by their artist name. The artist that comes last in the alphabet should come first.
 *
 * TIP: "A" and "a" sort differently. To avoid this issue, you may want to use `.toLowerCase()` or `.toUpperCase()`.
 *
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
function sortByArtistNameDescending(songs) {
  return songs.sort((songA, songB) => {
    if (songB.artist.toLowerCase() < songA.artist.toLowerCase())
      return -1
    //^---(-1) means the first value goes before the second value
    else
      if (songA.artist.toLowerCase() > songB.artist.toLowerCase())
        return 1
      //^---()1 means it goes after
      else
        return 0
    //^---(0) means they're equivalent



  })
  //^----tried with toUpperCase() but didn't pass
  //remember to go into the correct part of array, went into songs at first then realize i had to go into songs then artist
  //The sort function uses the comparisons in the function you pass it to sort the function.
}

/**
 * Reorders the array so that the song objects are organized by their song title. The title that comes first in the alphabet should come first.
 *
 * TIP: "A" and "a" sort differently. To avoid this issue, you may want to use `.toLowerCase()` or `.toUpperCase()`.
 *
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
function sortBySongTitleAscending(songs) {
  return songs.sort((songA, songB) => {
    if (songA.title.toLowerCase() < songB.title.toLowerCase())
      return -1
    //^---(-1) means the first value goes before the second value
    else
      if (songA.title.toLowerCase() > songB.title.toLowerCase())
        return 1
      //^---(1) means it goes after
      else
        return 0
    //^---(0) means they're equivalent

  })
}

module.exports = {
  sortByRuntimeAscending,
  sortByArtistNameDescending,
  sortBySongTitleAscending,
};
