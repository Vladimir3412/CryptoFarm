"use client"
import React, { useState } from 'react'
import PostList from './Components/PostList'
import { MoscowDialog } from './Dialog'

const InfoCard = [
  {id: 1, name: "Radeon RX 5700 XT", status: "Активен", hashrate: "50 MH/s", baseHashrate: "50 MH/s", income: "0.5 USD", baseIncome: "0.5 USD", img: "/videocard1.png"},
  {id: 2, name: "GeForce RTX 3080", status: "Неактивен", hashrate: "85 MH/s", baseHashrate: "85 MH/s",income: "0.8 USD",baseIncome: "0.8 USD", img: "/videocard2.png"},
  {id: 3, name: "Radeon RX 6800 XT", status: "Активен", hashrate: "60 MH/s", baseHashrate: "60 MH/s", income: "0.6 USD",baseIncome: "0.6 USD",img: "/videocard3.png" } ,
  {id: 4, name: "Radeon RX 6800 XT", status: "Активен", hashrate: "60 MH/s", baseHashrate: "60 MH/s",income: "0.6 USD", baseIncome: "0.6 USD",img: "/videocard4.png"} ,
];

type Product = typeof InfoCard[number]

type NewProduct = {
  name: string;
  hashrate: string;
  income: string;
  img: string;
};

export default function MoscowPage() {
  const [products, setProducts] = useState<Product[]>(InfoCard);
  const [imageUrl, setImageUrl] = useState("/defoult.png"); 
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);


  const deleteBlock = (id: number) => {
    setProducts(prev => prev.filter(card => card.id !== id));
  }

  
  const toggleStatus = (id: number) => {
    setProducts(prev => prev.map(p => {
      if(p.id !== id) return p;
      const newStatus = p.status === 'Активен' ? 'Неактивен' : 'Активен';
      return {
        ...p,
        status: newStatus,
        hashrate: newStatus === "Неактивен" ? '0 MH/s' : p.baseHashrate,
        income: newStatus === "Неактивен" ? '0.0 USD' : p.baseIncome
      }
    }))
  }

  
  const addProduct = (product: NewProduct) => {
    setProducts(prev => [
      ...prev,
      {
        id: Date.now(),
        name: product.name,
        status: "Активен",
        hashrate: product.hashrate,
        baseHashrate: product.hashrate,
        income: product.income,
        baseIncome: product.income,
        img: product.img
      }
    ]);
  };


  const openEditModal = (product: Product) => {
    setEditingProduct(product);
  };


  const updateProduct = (updatedProduct: Product) => {
    setProducts(prev =>
      prev.map(p => (p.id === updatedProduct.id ? updatedProduct : p))
    );
    setEditingProduct(null);
  };

  return (
    <div className='mt-5'>
      <MoscowDialog  
        onAdd={addProduct} 
        onSave={updateProduct} 
        product={editingProduct} 
        imageUrl={imageUrl} 
        setImageUrl={setImageUrl} 
      />
    
      <PostList  
        products={products} 
        onDelete={deleteBlock} 
        onToggle={toggleStatus} 
        onEdit={openEditModal} 
      />
    </div>
  )
}
