
const { urlConfig } = require('../config/environment.config');

exports.HomePage = class HomePage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.pageUrl = urlConfig.homePage;
    }
  
    async navigate(){
        await this.page.goto(this.pageUrl);
    }

    async goToRestaurant(){
        await this.categoriesTab.click();
        await this.restaurantCategory.click();
    }

    get categoriesTab(){
        return this.page.getByRole('button', { name: 'Categories' });
    }

    get restaurantCategory(){
        return this.page.getByRole('link', { name: 'Restaurants icon Restaurants' });
    }

  }