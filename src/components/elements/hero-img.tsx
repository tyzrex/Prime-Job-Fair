import { cn } from '@/lib/utils';
import React from 'react';
export default function HeroImg({ img, className }: { img: string; className?: string }) {
      return (
            <div className={cn("row-span-1", className)}>
                  <img src={img} alt="" className='h-full w-full object-cover' />
            </div>
      );
}
