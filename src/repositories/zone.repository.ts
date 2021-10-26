import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CityDataSource} from '../datasources';
import {Zone, ZoneRelations} from '../models';

export class ZoneRepository extends DefaultCrudRepository<
  Zone,
  typeof Zone.prototype.id,
  ZoneRelations
> {
  constructor(
    @inject('datasources.city') dataSource: CityDataSource,
  ) {
    super(Zone, dataSource);
  }
}
