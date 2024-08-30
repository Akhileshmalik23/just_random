import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4 text-gray-100">
        The Shrinking Y Chromosome: A Genetic Time Bomb?
      </h1>
      <p className="text-lg text-gray-300 leading-relaxed">
        The Y chromosome, which determines male sex in humans, has been shrinking over the past 300 million years. It has lost 1,393 of its original 1,438 genes, leaving only 45 genes intact. This raises concerns about the future of male offspring and whether the Y chromosome is "running out of time."
      </p>
      <a
        href="https://economictimes.indiatimes.com/news/new-updates/new-y-chromosome-might-be-in-decline-but-men-are-here-to-stay-heres-why/articleshow/112838137.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst"
        className="text-indigo-400 hover:underline mt-4 block"
      >
        Read more at The Economic Times
      </a>
    </>
  );
}
