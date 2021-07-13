console.log('***** Music Collection *****')

// Declare empty array
let collection = [];

// Write a function to create album objects and add then to the array
function addToCollection (title, artist, yearPublished){
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
    }
  collection.push(album);
  return album;
}


// Adding albums using the addToCollection function
console.log('Album added: ', addToCollection ('Purple Rain', 'Prince', '1984'))
console.log('Album added: ', addToCollection ('The Questions', 'Kurt Elling', '2018'));
console.log('Album added: ', addToCollection ('Flor', 'Gretchen Parlato', '2021'));
console.log('Album added: ', addToCollection ('Bach Cello Suites', 'Pierre Fournier', '2017'));
console.log('Album added: ', addToCollection ('Night Dreamer', 'Wayne Shorter', '1964'));
console.log('Album added: ', addToCollection ('Stop/Shutup/Shout It Out', 'Bernhoft', '2016'));
console.log('Album added: ', addToCollection ('Djesse Vol. 3', 'Jacob Collier', '2020'));


function showCollection (collectionArray) {
  console.log(collectionArray.length);
  for(let i=0; i<collectionArray.length; i++) {
    console.log('Album collection: ', collectionArray [i]);
    console.log(`${collectionArray [i].title} by ${collectionArray [i].artist}
      published in ${collectionArray [i].yearPublished}`);
  }
}

showCollection (collection);

function findByArtist (artist, collectionArray){
  let resultArray = [];
  for (let i=0; i<collectionArray.length; i++) {
    if (artist === collectionArray [i].artist) {
      resultArray.push (collectionArray [i]);
      console.log(`Adding ${collectionArray [i].title} by
        ${collectionArray [i].artist} to the results array.`);
      console.log(resultArray);
    }
  }
  return resultArray;
}

findByArtist ('Prince', collection);
findByArtist ('Genesis', collection);
findByArtist ('Jacob Collier', collection);
