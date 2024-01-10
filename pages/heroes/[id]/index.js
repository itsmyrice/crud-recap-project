import useSWR from "swr";
import { useRouter } from "next/router.js";
import Image from "next/image";

const HeroDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, error } = useSWR(`/api/heroes/${id}`);

  console.log("🚀  data:", data);
  if (!data || isLoading || error) return <h2>Loading...</h2>;

  return (
    <>
      <h2>{data.heroName}</h2>
      <Image src={data.imgURL} width={600} height={300} alt={data.heroName}></Image>
      <p>{data.alias}</p>
      <p>{data.rank}</p>
      <ul>
        {data.powers.map((power, index) => (
          <li key={index}>{power}</li>
        ))}
      </ul>
    </>
  );
};

export default HeroDetails;
