import {Entity, model, property} from '@loopback/repository';

@model()
export class Zone extends Entity {
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
  name: string;

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  estates: string[];

  @property({
    type: 'object',
    required: true,
  })
  priceKilo: object;

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  shippingTime: string[];


  constructor(data?: Partial<Zone>) {
    super(data);
  }
}

export interface ZoneRelations {
  // describe navigational properties here
}

export type ZoneWithRelations = Zone & ZoneRelations;
