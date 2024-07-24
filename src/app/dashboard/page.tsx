import { getXataClient } from "@/xata";
import React from "react";
import FishForm from "./FishForm";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const schema = z.object({
  species: z.string().min(2),
  length: z.number(),
  weight: z.number(),
});

export default async function DashboardPage() {
  const xataClient = getXataClient();
  const fishes = await xataClient.db.fishes.getMany();

  async function createFish(formData: FormData) {
    "use server";
    const parsedForm = schema.parse({
      species: formData.get("species"),
      length: Number(formData.get("length")),
      weight: Number(formData.get("weight")),
    });

    const xataClient = getXataClient();
    await xataClient.db.fishes.create(parsedForm);
    revalidatePath("/");
  }

  return (
    <div>
      <h1 className="mb-4">Dashboard Pages</h1>
      <FishForm handleCreateFish={createFish} />
      <div className="mb-10"></div>
      {fishes.map((fish) => (
        <p key={fish.id}>{fish.species}</p>
      ))}
    </div>
  );
}
