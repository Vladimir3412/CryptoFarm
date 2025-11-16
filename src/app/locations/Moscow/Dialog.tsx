"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


interface Product {
  id: number;
  name: string;
  hashrate: string;
  income: string;
  img: string;
  status: string;
  baseHashrate: string;
  baseIncome: string;
}

interface NewProduct {
  name: string;
  hashrate: string;
  income: string;
  img: string;
}

interface MoscowDialogProps {
  onAdd: (product: NewProduct) => void;
  onSave?: (product: Product) => void;
  product?: Product | null;
  imageUrl: string;
  setImageUrl: (url: string) => void;
}


export function MoscowDialog({ onAdd, onSave, product, imageUrl, setImageUrl }: MoscowDialogProps) {
  const [name, setName] = useState("");
  const [hashrate, setHashrate] = useState("");
  const [income, setIncome] = useState("");
  const [open, setOpen] = useState(false);


  useEffect(() => {
    if (product) {
      setOpen(true);
      setName(product.name);
      setHashrate(product.hashrate);
      setIncome(product.income);
      setImageUrl(product.img);
    }
  }, [product, setImageUrl]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !hashrate || !income) return;

    if (product) {
      onSave?.({
        ...product,
        name,
        hashrate,
        income,
        img: imageUrl
      });
    } else {
      onAdd({ name, hashrate, income, img: imageUrl });
    }


    setName("");
    setHashrate("");
    setIncome("");
    setImageUrl("/defoult.png");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Добавить пост</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle className="flex justify-center">Добавьте ваш пост</DialogTitle>
            <DialogDescription className="text-center">
              Добавьте информацию для поста. Нажмите сохранить, когда будете готовы.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 mt-5">
            <div className="grid gap-3">
              <Label htmlFor="image">Фотография</Label>
              <Input
                id="image"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  if (!e.target.files?.length) return;
                  const file = e.target.files[0];
                  const reader = new FileReader();
                  reader.onload = () => setImageUrl(reader.result as string);
                  reader.readAsDataURL(file);
                }}
              />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="name-1">Название видеокарты</Label>
              <Input 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="NVIDIA GeForce RTX 4070TI"
              />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="hashrate">Хэшрейт</Label>
              <Input 
                value={hashrate}
                onChange={(e) => setHashrate(e.target.value)}
                placeholder="20 MH/s"
              />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="income">Доход в час</Label>
              <Input 
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                placeholder="0.3 USD"
              />
            </div>
          </div>

          <DialogFooter className="mt-5">
            <DialogClose asChild>
              <Button variant="outline">Закрыть</Button>
            </DialogClose>
            <Button type="submit">Сохранить</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
