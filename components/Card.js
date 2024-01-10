const Card = ({ data }) => {
  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item.rank}>
            <p>{item.rank}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
