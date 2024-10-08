import { Container, Filters, ProductGroupList, Title, TopBar } from '@/components/shared';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductGroupList
                title="Пиццы"
                items={[
                  {
                    id: 1,
                    name: 'Пепперони',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                    price: 490,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: 'Пепперони',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                    price: 490,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: 'Пепперони',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                    price: 490,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: 'Пепперони',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                    price: 490,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: 'Пепперони',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                    price: 490,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 6,
                    name: 'Пепперони',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                    price: 490,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 7,
                    name: 'Пепперони',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                    price: 490,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductGroupList
                title="Комбо"
                items={[
                  {
                    id: 8,
                    name: 'Пепперони',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                    price: 490,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 9,
                    name: 'Пепперони',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                    price: 490,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 10,
                    name: 'Пепперони',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                    price: 490,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 11,
                    name: 'Пепперони',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                    price: 490,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 12,
                    name: 'Пепперони',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                    price: 490,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 13,
                    name: 'Пепперони',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                    price: 490,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 14,
                    name: 'Пепперони',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                    price: 490,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
