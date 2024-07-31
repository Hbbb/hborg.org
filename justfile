alias gen := generate

# Generates a PDF of my resume from the /resume route on the website
generate:
		@ PDF_VIEW=true npm run dev &
		- rm public/resume.pdf
		sleep 2
		npm run generate-pdf
		kill $(lsof -t -i :4321)
