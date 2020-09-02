import { browser, by, element, ElementArrayFinder } from 'protractor';

export class AppPage {
  navigateTo(path = ''): Promise<unknown> {
    return browser.get(browser.baseUrl + path) as Promise<unknown>;
  }

  getHomeText(): Promise<string> {
    return element(by.css('app-root app-home p')).getText() as Promise<string>;
  }

  getMovieList(): ElementArrayFinder {
    return element.all(by.css('app-movies .section-structure .list .movie a'));
  }

  getInputFields(): ElementArrayFinder {
    return element.all(by.css('input'));
  }

  getTextareas(): ElementArrayFinder {
    return element.all(by.css('textarea'));
  }
}
