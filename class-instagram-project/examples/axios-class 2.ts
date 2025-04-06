export type AxiosOptions = {
  baseURL?: string;
  timeout?: number;
}

export type AxiosResponse = {
  data: any;
  status: number;
  config: any;
}

class Axios {
  public baseURL: string;
  public timeout: number;
  // ...

  constructor(options?: AxiosOptions) {
    if (options?.baseURL) {
      this.baseURL = options.baseURL;
      // 
    }
  }

  async get(url: string): Promise<AxiosResponse> {
    //
  }

  async post() {

  }

  async put() {

  }

  async delete() {

  }
}

export default Axios;
