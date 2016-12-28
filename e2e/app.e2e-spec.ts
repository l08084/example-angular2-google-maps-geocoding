import { ExampleAngular2MapPage } from './app.po';

describe('example-angular2-map App', function() {
  let page: ExampleAngular2MapPage;

  beforeEach(() => {
    page = new ExampleAngular2MapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
