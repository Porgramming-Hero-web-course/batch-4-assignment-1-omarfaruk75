{

//problem-4

type Circle = {
    shape:"circle",
    radius:number
}
type Rectangle = {
    shape:"rectangle",
    height:number,
    width:number
}
type Shape = Circle|Rectangle;
 const calculateShapeArea = (param: Shape): number=>{
    if(param.shape==="circle" ){
        const circle = param as Circle;
         return Math.PI * circle.radius ** 2
    }else if (param.shape === "rectangle") {
        const rectangle = param as Rectangle;
        return param.height * rectangle.width;
    } else {
        throw new Error("Unknown shape type");
    }
   
}
// const resCircle = calculateShapeArea({ shape: 'circle', radius:5  })
// console.log(resCircle);
// const resRectandle = calculateShapeArea({ shape: 'rectangle', height:4,width:6 })
// console.log({resRectandle});














}