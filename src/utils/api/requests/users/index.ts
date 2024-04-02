import { api } from '@api/instance';

export const getUsers = async () => api.get<User>('users');
