{
    //problem-1

    function sumArray(param:number[]):number{
        const sumOfArrayElement = param.reduce((acc,curr)=>acc+curr,0);
        return sumOfArrayElement;
    }
   const result =  sumArray([1,2,3,4,5]);
   console.log(result);




}