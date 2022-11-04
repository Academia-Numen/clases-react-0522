
const InputText = (props) => {
    const { value, changeHandler, label, name } = props;
    return (
        <div>
            <label htmlFor={name}>
                {label}
            </label>
            <input 
                type="text" 
                name={name} 
                value={value} 
                onChange={changeHandler} 
            />
        </div>
    )
}

export default InputText;