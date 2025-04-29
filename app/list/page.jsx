"use client";

import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import Link from "next/link";

import { useMemes } from "../../context/MemeContext";

const ListPage = () => {
  const { memes } = useMemes();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Meme List</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {memes.map((meme) => (
          <Card key={meme.id} className="bg-regal-beige/75">
            <CardHeader className="text-lg font-semibold">
              {meme.title}
            </CardHeader>
            <CardBody>
              <Image
                alt={meme.title}
                src={meme.image}
                className="rounded w-full h-48 object-cover"
              />
            </CardBody>
            <CardFooter className="flex justify-between items-center">
              <span>👍 {meme.likes}</span>
              <Link href={meme.image} target="_blank">
                <Button size="sm" variant="link">
                  View
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ListPage;
