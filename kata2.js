let empty = '            ola        bb';
let space = "   ";
let have = "Do we have a hashtag";
let test = "Test";
let codewars = "Codewar Is Nice";
let moreThan140 = "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooool"
let repeat139 = "a".repeat(139);
let repeat140 = "a".repeat(140);

function generateHashtag(string) {
  if (string.trim() === '') return false;

  const string2= string
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');

  const stringWithHashtag = `#${string2.trim()}`;

  return stringWithHashtag.length > 140 ? false : stringWithHashtag;
}

console.log(generateHashtag(empty));
console.log(generateHashtag(space));
console.log(generateHashtag(have));
console.log(generateHashtag(test));
console.log(generateHashtag(codewars));
console.log(generateHashtag(moreThan140));
console.log(generateHashtag(repeat139));
console.log(generateHashtag(repeat140));