import { request } from '@playwright/test';
import { RequestUtils } from '@wordpress/e2e-test-utils-playwright';

async function globalSetup() {
    const requestContext = await request.newContext({
      baseURL: process.env.WP_BASE_URL,
    });

    const requestUtils = new RequestUtils(requestContext, {
        storageStatePath: process.env.WP_AUTH_STORAGE,
        user: {
            username: process.env.WP_ADMIN_USERNAME,
            password: process.env.WP_ADMIN_PASSWORD,
        }
    });

    
    await requestUtils.setupRest();
    await requestContext.dispose();
};

export default globalSetup;