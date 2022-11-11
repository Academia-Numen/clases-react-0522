import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = (props) => {
    const { name, size, color = '', rotate = false, text = '' } = props;
    return (
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center',
            fontSize: size, 
            color: color,
        }}>
            <FontAwesomeIcon 
                icon={name} 
                className={rotate ? "fa-spin" : ""} 
            />
            {text && text}
        </div>
    )
}

export default Icon;