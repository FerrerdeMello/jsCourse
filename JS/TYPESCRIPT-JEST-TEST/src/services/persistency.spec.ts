import { Persistency } from './persistency';

describe('Persistency', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should call console.log once when saveOrder is called', () => {
    const sut = new Persistency(); // sut = system under test, a class pricipal que está sendo testada
    const consoleSpy = jest.spyOn(console, 'log');

    sut.saveOrder();

    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should log "Pedido salvo com sucesso..." when saveOrder is called', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');

    sut.saveOrder();

    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso...');
  });
});
