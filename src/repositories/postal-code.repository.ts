import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CityDataSource} from '../datasources';
import {PostalCode, PostalCodeRelations} from '../models';

export class PostalCodeRepository extends DefaultCrudRepository<
  PostalCode,
  typeof PostalCode.prototype.id,
  PostalCodeRelations
> {
  constructor(
    @inject('datasources.city') dataSource: CityDataSource,
  ) {
    super(PostalCode, dataSource);
  }
}
