// Напиши скрипт, который для каждого элемента
//  массива ingredients создаст отдельный li,
//  после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM-узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
]

const ingredientsRef = document.querySelector('#ingredients')

const ingredientsItemEl = ingredients.map((ingredient) => {
  const item = document.createElement('li')
  item.textContent = ingredient
  return item
})

ingredientsRef.append(...ingredientsItemEl)

//  с помощью forEach
const newItemRef = []

ingredients.forEach((item) => {
  const itemRef = document.createElement('li')
  itemRef.textContent = item
  newItemRef.push(itemRef)
})

document.querySelector('#ingredients').append(...newItemRef)

// через функцию
const makeItemEl = (items) => {
  return items.map((ingredient) => {
    const itemEl = document.createElement('li')
    itemEl.textContent = ingredient
    return itemEl
  })
}

const items = makeItemEl(ingredients)
ingredientsRef.append(...items)
