import { titleFont } from "@/config/fonts";

export default function Home() {
  return (
    <main>
      <div>Hola Mundo</div>
      <div className={`${titleFont.className} font-bold`}>Hola Mundo</div>
      <div className={titleFont.className}>Hola Mundo</div>
    </main>
  );
}
