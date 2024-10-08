'use client';
import React from 'react';
import { useIntersection } from 'react-use';
import { ProductCard, Title } from '.';
import { cn } from '@/lib/utils';
import { UseCategoryState } from '@/store/category';

interface Props {
  title: string;
  items: any[];
  className?: string;
  listClassname?: string;
  categoryId: number;
}

export const ProductGroupList: React.FC<Props> = ({
  title,
  items,
  className,
  listClassname,
  categoryId,
}) => {
  const setActiveCategoryId = UseCategoryState((state) => state.setActiveId);
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });
  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      console.log(categoryId);
      setActiveCategoryId(categoryId);
    }
  }, [categoryId, intersection?.isIntersecting, title]);

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />

      <div className={cn('grid grid-cols-3 gap-[50px]', listClassname)}>
        {items.map((product, i) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.items[0].price}
          />
        ))}
      </div>
    </div>
  );
};
