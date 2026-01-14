import { Page, expect } from "@playwright/test";
import { LoginPage } from "../../pages/loginPage/LoginPage";
import {BaseSteps} from "../BaseSteps";

let loginPage: LoginPage;

export class LoginSteps extends BaseSteps {

    constructor(page: Page) {
        super(page);
        loginPage = new LoginPage(page);
    }
    public async fillCredentials(username: string, password: string) {
        await loginPage.usernameInput.fill(username);
        await loginPage.passwordInput.fill(password);
    }

    public async clickLoginButton() {
        await loginPage.loginButton.click()
    }
    
    public async verifyLoginSuccess() {
        // const productPage = new ProductPage(this.page);
        // const numberOfItemsInCart = await productPage.productItem.count();
    
        // await expect(numberOfItemsInCart).toBeGreaterThan(0);
        // await expect(productPage.appLogo).toBeVisible();
    }

    public async verifyLoginFail() {
        await expect(loginPage.errorMessage).toBeVisible();
    }
    
    async verifyLoginFailedWithErrorMsg(errMsg: string) {
        await loginPage.errorMessage.waitFor({ state: 'visible' });
        const actualErrorMessage = await loginPage.errorMessage.textContent();
        expect(actualErrorMessage).toContain(errMsg);
    }

}