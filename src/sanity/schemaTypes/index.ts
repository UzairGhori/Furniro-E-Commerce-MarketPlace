import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import Order from './orderProduct'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product ,Order],
}
