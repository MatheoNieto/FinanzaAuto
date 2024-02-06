import { NativeModules } from 'react-native';
import { shareConfig } from '@shared/config';

export type EnvFlavor = 'development' | 'production';
const flavor = NativeModules.RNENVConfig?.env as EnvFlavor;

const config = {
  flavor,
  api: {
    host: process.env.API_HOST ?? shareConfig.host,
  },
};

export default config;
