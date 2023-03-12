import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from datetime import datetime
driver = webdriver.Chrome()

while True:
    driver.get("https://www.takealot.com/lego-technic-app-controlled-top-gear-rally-car/PLID60538045")
    pricebox = driver.find_element(By.CLASS_NAME,"buybox-module_price_2YUFa")

    price = pricebox.text.replace("R ", "").replace(",", "")

    
    currentTime = datetime.now().strftime("%d-%m-%Y %H:%M")
    
    rowEntry = '\n' + currentTime + " " + price
    f = open("../model/prices.txt", "a")
    f.write(rowEntry)
    f.close()
    time.sleep(10)

driver.close()