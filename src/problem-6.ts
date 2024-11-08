{

//problem-6

interface IProfile  {
     name: string,
     age:number,
     email: string;
   
    }
    
    const myProfile:IProfile =  { 
        name: "Alice", 
        age: 25, 
        email: "alice@example.com" 
    };
   
const updateProfile=(obj:IProfile,updates: Partial<IProfile>):IProfile=>{
    return {...obj,...updates};
}
// console.log(updateProfile(myProfile,{age:26}));








}