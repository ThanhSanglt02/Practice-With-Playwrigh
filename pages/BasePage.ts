import { Locator, Page } from '@playwright/test';

export class BasePage {
    readonly appMenuBtnPath = `//*[@id="react-burger-menu-btn"]`;
    readonly appLogoutBtnPath = `[data-test="logout-sidebar-link"]`;
    readonly appShoppingCartBadgePath = `[data-test="shopping-cart-badge"]`;

    readonly appMenuBtn: Locator;
    readonly appLogoutBtn: Locator;
    readonly appShoppingCartBadge: Locator;

    constructor(protected page: Page) {
            (this.appMenuBtn = page.locator(this.appMenuBtnPath)),
        (this.appMenuBtn = page.locator(this.appMenuBtnPath)),
            (this.appMenuBtn = page.locator(this.appMenuBtnPath)),
            (this.appLogoutBtn = page.locator(this.appLogoutBtnPath)),
            (this.appShoppingCartBadge = page.locator(this.appShoppingCartBadgePath));
    }

    dynamicElementContainsText(text: string) {
        return this.page.locator(`//*[contains(text(), "${text}")]`);
    }

    getdynamicElementContainsText(text: string) {}
    dynamicElementContainsText1(text: string) {
        return this.page.locator(`//*[contains(text(), "${text}")]`);
    }

    dynamicElementContainsText2(text: string) {
        return this.page.locator(`//*[contains(text(), "${text}")]`);
    }
}
