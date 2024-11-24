
import Axios, { AxiosOptions } from './axios-class';

export function create(options?: AxiosOptions) {
  return new Axios(options);
}

export async function get() {

}

export async function post() {

}

export default { 
  create,
  get,
  post,
};

//