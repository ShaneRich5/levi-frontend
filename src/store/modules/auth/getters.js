import { deepCopy } from '../../util';

export const token = state => state.token;

export const user = state => deepCopy(state.user);

export const isAauthenticated = state => state.authenticated;
