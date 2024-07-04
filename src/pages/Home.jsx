import { useState } from "react";

function Home() {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const handleChangeName = (e) => {
        setName(e.target.value)  
    }
    const handleChangeLastName = (e) => {
        setLastName(e.target.value)
    }
    const handleClick = (e) => {
        e.preventDefault()
        fetch(`${import.meta.env.VITE_URL}/users/103`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin':'*'
            },
            body:JSON.stringify({
                'name':name,
                'lastname':lastName
            })
        })
        .then(response=>{
            if(response.ok)
                return response.json()
        })
        .then(data=>{
            console.log(data);
        })
        .catch(error=>{
            console.log(error);
        }) 
    }

    return ( 
        <form>
            <label>Name
                <input type="text" value={name} onChange={handleChangeName}/>
            </label>
            <label>Lastname
                <input type="text" value={lastName} onChange={handleChangeLastName} />
            </label>
            <button onClick={handleClick}>Insertar registro</button>
        </form>
     );
}

export default Home;