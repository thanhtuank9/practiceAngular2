import { RealEstatePage } from './app.po';

describe('real-estate App', function() {
  let page: RealEstatePage;

  beforeEach(() => {
    page = new RealEstatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
