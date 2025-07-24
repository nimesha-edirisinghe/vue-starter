import axios from 'axios';
import { config } from '@/utils/config';

export const apiClient = axios.create({
    baseURL: config.apiBaseUrl,
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
    withCredentials: false,
});
