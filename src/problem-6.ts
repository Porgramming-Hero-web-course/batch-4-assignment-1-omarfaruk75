{

//problem-6

interface Profile  {
     name: string,
     age:number,
     email: string;
   
    }
    
    const myProfile:Profile =  { 
        name: "Alice", 
        age: 25, 
        email: "alice@example.com" 
    };
   
const updateProfile=(obj:Profile,updates: Partial<Profile>):Profile=>{
    return {...obj,...updates};
}
// console.log(updateProfile(myProfile,{age:26}));








}