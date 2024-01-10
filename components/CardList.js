import Card from "./Card";
import useSWR from "swr";
const CardList = () => {
  const URL = "/api/heroes";
  const { data, error } = useSWR(URL);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <div>
      <Card data={data} />
    </div>
  );
};

export default CardList;
