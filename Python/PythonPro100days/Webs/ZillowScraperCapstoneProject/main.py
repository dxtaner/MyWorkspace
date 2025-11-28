from scraper import ZillowScraper
from form_filler import FormFiller

ZILLOW_URL = "https://www.zillow.com/homes/San-Francisco,-CA_rb/"
GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScVAVQUqtJ2sLOTbqGsm2bxLeiw3bIASzZQ3iVDqjqJjX4jNw/viewform"

scraper = ZillowScraper(ZILLOW_URL)
addresses, prices, links = scraper.scrape()

print("Scraped listings:", len(addresses), len(prices), len(links))

form = FormFiller(GOOGLE_FORM_URL)

for i in range(len(addresses)):
    form.fill(addresses[i], prices[i], links[i])
