
const Button = ({children, ...rest}) => {
    return (
        <>
            <button rest={rest}>{children}</button>
        </>
    )
}

export default Button