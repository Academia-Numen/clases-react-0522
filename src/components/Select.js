
const Select = (props) => {
    const { name, value, changeHandler, label, placeholder, options } = props;
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <select name={name} value={value} onChange={changeHandler}>
                <option disabled value="">{placeholder}</option>
                {options.map((item, index) => (
                    <option key={index} value={item.value}>
                        {item.label}
                    </option>
                ))}
            </select>
        </>
    )
}

export default Select;