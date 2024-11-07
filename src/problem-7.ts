{
//problem-7

class Car {
    constructor ( public make:string,public model:string,public year:number){}
    getCarAge():number{
    const currentYear= new Date().getFullYear();
    const carsAge = currentYear-this.year;
    return carsAge;
}
}

//const car = new Car("Honda", "Civic", 2018);
//console.log(`${car.getCarAge()},(assuming current year is ${new Date().getFullYear()})`);;








}