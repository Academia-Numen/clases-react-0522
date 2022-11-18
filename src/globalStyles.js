const centerItems = (direction = 'column', justify = 'center', align = 'center') => (
    { 
        display: 'flex',
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
    }
)

export default centerItems;