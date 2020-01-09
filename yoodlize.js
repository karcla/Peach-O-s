module.exportmodule.exports = {
    before: browser => {
        browser.url('https://alpha.yoodlize.com/')
    },
    after: browser => {
        browser
            .end()
    },
    'Recreational Vehicles': browser => {
        browser
            .useXpath()
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[1]')
            .useCss()
            .verify.containsText('[class="sc-jKVCRD jSqgxr"]', "Recreational Vehicles")
    },
    'Outdoor Gear' :browser => {
        browser.url('https://alpha.yoodlize.com/')
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[2]')
        .useCss()
        .verify.containsText('[class="sc-jKVCRD jSqgxr"]', "Outdoor Gear")
     },
     'Electronics' :browser => {
        browser.url('https://alpha.yoodlize.com/')
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[3]')
        .useCss()
        .verify.containsText('[class="sc-jKVCRD jSqgxr"]', "Electronics")
     },
     'Party & Wedding Equipment' :browser => {
        browser.url('https://alpha.yoodlize.com/')
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[4]')
        .useCss()
        .verify.containsText('[class="sc-jKVCRD jSqgxr"]', "Party & Wedding Equipment")
     },
     'Tools' :browser => {
        browser.url('https://alpha.yoodlize.com/')
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[5]')
        .useCss()
        .verify.containsText('[class="sc-jKVCRD jSqgxr"]', "Tools")
     },
     'Clothing' :browser => {
        browser.url('https://alpha.yoodlize.com/')
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[6]')
        .useCss()
        .verify.containsText('[class="sc-jKVCRD jSqgxr"]', "Clothing")
     },
     'Home & Kitchen' :browser => {
        browser.url('https://alpha.yoodlize.com/')
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[7]')
        .useCss()
        .verify.containsText('[class="sc-jKVCRD jSqgxr"]', "Home and Kitchen")
     },
     'Toys & Games' :browser => {
        browser.url('https://alpha.yoodlize.com/')
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[8]')
        .useCss()
        .verify.containsText('[class="sc-jKVCRD jSqgxr"]', "Toys and Games")
     },
     'Lawn & Garden' :browser => {
        browser.url('https://alpha.yoodlize.com/')
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[9]')
        .useCss()
        .verify.containsText('[class="sc-jKVCRD jSqgxr"]', "Lawn and Garden")
     },
     'Sporting Goods' :browser => {
        browser.url('https://alpha.yoodlize.com/')
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[10]')
        .useCss()
        .verify.containsText('[class="sc-jKVCRD jSqgxr"]', `"Sporting Equipment"`)
     },
     'DVDs & Video Games' :browser => {
        browser.url('https://alpha.yoodlize.com/')
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[11]')
        .useCss()
        .verify.containsText('[class="sc-jKVCRD jSqgxr"]', "DVDs")
     },
     'Venues' :browser => {
        browser.url('https://alpha.yoodlize.com/')
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[12]')
        .useCss()
        .verify.containsText('[class="sc-jKVCRD jSqgxr"]', "Venues")
     },
     'Music' :browser => {
        browser.url('https://alpha.yoodlize.com/')
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[13]')
        .useCss()
        .verify.containsText('[class="sc-jKVCRD jSqgxr"]', "Music")
     },
     'Business Equipment' :browser => {
        browser.url('https://alpha.yoodlize.com/')
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[14]')
        .useCss()
        .verify.containsText('[class="sc-jKVCRD jSqgxr"]', "Business Equipment")
     },
     'Misc' :browser => {
        browser.url('https://alpha.yoodlize.com/')
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[15]')
        .useCss()
        .verify.containsText('[class="sc-jKVCRD jSqgxr"]', "Misc")
     }
}