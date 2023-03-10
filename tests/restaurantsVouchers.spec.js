const { test, expect } = require('../fixtures/pages.fixture');

test.describe("Restaurant Vouchers Tests", () => {

    test.beforeEach(async ({ homePage }) => {
        await homePage.navigate();
        await homePage.goToRestaurant();
    });

    // Passing test
    test('Search for restaurant vouchers in London, any day, any number of people', async ({ restaurantsVouchersPage }) => {
        await restaurantsVouchersPage.searchForRestaurants('London', 'Any', 'Any');
        await expect(restaurantsVouchersPage.infoBanner).toContainText('Sorry, we couldn\'t find any offers that match your criteria')
    });

    // Failing test
    test('Search for restaurant vouchers in Manchester, Today, 2 people', async ({ restaurantsVouchersPage }) => {
        await restaurantsVouchersPage.searchForRestaurants('Manchester', 'Today', '2');
        await expect(restaurantsVouchersPage.infoBanner).toContainText('Here are all the vouchers we have found!')
    });
})


