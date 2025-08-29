/*
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 */

export const publicRoutes = ["/", "/error"];

/*
 * An array of routes that are used for authentication
 * These routes do not require authentication
 */

export const authRoutes = ["/login"];

export const roleRoutes = ["news", "activities", "centers"];

/*
 * the default redirect path after login in
 * @type (string)
 */
export const DEFAULT_LOGIN_REDIRECT_URL = "/dashboard-admin";
