
{
//problem-3 

function countWordOccurrences(sentence: string, word: string): number {
  const lowerCaseSentence = sentence.toLowerCase();
  const lowerCaseWord = word.toLowerCase();
  const repeatWord = lowerCaseSentence.split(lowerCaseWord);

    return repeatWord.length - 1;
 }
  

// console.log(countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript"));


}