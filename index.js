// class Music {
//   constructor(name, author, type, year, duration, time, id, link) {
//     this.name = name;
//     this.author = author;
//     this.type = type;
//     this.year = year;
//     this.duration = duration;
//     this.time = time;
//     this.id = id;
//     this.link = link;
//   }
// }
// let song1 = new Music(
//   "Yetmasmidi",
//   "Jaloliddin Ahmadaliev",
//   "Rock",
//   "2023",
//   "[Jalolidin Ahmadaliev,Munisa Rizaeva,Shoxrux Ergashev...]",
//   "420-sekund",
//   "ID19178",
//   "https://youtu.be/dDIuu6otnQU"
// );
// console.log(song1);

// class MusicFile {
//   constructor(name, artist, album, duration, file_path) {
//     this.name = name;
//     this.artist = artist;
//     this.album = album;
//     this.duration = duration;
//     this.file_path = file_path;
//   }
// }

// function createMusicArray(name, artist, album, duration, file_path, count) {
//   let musicArray = [];
//   for (let i = 0; i < count; i++) {
//     let music = new MusicFile(name, artist, album, duration, file_path);
//     musicArray.push(music);
//   }
//   return musicArray;
// }

// // Example usage
// let myMusicArray = createMusicArray(
//   "Yor-yor",
//   "Alisher Sharipov",
//   "NevoMusic",
//   "Alisher Sharipov",
//   "https://youtu.be/9FpoqzokXPM",
//   +prompt("ixtiyori soni kiriting")
// );
// console.log(myMusicArray);

function removeDuplicates(arr) {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
}

// Test
const arr = ["Yetmasmidi", "yor - yor", "ganimat", "zirapcha", "Yetmasmidi"];
const uniqueArr = removeDuplicates(arr);
console.log(uniqueArr); // Natija: [1, 2, 3, 4, 5]
