import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Agregar Timer para que el mensaje/icono pueda desaparecer

const Icon = (props) => {
    const { 
        name,
        size,
        color = '',
        rotate = false,
        text = '',
        onClick = undefined,
        clickable = false,
    } = props;

    return (
        <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center',
                fontSize: size, 
                color: color,
                cursor: clickable ? 'pointer' : '',
            }}
            onClick={onClick}
        >
            <FontAwesomeIcon 
                icon={name} 
                className={rotate ? "fa-spin" : ""} 
            />
            {text && text}
        </div>
    )
}

export default Icon;