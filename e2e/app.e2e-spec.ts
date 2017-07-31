import { Gridsolarhu5Page } from './app.po';

describe('gridsolarhu5 App', () => {
  let page: Gridsolarhu5Page;

  beforeEach(() => {
    page = new Gridsolarhu5Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
