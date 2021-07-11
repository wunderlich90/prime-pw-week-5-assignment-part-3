console.log('***** Music Collection *****')

let collection = [];

function addToCollection (title, artist, yearPublished){
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
    }
  collection.push(album);
  return album;
}

addToCollection ('Purple Rain', 'Prince', '1984');
addToCollection ('The Questions', 'Kurt Elling', '2018');
addToCollection ('Flor', 'Gretchen Parlato', '2021');
addToCollection ('Bach Cello Suites', 'Pierre Fournier', '2017');
addToCollection ('Night Dreamer', 'Wayne Shorter', '1964');
addToCollection ('Stop/Shutup/Shout It Out', 'Bernhoft', '2016');
addToCollection ('Djesse Vol. 3', 'Jacob Collier', '2020');

//console.log(collection);

function showCollection (collectionArray[]) {
  
}
