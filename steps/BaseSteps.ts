import { Page, expect } from "@playwright/test";
import { BasePage } from "../pages/BasePage";

let basePage : BasePage;

export class BaseSteps {
    readonly page: Page
    constructor (page: Page) {
        this.page = page
        basePage = new BasePage(page)
    }

    async goToDemoPage() {
        await this.page.goto("https://www.saucedemo.com/");
    }

    public async clickMenuButton() {
        await basePage.appMenuBtn.click();
    }

    public async clickMenuButton1() {
        await basePage.appMenuBtn.click();
    }
}