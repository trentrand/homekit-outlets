import { HomeBridge Outlets } from './app.po';

describe('HomeBridge Outlets App', () => {
  let page: HomeBridge Outlets;

  beforeEach(() => {
    page = new HomeBridge Outlets();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
