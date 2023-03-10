const base = require('@playwright/test');
const { HomePage } = require('../pages/home.page');
const { RestaurantsVouchersPage } = require('../pages/restaurantsVouchers.page');

exports.test = base.test.extend({
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },
    restaurantsVouchersPage: async({page}, use) => {
        const restaurantsVouchersPage = new RestaurantsVouchersPage(page);
        await use(restaurantsVouchersPage);
    }
});
exports.expect = base.expect;