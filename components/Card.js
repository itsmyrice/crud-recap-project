import Image from "next/image";

const Card = ({ data }) => {
  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item.rank}>
            <p>{item.heroName}</p>
            <p>{item.rank}</p>            
            <Image src={item.imgURL} width={400} height={200} alt={item.heroName}>{}</Image>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
