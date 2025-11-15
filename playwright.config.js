import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

    reporter: [
        ['list'],
        ['allure-playwright']
    ],

    use: {
        screenshot: 'on',
        video: 'on',
        trace: 'on'
    }
});