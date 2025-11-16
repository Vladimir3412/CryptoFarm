'use client';
import Image from "next/image";
import Link from 'next/link'
import Button from '@mui/material/Button';


export default function Home() {

  const locationsArr = [
    { id: 1, name: "Москва", slug: "moscow" },
    { id: 2, name: "Санкт-Петербург", slug: "spb" },
    { id: 3, name: "Казань", slug: "kazan" },
  ]

  // const [locations, setLocations] = useState(locationsArr)
 
  return (
    <div className="h-screen flex flex-col items-center justify-center p-12">
      <h1 className="text-3xl font-semibold text-blue-600 dark:text-sky-400">Привет, выбери локацию</h1>
      <main className="flex flex-row gap-10">
        {locationsArr.map((location) => 
        <div key={location.id} className="mt-5">
          <Link href={`/locations/${location.slug}`}>
          <Button className="text-xl font-bold" variant="contained" color="warning" size="large">{location.name}</Button>

          </Link>
        </div>
    )  
           }
      </main>
    </div>
  );
}
