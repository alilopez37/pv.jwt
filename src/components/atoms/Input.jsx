function Input(props) {
    return ( 
        <input ref={props.val} placeholder={props.placeholder} type="text" />
     );
}

export default Input;