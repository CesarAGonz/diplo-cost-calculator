import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Cupon} from '../models';
import {CuponRepository} from '../repositories';

export class CuponController {
  constructor(
    @repository(CuponRepository)
    public cuponRepository : CuponRepository,
  ) {}

  @post('/cupons')
  @response(200, {
    description: 'Cupon model instance',
    content: {'application/json': {schema: getModelSchemaRef(Cupon)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cupon, {
            title: 'NewCupon',
            
          }),
        },
      },
    })
    cupon: Cupon,
  ): Promise<Cupon> {
    return this.cuponRepository.create(cupon);
  }

  @get('/cupons/count')
  @response(200, {
    description: 'Cupon model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Cupon) where?: Where<Cupon>,
  ): Promise<Count> {
    return this.cuponRepository.count(where);
  }

  @get('/cupons')
  @response(200, {
    description: 'Array of Cupon model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Cupon, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Cupon) filter?: Filter<Cupon>,
  ): Promise<Cupon[]> {
    return this.cuponRepository.find(filter);
  }

  @patch('/cupons')
  @response(200, {
    description: 'Cupon PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cupon, {partial: true}),
        },
      },
    })
    cupon: Cupon,
    @param.where(Cupon) where?: Where<Cupon>,
  ): Promise<Count> {
    return this.cuponRepository.updateAll(cupon, where);
  }

  @get('/cupons/{id}')
  @response(200, {
    description: 'Cupon model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Cupon, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Cupon, {exclude: 'where'}) filter?: FilterExcludingWhere<Cupon>
  ): Promise<Cupon> {
    return this.cuponRepository.findById(id, filter);
  }

  @patch('/cupons/{id}')
  @response(204, {
    description: 'Cupon PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cupon, {partial: true}),
        },
      },
    })
    cupon: Cupon,
  ): Promise<void> {
    await this.cuponRepository.updateById(id, cupon);
  }

  @put('/cupons/{id}')
  @response(204, {
    description: 'Cupon PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() cupon: Cupon,
  ): Promise<void> {
    await this.cuponRepository.replaceById(id, cupon);
  }

  @del('/cupons/{id}')
  @response(204, {
    description: 'Cupon DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.cuponRepository.deleteById(id);
  }
}
