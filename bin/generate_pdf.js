import { chromium } from 'playwright'

const main = async () => {
	const browser = await chromium.launch()
	const page = await browser.newPage()

	await page.goto('http://localhost:4321/resume', { waitUntil: 'networkidle' })
	// await page.emulateMedia({ media: 'screen' })

	await page.pdf({
		path: 'public/resume.pdf',
		// margin: { top: '0', bottom: '0' },
		// printBackground: true,
	})

	return browser.close()
}

main()
