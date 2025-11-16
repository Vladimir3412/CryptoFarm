import React from 'react'
import MoscowPage from '../Moscow/MoscowPage';
import SpgPage from '../SpgPage';
import KazanPage from '../KazanPage';
// import { useRouter } from "next/router";
type Props = {
  params: { id: string},
}   

export default async function Page({params}: Props) {
    const name = (await params).id;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Локация {name}</h1>
      <p>Здесь контент для локации с id: {name}</p>

        

        <div>
          {name === 'moscow' && (
           <MoscowPage/>
          )}
        </div>

        
        <div>
          {name === 'spb' && (
           <SpgPage/>
          )}
        </div>

        
        <div>
          {name === 'kazan' && (
           <KazanPage/>
          )}
        </div>
    </div>
  )
}
