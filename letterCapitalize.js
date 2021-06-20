// Have the function LetterCapitalize(str) take the str parameter being passed
// and capitalize the first letter of each word. Words will be separated by only
// one space. Examples Input: "hello world" Output: Hello World Input: "i ran
// there" Output: I Ran There

function LetterCapitalize(str) {
  const stringArray = str.split(" ");

  return stringArray
    .map(
      (stringItem) =>
        stringItem.charAt(0).toUpperCase() +
        stringItem.slice(1, stringItem.length)
    )
    .join(" ");
}

// keep this function call here
console.log(LetterCapitalize(readline()));
