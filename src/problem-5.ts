{

//problem-5
type Person={
    name:string,
    age:number
}
const person:Person = {
    name:"Alice",
    age:38,
}

const getProperty = <T,K extends keyof T>(obj:T,key:K):T[K]=>{

    return obj[key]
}
//console.log(getProperty(person,"name"));





}