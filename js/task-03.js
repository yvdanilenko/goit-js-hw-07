// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
]

const galleryRef = document.querySelector('#gallery')
galleryRef.classList.add('list')

const listItemsMarkUp = images
  .map(
    ({ url, alt }) =>
      `
  <li class="list-item">
    <img class="image" src="${url}" alt="${alt}" />
  </li>
  `,
  )
  .join('')

galleryRef.insertAdjacentHTML('beforeend', listItemsMarkUp)

// add head styles

document.querySelector('style').insertAdjacentHTML(
  'beforeend',
  `
.image {
  display: block;
  width: 360px;
  height: 100%;
  border-radius: 20px;
}
.list {
  padding: 40;
  list-style: none;
  display: flex;
  flex-direction: row;
}
.list-item:not(:last-child) {
  padding-right: 10px;
}
`,
)
