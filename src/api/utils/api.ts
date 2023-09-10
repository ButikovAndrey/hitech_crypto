import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export const ApiBase: AxiosInstance = axios.create();

interface IResponseModel<TData> {
  data: TData;
}

interface IRequestModel<TParams> {
  params: TParams;
}

function wrapRequestModel<T>(data?: T) {
  return {
    params: data,
  } as IRequestModel<T>;
}

export default class Api {
  static get<T>(url: string, config?: AxiosRequestConfig<IResponseModel<T>>) {
    return ApiBase.get<IResponseModel<T>>(url, config);
  }

  static post<R, T>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig<IRequestModel<T>>,
  ) {
    return ApiBase.post<IRequestModel<T>, AxiosResponse<IResponseModel<R>>>(
      url,
      wrapRequestModel(data),
      config,
    );
  }

  static postUnwrapped<R, T>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig<T>,
  ) {
    return ApiBase.post<T, AxiosResponse<IResponseModel<R>>>(url, data, config);
  }

  static put<R, T>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig<IRequestModel<T>>,
  ) {
    return ApiBase.put<IRequestModel<T>, AxiosResponse<IResponseModel<R>>>(
      url,
      wrapRequestModel(data),
      config,
    );
  }

  static delete<R, T>(url: string, data?: T) {
    return ApiBase.delete<IRequestModel<T>, AxiosResponse<IResponseModel<R>>>(
      url,
      wrapRequestModel(data),
    );
  }
}
