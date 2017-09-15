import { ServicesPart1Page } from './app.po';

describe('services-part1 App', () => {
  let page: ServicesPart1Page;

  beforeEach(() => {
    page = new ServicesPart1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
