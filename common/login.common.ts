export const standardUserCredentials = {
    username: "standard_user",
    password: "secret_sauce",
    firstName: "Standard",
    lastName: "User",
    postalCode: "1234",
};

export const failedUsersCredentials = [
    {
      username: "error_user",
      password: "wrong_sauce",
      expectedError:
        "Epic sadface: Username and password do not match any user in this service",
    },
    {
      username: "error_user",
      password: "",
      expectedError: "Password is required",
    },
    {
      username: "",
      password: "",
      expectedError: "Username is required",
    },
];