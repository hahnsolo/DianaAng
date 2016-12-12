import { PeopleSignupV1Page } from './app.po';

describe('people-signup-v1 App', function() {
  let page: PeopleSignupV1Page;

  beforeEach(() => {
    page = new PeopleSignupV1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
