import {Entity, model, property} from '@loopback/repository';

@model()
export class PostalCode extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'number',
    required: true,
  })
  codigo: number;

  @property({
    type: 'string',
  })
  state?: string;

  @property({
    type: 'string',
  })
  city?: string;


  constructor(data?: Partial<PostalCode>) {
    super(data);
  }
}

export interface PostalCodeRelations {
  // describe navigational properties here
}

export type PostalCodeWithRelations = PostalCode & PostalCodeRelations;
