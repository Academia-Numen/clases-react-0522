
const Checkbox = (props) => {
    const { value, changeHandler, label, name } = props;
    return (
        <div>
            <label htmlFor={name}>
                {label}
            </label>
            <input 
                type="checkbox" 
                name={name} 
                value={value} 
                checked={value}
                onChange={changeHandler} 
            />
        </div>        
    )
}

export default Checkbox;