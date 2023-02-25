import "./Card.css";

// It's a wrapper component which props.children is the content
const Card = (props) => {
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
}

export default Card;
