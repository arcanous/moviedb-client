import { AppPage } from './app.po';
import { browser, logging, element, by, ExpectedConditions} from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getHomeText()).toEqual('home works!');
  });

  it('should list 5 movies in movies home', () => {
    page.navigateTo('/movies');
    const movies = page.getMovieList();

    expect(movies.count()).toEqual(5);
    expect(movies.get(0).getText()).toEqual('Matrix');
    expect(movies.get(2).getText()).toEqual('Inglourious Basterds');
  });

  it('should go to add movie page', () => {
    element(by.linkText('+ Add movie')).click();

    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + 'movies/new');

    const addButton = element(by.buttonText('Add'));

    expect(addButton.getAttribute('disabled')).toBeTruthy();

    const inputs = page.getInputFields();

    inputs.get(0).sendKeys('New movie name');
    inputs.get(1).sendKeys(8888);

    page.getTextareas().get(0).sendKeys('short movie plot...');

    expect(addButton.getAttribute('disabled')).toBeFalsy();

    addButton.click();
    browser.wait(ExpectedConditions.presenceOf(element(by.linkText('New movie name'))), 2000);

    const movies = page.getMovieList();

    expect(movies.count()).toEqual(6);
    expect(movies.get(5).getText()).toEqual('New movie name');
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
