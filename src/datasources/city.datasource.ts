import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'city',
  connector: 'mongodb',
  url: 'mongodb://prisma:prisma@localhost:27017/?authSource=admin',
  host: '',
  port: 0,
  user: 'prisma',
  password: 'prisma',
  database: '',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class CityDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'city';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.city', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}