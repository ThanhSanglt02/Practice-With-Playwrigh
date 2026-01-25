// import {test} from '@playwright/test'
import {test} from '../fixtures/login.fixture';
import {standardUserCredentials, failedUsersCredentials} from '../common/login.common'  // import data để chạy test


test.describe('Login Page', async() => {
    test('Verify if user is able to login to the application', async({
        loginSteps,
    }) => {
        await test.step("Fill username & password", async({}) => {
            await loginSteps.fillCredentials(
                standardUserCredentials.username, standardUserCredentials.password
            )
        });
        await test.step("Click login button", async () => {
            await loginSteps.clickLoginButton();
        });
    });

    // Chỗ này xịn --> có nghĩa sử dụng vòng lặp forEach và trong foreach sẽ là 1 callback gômf các tham số. Tham số ở dây là duyệt qua từng object và có các value username, password, expectedError
    failedUsersCredentials.forEach(({ username, password, expectedError }) => {
        test(`Verify if user is failed to login to the application with ${username}:${password}`, async({
            loginSteps,
        }) => {
            await test.step("Fill username & password and click login btn", async({}) => {
                await loginSteps.fillCredentials(username, password);
                await loginSteps.clickLoginButton();
            });
            await test.step("Verify that user is failed to login to page", async({}) => {
                await loginSteps.verifyLoginFailedWithErrorMsg(expectedError)
            });
        });
    });

    failedUsersCredentials.forEach(({ username, password, expectedError }) => {
        test(`Verify if user is failed to login to the application with ABC ${username}:${password}`, async({
            loginSteps,
        }) => {
            await test.step("Fill username & password and click login btn", async({}) => {
                await loginSteps.fillCredentials(username, password);
                await loginSteps.clickLoginButton();
            });
            await test.step("Verify that user is failed to login to page1", async({}) => {
                await loginSteps.verifyLoginFailedWithErrorMsg(expectedError)
            });

            await test.step("Verify that user is failed to login to page", async({}) => {
                await loginSteps.verifyLoginFailedWithErrorMsg(expectedError)
            });
        });
    });

});
