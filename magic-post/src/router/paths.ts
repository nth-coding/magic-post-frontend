export const Paths = {
    HOME: '/',
    MAIN: '/main',
    LOGIN: '/signin',
    REGISTER: '/register',
    FORGOT_PASSWORD: '/forgot-password',
    RESET_PASSWORD: '/reset-password',
    LOGIN_COMPLETE: '/login-complete',
    REGISTER_SUCCESS: '/register-success',
    REGISTRATION_RESEND_ACTIVATION: '/registration-resend-activation',
    REGISTRATION_RESEND_ACTIVATION_SUCCESS: '/registration-resend-activation-success',
    LOGIN_ADDIN_SUCCESS: '/login-addin-success',
    CONFIRM_REGISTRATION: '/confirm-registration',
    CHANGE_PASSWORD: '/change-password',

    MANAGE_USER: '/manage-user',
    ADMIN_MANAGE_USER: '/admin/customers',
    ADMIN_MANAGE_POINT: '/admin/points',
    ADMIN_MANAGE_PACKAGE: '/admin/packages',

    HEADTRAN_MANAGE_USER: '/trans-leader/customers',
    HEADTRAN_MANAGE_ORDER: '/trans-leader/order',
    HEADCOL_MANAGE_USER: '/col-leader/customers',
    HEADCOL_MANAGE_ORDER: '/col-leader/order',

    LEADER_MANAGE_USER: '/leader/customers',
    LEADER_MANAGE_ORDER: '/leader/order',
}

export const ANONYMOUS_ALLOW_PATHS = [
    Paths.HOME,
    Paths.LOGIN,
    Paths.REGISTER,
]