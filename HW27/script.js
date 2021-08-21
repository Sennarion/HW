const allThings = "кусок дерева, Ненужная скромность, Очки Элвиса,  ненужные сомнения, Цветное стекло, Амулет от артрита, Лошадиные скачки,  Книга, Ненужное мороженое, Ваза, ненужный желудь, бейсбольная карточка";
const needfulThings = allThings
    .split(/,\s+/)
    .filter(word => !word.toLowerCase().startsWith('ненужн'))
    .join(', ');

console.log(needfulThings);