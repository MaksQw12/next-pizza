import { cn } from '@/lib/utils';
import React from 'react';
import { CheckboxFiltersGroup, FilterCheckbox, RangeSlider, Title } from '.';
import { Input } from '../ui';

interface Props {
  className?: string;
}

export const Filters: React.FC<React.PropsWithChildren<Props>> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>

      <div className="mt-5 border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input type="number" placeholder="0" min={0} max={30000} defaultValue={0} />
          <Input type="number" placeholder="30000" min={100} max={30000} value={1000} />
        </div>

        <RangeSlider min={0} max={30000} step={10} value={[0, 30000]} />
      </div>

      {/* Фильтр ингридиентов */}
      <CheckboxFiltersGroup
        title="Ингридиенты"
        className="mt-5"
        limit={6}
        defaultItems={[
          {
            text: 'Сырный соус',
            value: '1',
          },
          {
            text: 'Чеснок',
            value: '2',
          },
          {
            text: 'Сыр',
            value: '3',
          },
          {
            text: 'Колбаса',
            value: '4',
          },
          {
            text: 'острота',
            value: '5',
          },
          {
            text: 'Халапенью',
            value: '6',
          },
        ]}
        items={[
          {
            text: 'Сырный соус',
            value: '1',
          },
          {
            text: 'Чеснок',
            value: '2',
          },
          {
            text: 'Сыр',
            value: '3',
          },
          {
            text: 'Колбаса',
            value: '4',
          },
          {
            text: 'острота',
            value: '5',
          },
          {
            text: 'Халапенью',
            value: '6',
          },
          {
            text: 'Сырный соус',
            value: '1',
          },
          {
            text: 'Чеснок',
            value: '2',
          },
          {
            text: 'Сыр',
            value: '3',
          },
          {
            text: 'Колбаса',
            value: '4',
          },
          {
            text: 'острота',
            value: '5',
          },
          {
            text: 'Халапенью',
            value: '6',
          },
        ]}
      />
    </div>
  );
};
