import dbConnect from "@/db/connect.js";
import Hero from "@/db/models/Hero.js";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const hero = await Hero.findById(id);

    if (!hero) {
      return response.status(404).json({ status: "Not found HEHEHE" });
    }

    response.status(200).json(hero);
  }

  if (request.method === "PATCH") {
    const updatedHero = request.body;
    console.log("🚀  updatedHero:", updatedHero);
    await Hero.findByIdAndUpdate(id, updatedHero);
    response.status(200).json({ Status: "Hero succesfully updated" });
  }

  if (request.method === "DELETE") {
    const updatedHero = request.body;
    await Hero.findByIdAndDelete(id, updatedHero);
    response.status(200).json({ Status: "Hero succesfully deleted" });
  }

}