import * as driver from 'selenium-webdriver'
import {Builder, By, Key, until} from 'selenium-webdriver'
import chromeDriver from 'selenium-webdriver/chrome'

// chromedriver must be in PATH (https://chromedriver.chromium.org/)
export function chrome(headless: boolean) {
	const builder = new Builder().forBrowser('chrome')
	const builderWithOpts = headless ? builder.setChromeOptions(new chromeDriver.Options().headless()) : builder;
	return builderWithOpts.build()
}
