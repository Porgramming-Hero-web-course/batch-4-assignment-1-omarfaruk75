
{
//problem-3 


function countWordOccurrences(sentence: string, word: string): number {
  const lowerCaseSentence = sentence.toLowerCase();
  const lowerCaseWord = word.toLowerCase();
  const splitWords = lowerCaseSentence.split(" ");
  const repeatWord = splitWords.filter(splitWords=>splitWords===lowerCaseWord)
  return repeatWord.length

 }
//console.log(countWordOccurrences("I love typescript", "typescript"));


}