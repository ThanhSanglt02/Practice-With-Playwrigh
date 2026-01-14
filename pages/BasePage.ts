import { Locator, Page } from "@playwright/test";

export class BasePage {
    readonly appLogoPath = `//div[@class="app_logo"]`;
    readonly appMenuBtnPath = `//*[@id="react-burger-menu-btn"]`;
    readonly appLogoutBtnPath = `[data-test="logout-sidebar-link"]`;
    readonly appShoppingCartBadgePath = `[data-test="shopping-cart-badge"]`;

    readonly appLogo: Locator;
    readonly appMenuBtn: Locator;
    readonly appLogoutBtn: Locator;
    readonly appShoppingCartBadge: Locator;

    constructor(protected page:Page) {
        this.appLogo = page.locator(this.appLogoPath),
        this.appMenuBtn = page.locator(this.appMenuBtnPath),
        this.appLogoutBtn = page.locator(this.appLogoutBtnPath),
        this.appShoppingCartBadge = page.locator(this.appShoppingCartBadgePath)
    }

    dynamicElementContainsText(text: string) {
        return this.page.locator(`//*[contains(text(), "${text}")]`);
    }
}