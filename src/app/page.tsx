import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/JShZI5iNOrALkWxdS4LnvxZLG0jIOpslmJqoRaV2BeEDNyf7",
  "https://utfs.io/f/JShZI5iNOrAL4rJx5WQfCSAMONbJXETWuwP8596UVdhD4vsy",
  "https://utfs.io/f/JShZI5iNOrALyP72cs9UwexSBj0R4XivAGN68dOa2f3zZ1t7",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div className="w-48" key={image.id}>
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
