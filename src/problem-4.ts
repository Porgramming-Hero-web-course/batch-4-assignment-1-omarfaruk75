{

//problem-4

type TCircle = {
    shape:"circle",
    radius:number
}
type TRectangle = {
    shape:"rectangle",
    height:number,
    width:number
}
type tShape = TCircle|TRectangle;
 const calculateShapeArea = (param: tShape): number=>{
    if(param.shape==="circle" ){
        const circle = param as TCircle;
         return Math.PI * circle.radius ** 2
    }else if (param.shape === "rectangle") {
        const rectangle = param as TRectangle;
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