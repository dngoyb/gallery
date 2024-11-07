import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/JShZI5iNOrALkWxdS4LnvxZLG0jIOpslmJqoRaV2BeEDNyf7",
  "https://utfs.io/f/JShZI5iNOrAL4rJx5WQfCSAMONbJXETWuwP8596UVdhD4vsy",
  "https://utfs.io/f/JShZI5iNOrALyP72cs9UwexSBj0R4XivAGN68dOa2f3zZ1t7",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div className="w-48" key={post.id}>
            {post.name}
          </div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div className="w-48" key={image.id + "-" + index}>
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
