import React from 'react';

const CustomButton = ({title,color}) => {

    const buttonColor= color === "primary"
 ? ("blue")
    :(color === "secondary" 
        ? ("green")
            :(color === "danger" 
                ? ("red") 
                : ("yellow")
    )
)
const buttonStyle = {
    backgroundColor: buttonColor,
    FontSize: 16,
    Padding: 10,
    height: 40,
    width: 100,
}
    return (
        <button style={buttonStyle}>{title}</button>
    );
};

export default CustomButton;