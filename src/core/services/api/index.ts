import axios from 'axios';
import axiosRetry from 'axios-retry';
import config from '@config';

const {
  api: { host },
} = config;

const generalRequest = axios.create({
  baseURL: host,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

/**
 * Retries request if failed, check options: https://www.npmjs.com/package/axios-retry#options
 */
axiosRetry(generalRequest, { retries: 0 });

export default generalRequest;
