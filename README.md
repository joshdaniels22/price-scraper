# price-scraper

To scrape data run at one point in time run:

`npx playwright test`

This will scrape the data from the webpage and write it to a file called `prices.txt` in the root directory of the project.

It will be run on its own with a crobjob as specific in the crontab file. The specific cronjob below will have it run every hour on the hour. The directory that the script located must be specified correctly.

`0 * * * * /bin/sh /projectPath/priceScraperScript.sh`

To edit the crontab file run:

`crontab -e`

And then just save it and the cronjob will be set and will execute accordingly.

// testing
