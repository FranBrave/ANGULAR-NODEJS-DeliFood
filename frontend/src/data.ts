import { Food } from './app/shared/models/Food'
import { Tag } from './app/shared/models/Tag'

export const sample_foods: Food[] = [
  {
    id:'1',
    name: 'Pizza pepperoni',
    cookTime: '10-20',
    price: 10,
    favorite: false,
    origins: ['italia'],
    stars: 4.5,
    imageUrl: 'assets/food-1.jpg',
    tags: ['FastFood', 'Pizza', 'Almuerzo'],
  },
  {
    id:'2',
    name: 'Albóndigas',
    price: 20,
    cookTime: '20-30',
    favorite: true,
    origins: ['persia', 'china'],
    stars: 4.7,
    imageUrl: 'assets/food-2.jpg',
    tags: ['SlowFood', 'Almuerzo'],
  },
  {
    id:'3',
    name: 'Hamburguesa',
    price: 5,
    cookTime: '10-15',
    favorite: false,
    origins: ['alemania', 'usa'],
    stars: 3.5,
    imageUrl: 'assets/food-3.jpg',
    tags: ['FastFood', 'Hamburguesa'],
  },
  {
    id:'4',
    name: 'Patatas Fritas',
    price: 2,
    cookTime: '15-20',
    favorite: true,
    origins: ['bélgica', 'francia'],
    stars: 3.3,
    imageUrl: 'assets/food-4.jpg',
    tags: ['FastFood', 'Frito'],
  },
  {
    id:'5',
    name: 'Sopa de pollo',
    price: 11,
    cookTime: '40-50',
    favorite: false,
    origins: ['india', 'asia'],
    stars: 3.0,
    imageUrl: 'assets/food-5.jpg',
    tags: ['SlowFood', 'Sopa'],
  },
  {
    id:'6',
    name: 'Pizza vegetal',
    price: 9,
    cookTime: '40-50',
    favorite: false,
    origins: ['italia'],
    stars: 4.0,
    imageUrl: 'assets/food-6.jpg',
    tags: ['FastFood', 'Pizza', 'Almuerzo'],
  },
]

export const sample_tags: Tag[] = [
  { name: 'Todo', count: 6 },
  { name: 'FastFood', count: 4 },
  { name: 'Pizza', count: 2 },
  { name: 'Almuerzo', count: 3 },
  { name: 'SlowFood', count: 2 },
  { name: 'Hamburguesa', count: 1 },
  { name: 'Frito', count: 1 },
  { name: 'Sopa', count: 1 },
]
