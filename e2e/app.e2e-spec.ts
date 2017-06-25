import { ProjectIzardPage } from './app.po';

describe('project-izard App', () => {
  let page: ProjectIzardPage;

  beforeEach(() => {
    page = new ProjectIzardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
