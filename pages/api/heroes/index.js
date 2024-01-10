import dbConnect from "@/db/connect";
import Hero from "@/db/models/Hero";
export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const heroes = await Hero.find();
    console.log(heroes);

    return response.status(200).json(heroes);
  }
}
