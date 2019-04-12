import request from '@/utils/request';

export async function allTree() {
  return request('/api/permit/allTree');
}
