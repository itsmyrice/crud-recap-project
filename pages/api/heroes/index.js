import dbConnect from "@/db/connect";
import Hero from "@/db/models/Hero";
export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const heroes = await Hero.find();
    console.log(heroes);

    return response.status(200).json(heroes);
  }

  if (request.method === "POST") {
    try {
      const heroData = request.body;
      console.log("🚀  heroData:", heroData);
      await Hero.create(heroData);

      response.status(200).json({ status: "hero created!" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }
}
