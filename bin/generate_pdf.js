import { chromium } from 'playwright'

const main = async () => {
	const browser = await chromium.launch()
	const page = await browser.newPage()

	await page.goto('http://localhost:4321/resume', { waitUntil: 'networkidle' })
	await page.emulateMedia({ media: 'screen' })

	await page.pdf({
		format: 'A4',
		path: 'public/resume.pdf',
		printBackground: true,
		height: 'auto',
		margin: { top: '20px', bottom: '20px', left: '20px', right: '20px' },
	})

	return browser.close()
}

main()
