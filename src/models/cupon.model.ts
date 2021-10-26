import {Entity, model, property} from '@loopback/repository';

@model()
export class Cupon extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  codigo: string;

  @property({
    type: 'string',
  })
  description?: string;


  constructor(data?: Partial<Cupon>) {
    super(data);
  }
}

export interface CuponRelations {
  // describe navigational properties here
}

export type CuponWithRelations = Cupon & CuponRelations;
