import React from 'react'
import CardItem from './CardItem'

type Product = {
    id: number;
    name: string;
    status: string;
    hashrate: string;
     baseHashrate: string;
    income: string;
    baseIncome: string;
    img: string;
}

interface PostListProps {
    products: Product[];
    onDelete?: (id: number) => void;
    onToggle?: (id: number) => void;
    onEdit?: (product: Product) => void;
}

export default function PostList({products, onDelete, onToggle, onEdit  }: PostListProps) {
  return (
    <>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-8 max-w-[1400px] mx-auto items-center justify-center  '>
        {products.map((product) =>(
          <CardItem key={product.id} {...product} onDelete={onDelete} onToggle={onToggle} onEdit={onEdit}/>
        ))}
    </div>
    </>
)
}
