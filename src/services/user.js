import request from '@/utils/request';

export async function query() {
  return request('/api/users');
}

export async function queryCurrent() {
  return request('/api/currentUser');
}

/**
 * 获取菜单
 * @param {*} params
 */
export async function queryRoute() {
  return request('/api/permit/my');
}
