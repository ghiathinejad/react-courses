import { useState } from "react";
const HookObject = () => {
    const [person,setPerson] = useState(
        {
            name:"",
            lastName:""
        }
    );

    const nameHandler = (e) =>{
        setPerson({...person , name : e.target.value});
    };
    const lastNameHandler = (e) =>{
        setPerson({...person , lastName : e.target.value});
    };;
    return ( 
        <form>
            <input type="text" name="name" value={person.name} onChange={nameHandler} />
            <input type="text" name="lastName" value={person.lastName} onChange={lastNameHandler} />
            <h2>my name is {person.name} and my last name is {person.lastName}</h2>
            <div>{JSON.stringify(person)}</div>
        </form>

     );
}
 
export default HookObject;