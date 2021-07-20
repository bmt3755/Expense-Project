import "./Card.css";

function Card(props) {
    const classes = `card ${props.className}`;
    return(      
        //props.children is used for wrapper components  
        <div className={classes}>{props.children}</div>
    );
};


export default Card;