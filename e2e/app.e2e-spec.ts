import { MyHappyNailsPage } from './app.po';

describe('my-happy-nails App', function() {
  let page: MyHappyNailsPage;

  beforeEach(() => {
    page = new MyHappyNailsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
