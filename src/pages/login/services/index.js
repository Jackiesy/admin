import request from '../../../request/request';

export async function login(params) {
  console.log('sss',params);
  return request.post(request.api.platformLogin, params);
}
