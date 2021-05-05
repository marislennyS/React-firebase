const Button = ({
    onclick = null,
    children = null
}) =>

(
    <button onClick={onclick}> {children} </button>
);

export default Button;