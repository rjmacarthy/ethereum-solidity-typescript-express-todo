import { LoversPage } from './app.po';

describe('lovers App', () => {
  let page: LoversPage;

  beforeEach(() => {
    page = new LoversPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
