import { Test, TestingModule } from '@nestjs/testing';

import { InMemoryProductRepository } from 'test/repositories/in-memory-product-repository';
import { ListAndCountService } from './list-and-count.service';
import { REPOSITORIES_NAME } from 'src/utils/repository_enum';

describe('ListAndCountService', () => {
  let inMemoryProductRepository: InMemoryProductRepository;
  let listAndCountService: ListAndCountService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        ListAndCountService,
        {
          provide: REPOSITORIES_NAME.product_repository,
          useClass: InMemoryProductRepository,
        },
      ],
    }).compile();

    inMemoryProductRepository = moduleRef.get<InMemoryProductRepository>(
      REPOSITORIES_NAME.product_repository,
    );
    listAndCountService = new ListAndCountService(inMemoryProductRepository);
  });

  describe('execute', () => {
    it('should return a list of products', async () => {
      for (let i = 0; i < 3; i++) {
        await inMemoryProductRepository.create({
          name: `Product ${i}`,
          price: 10 * i,
        });
      }

      const products = await listAndCountService.execute({
        pageSize: 10,
        page: 1,
      });

      expect(products.list).toHaveLength(3);
    });
  });
});
