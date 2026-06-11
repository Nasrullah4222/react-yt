const Card = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt="" />
      <h1>
        {props.user}, {props.age}
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
        doloribus quos dolorem corporis ratione facere accusamus nemo fugit
        quam, repudiandae cumque ut iusto libero, earum dolores iure atque eius
        velit.
      </p>
      <button>View Profile</button>
    </div>
  );
};

export default Card;
