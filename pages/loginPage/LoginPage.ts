import { Location, Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";


export class LoginPage extends BasePage {
    readonly usernameInputPath = `[data-test="username"]`;
    readonly passwordInputPath = `[data-test="password"]`;
    readonly loginButtonPath = `[data-test="login-button"]`;
    readonly errorMessagePath = `[data-test="error"]`;
    readonly errorCloseButtonPath = `[data-test="error-button"]`;

    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;
    readonly errorCloseButton: Locator;

    constructor(readonly page:Page) {
        super(page)
        this.usernameInput = page.locator(this.usernameInputPath);
        this.passwordInput = page.locator(this.passwordInputPath);
        this.loginButton = page.locator(this.loginButtonPath);
        this.errorMessage = page.locator(this.errorMessagePath);
        this.errorCloseButton = page.locator(this.errorCloseButtonPath);
    }

}