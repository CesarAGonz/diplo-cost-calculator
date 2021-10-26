import {Entity, model, property} from '@loopback/repository';

@model()
export class AData extends Entity {
  @property({
    type: 'number',
    required: true,
  })
  cost: number;

  @property({
    type: 'number',
    required: true,
  })
  postalCode: number;

  @property({
    type: 'string',
  })
  cupon?: string;

  @property({
    type: 'number',
    required: true,
  })
  weight: number;

  @property({
    type: 'string',
    required: true,
  })
  paymentMethod: string;

  constructor(data?: Partial<AData>) {
    super(data);
  }
}

export interface ADataRelations {
  // describe navigational properties here
}

export type ADataWithRelations = AData & ADataRelations;
