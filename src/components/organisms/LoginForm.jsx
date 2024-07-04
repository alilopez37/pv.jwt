import { useRef } from "react";

function LoginForm() {
    const usernameRef = useRef('')
    const passwordRef = useRef('')

    const handleClick = (e)=> {
        
        fetch(`${import.meta.env.VITE_URL}/auth/login`,{
            method:'POST',
            headers: {
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                username:usernameRef.current.value,
                password: passwordRef.current.value
            })
        })
        .then(response => {
            if (response.ok)
                return response.json()
        })
        .then(data=>{
            localStorage.setItem('token',data.token)

        })
        .catch(error=>{
            console.log(error);
        })
    }

    const handleClientsClick = (e)=> {
        
        fetch(`${import.meta.env.VITE_URL}/clientes`,{
            method:'GET',
            headers: {
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': localStorage.getItem('token')
            }
        })
        .then(response => {
            if (response.ok)
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
        <div className="size-1/2 border-solid border-1 border-blue-600 bg-gray-200">
            <div>
                <label htmlFor="">Username:
                    <input className="border-solid border-2 border-gray-300" type="text" ref={usernameRef}/>
                </label>
            </div>
            <div>
            <label htmlFor="">Password:
                    <input className="border-solid border-2 border-gray-300" type="password" ref={passwordRef}/>
                </label>
            </div>
            <div>
                <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={handleClick}>Iniciar sesión</button>
                <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={handleClientsClick}>Mostrar Clientes</button>
            </div>
        </div>
     );
}

export default LoginForm;