const { urlConfig } = require('../config/environment.config');

exports.RestaurantsVouchersPage = class RestaurantsVouchersPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page){
        this.page = page;
        this.pageUrl = urlConfig.restaurantsVouchersPage;
    }

    async searchForRestaurants(location, day, people){
        await this.location.fill(location);
        await this.day.selectOption(day);
        await this.people.selectOption(people);
        await this.findRestaurantsButton.click();
    }

    get location(){
        return this.page.getByPlaceholder('Town or postcode');
    }

    get day(){
        return this.page.getByRole('combobox', { name: 'Day' });
    }
    
    get people(){
        return this.page.getByRole('combobox', { name: 'People' });
    }

    get findRestaurantsButton(){
        return this.page.getByRole('button', { name: 'Find restaurants vouchers' });
    }

    get infoBanner(){
        return this.page.locator("//div[@data-qa='el:expiredInfoBanner']");
    }
}