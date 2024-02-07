import axios from 'axios';
import axiosRetry from 'axios-retry';
import config from '../../../config/config';

const {
  api: { host },
} = config;

const generalRequest = axios.create({
  baseURL: host,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'app-id': '63473330c1927d386ca6a3a5',
  },
});

/**
 * Retries request if failed, check options: https://www.npmjs.com/package/axios-retry#options
 */
axiosRetry(generalRequest, { retries: 0 });

export default generalRequest;
