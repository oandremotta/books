import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'books',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
