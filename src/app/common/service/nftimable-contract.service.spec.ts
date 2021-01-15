import { TestBed } from '@angular/core/testing';

import { NftimableContractService } from './nftimable-contract.service';

describe('NftimableContractService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NftimableContractService = TestBed.get(NftimableContractService);
    expect(service).toBeTruthy();
  });
});
