
const Form = (props) => {
    const { send, children } = props;
    return (
        <form onSubmit={send}>
            { children }
        </form>
    )
}

export default Form;