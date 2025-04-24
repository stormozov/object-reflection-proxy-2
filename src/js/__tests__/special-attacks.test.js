import { getSpecialAttacks } from '../special-attacks';
import { character } from '../character';

describe('getSpecialAttacks', () => {
  it('Корректно обрабатывает объект с атаками, устанавливая описание по умолчанию', () => {
    const result = getSpecialAttacks(character);

    expect(result).toHaveLength(2);

    expect(result[0]).toEqual({
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    });

    expect(result[1]).toEqual({
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      description: 'Описание недоступно',
    });
  });

  it('Возвращает пустой массив при отсутствии special', () => {
    expect(getSpecialAttacks({})).toEqual([]);
  });

  it('Возвращает пустой массив при пустом массиве special', () => {
    expect(getSpecialAttacks({ special: [] })).toEqual([]);
  });

  it('Возвращает пустой массив, если переданный аргумент не объект', () => {
    expect(getSpecialAttacks(null)).toEqual([]);
  });

  it('Возвращает пустой массив, если вызвать функцию без аргумента', () => {
    expect(getSpecialAttacks()).toEqual([]);
  });

  it('Не изменяет исходные объекты в массиве special', () => {
    const originalSpecial = [...character.special];
    const originalFirstAttack = { ...character.special[0] };
    const originalSecondAttack = { ...character.special[1] };

    getSpecialAttacks(character);

    expect(character.special).toEqual(originalSpecial);
    expect(character.special[0]).toEqual(originalFirstAttack);
    expect(character.special[1]).toEqual(originalSecondAttack);
  });

  it('Заполняет недостающие поля в атаках', () => {
    const result = getSpecialAttacks(character);

    expect(result[0].description).toEqual('Двойной выстрел наносит двойной урон');
    expect(result[1].description).toEqual('Описание недоступно');
  });
});
