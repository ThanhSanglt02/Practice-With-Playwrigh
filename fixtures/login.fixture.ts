import {test as base} from '@playwright/test';
import { LoginSteps } from '../steps/login/loginStep';

type loginFixture = {
    loginSteps: LoginSteps  // ở đây khai báo biến nào thì cái kế thừa nó phải được khai báo giống tên đó --> ví dụ sửa loginSteps thành loginStepss thì ở trong const test phải xuất hiện loginStepss
}

// Khi extend xong, test sẽ có thêm fixture loginSteps kiểu LoginSteps --> typescript hiểu test này có tất cả fixture mặc định + (extend: mở rộng) thêm 1 fixture mới loginSteps có kiểu dữ liệu là LoginSteps
export const test = base.extend<loginFixture>({ 
    page: async ({page, baseURL}, use) => {
        await page.goto(baseURL!);

        await use(page);
    },

    loginSteps: async({page}, use)=> {
        const loginStep = new LoginSteps(page);

        await use(loginStep); // sau khi use thì kết quả trar về sẽ nằm ở biến chứa nó là loginSteps --> mỗi fixture cần phải xác định kiểu dữ liệu của nó thông qua type và truyền qua <> của extend
    }
})