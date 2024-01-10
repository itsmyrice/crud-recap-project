import Image from "next/image";
import Link from "next/link";

const Card = ({ data }) => {
  return (
    <div>
      {data.map((item) => 
        (
        <div key={item._id}>
            <p>{item.heroName}</p>
            <p>{item.rank}</p>
            <Image src={item.imgURL} width={400} height={200} alt={item.heroName}></Image>
            <Link href={`./heroes/${item._id}`}> DETAILS </Link>
        </div>
        ))}
    </div>
  );
};

export default Card;
