import { FullStackSeedPage } from './app.po';

describe('full-stack-seed App', () => {
  let page: FullStackSeedPage;

  beforeEach(() => {
    page = new FullStackSeedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
