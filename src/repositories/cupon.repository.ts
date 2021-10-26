import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CityDataSource} from '../datasources';
import {Cupon, CuponRelations} from '../models';

export class CuponRepository extends DefaultCrudRepository<
  Cupon,
  typeof Cupon.prototype.id,
  CuponRelations
> {
  constructor(
    @inject('datasources.city') dataSource: CityDataSource,
  ) {
    super(Cupon, dataSource);
  }
}
