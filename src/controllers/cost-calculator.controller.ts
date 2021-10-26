// Uncomment these imports to begin using these cool features!
import {repository} from '@loopback/repository';
import {getModelSchemaRef, post, requestBody, response} from '@loopback/rest';
import {AData} from '../models';
import {CuponRepository, PostalCodeRepository, ZoneRepository} from '../repositories';
// import {inject} from '@loopback/core';


export class CostCalculatorController {
  constructor(
    @repository(PostalCodeRepository)
    public postalCodeRepository: PostalCodeRepository,
    @repository(ZoneRepository)
    public zoneRepository: ZoneRepository,
    @repository(CuponRepository)
    public cuponRepository: CuponRepository,
  ) { }
  @post('/shipping-cost')
  @response(200, {
    description: 'Get shipping cost',
    content: {'application/json': {schema: getModelSchemaRef(AData)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AData, {
            title: 'Cost Calculator',
          }),
        },
      },
    })
    data: AData,
  ): Promise<object> {
    const estatesFound = await this.postalCodeRepository.findOne({
      where: {codigo: data.postalCode},
    });
    //const zoneFound = await this.zoneRepository.findOne({
    //where: {estates: estatesFound?.state},
    //});
    const cuponFound = await this.cuponRepository.find({
      where: {codigo: data.cupon}
    });
    return {};
  }
}
