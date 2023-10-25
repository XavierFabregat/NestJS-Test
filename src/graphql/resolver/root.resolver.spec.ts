import { RootResolver } from './root.resolver';

describe('RootResolver', () => {
  const rootResolver = new RootResolver();

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      expect(rootResolver.getHello()).toEqual('Hello World!');
    });
  });
});
