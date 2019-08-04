import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {chrome} from '../../../scripts/selenium'
import {By, until, Key, ThenableWebDriver} from 'selenium-webdriver'
import {APP_TITLE} from '../../constants/APP_TITLE'

describe('e2e tests', () => {

	let driver: ThenableWebDriver;
	// build browser before e2e tests
	beforeAll(() => {
		driver = chrome(false) as ThenableWebDriver
	})

	it('clicks the test button', async () => {
		driver.get('http://localhost:3000')
		// await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN)
	  await driver.wait(until.titleIs(APP_TITLE), 2000)
	  const testButton = await driver.findElement(By.id('testButton'))
	  await testButton.click()
	  console.log(`testButton: ${JSON.stringify(testButton, null, 4)}`)
	  expect(!!testButton).toBe(true)
	})

	// quit chrome webdriver
	afterAll(() => {
		// setTimeout prevents driver from quitting
		// setTimeout(() => {
		// 	driver.quit()
		// }, 2000)
	})
})


// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
