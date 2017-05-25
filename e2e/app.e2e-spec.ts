import { Angular2WebpackStarterPage } from './app.po';

describe('angular2-webpack-starter App', function() {
  let page: Angular2WebpackStarterPage;

  beforeEach(() => {
    page = new Angular2WebpackStarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
