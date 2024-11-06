{
    //problem-2

     function removeDuplicates(param:number[]):number[]{
      const uniqueArray:number[] = [...new Set(param)];
      return uniqueArray;
     
     };
    //  const result = removeDuplicates( [1, 2, 2, 3, 4, 4, 5])
    //   console.log(result);
}