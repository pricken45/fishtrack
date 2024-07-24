"use client";

import { getXataClient } from "@/xata";
import { revalidatePath } from "next/cache";
import React, { useRef } from "react";
import { z } from "zod";

export default function FishForm({
  handleCreateFish,
}: {
  handleCreateFish: (formData: FormData) => void;
}) {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
      className=" mb-4 w-full  flex gap-x-2 items-center"
      action={(formData) => {
        handleCreateFish(formData);
        ref.current?.reset();
      }}
      ref={ref}
    >
      <div className="grow">
        <label
          className=" text-gray-300 text-sm font-bold mb-2 hidden"
          htmlFor="Species"
          aria-label="Log fish"
        >
          Species
        </label>
        <input
          className="shadow appearance-none border-2 border-gray-700 rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-transparent"
          name="species"
          id="species"
          type="text"
          placeholder="Species"
        />

        <label
          className=" text-gray-300 text-sm font-bold mb-2 hidden"
          htmlFor="Length"
          aria-label="Log fish"
        >
          Length
        </label>
        <input
          className="shadow appearance-none border-2 border-gray-700 rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-transparent"
          name="length"
          id="length"
          type="number"
          step={0.01}
          placeholder="Length"
        />

        <label
          className=" text-gray-300 text-sm font-bold mb-2 hidden"
          htmlFor="Weight"
          aria-label="Log fish"
        >
          Weight
        </label>
        <input
          className="shadow appearance-none border-2 border-gray-700 rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-transparent"
          name="weight"
          id="weight"
          type="number"
          step={0.01}
          placeholder="Weight"
        />
      </div>
      <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-32">
        Submit
      </button>
    </form>
  );
}
