/**
 * Извлекает и форматирует специальные атаки персонажа с описанием по умолчанию
 * 
 * @param {Object} character - Объект персонажа, содержащий специальные атаки
 * @param {Array} [character.special=[]] - Массив специальных атак
 * @returns {Array<Object>} Форматированный массив специальных атак персонажа
 * 
 * @example
 * // Возвращает отформатированный массив специальных атак
 * getSpecialAttacks({
 *   special: [
 *     {id: 1, name: 'Fireball', icon: 'fire.png'},
 *     {id: 2, name: 'Heal', icon: 'heart.png', description: 'Restores health'}
 *   ]
 * });
 */
export const getSpecialAttacks = (character = {}) => {
  const validatedCharacter = character || {};
  const { special } = validatedCharacter;
  const validSpecial = Array.isArray(special) ? special : [];

  return validSpecial.map(({
    id,
    name,
    icon,
    description = 'Описание недоступно'
  }) => ({
    id,
    name,
    icon,
    description
  }));
};
