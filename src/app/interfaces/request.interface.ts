import { HttpHeaders, HttpParams } from "@angular/common/http";
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
type RequestParams = string | number | boolean | ReadonlyArray<string | number | boolean>;

export interface CustomRequest {
  url: string;
  method: HttpMethod;
  body?: {};
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  params?: HttpParams | {
    [param: string]: RequestParams;
  };
}

//Unicamente para los Token de Cognito
export interface HttpRequestInterface {
  url: string;
  body: Body;
  reportProgress: boolean;
  withCredentials: boolean;
  responseType: string;
  method: string;
  headers: Headers;
  context: Context;
  params: Params;
  urlWithParams: string;
}

export interface HttpRequestInterface {
  url: string;
  body: Body;
  reportProgress: boolean;
  withCredentials: boolean;
  responseType: string;
  method: string;
  headers: Headers;
  context: Context;
  params: Params;
  urlWithParams: string;
}

export interface Body {
  idEmpresa: string;
  idUsuario: string;
}

export interface Context {
  map: Map;
}

export interface Map {
}

export interface Headers {
  normalizedNames: Map;
  lazyUpdate: null;
  headers: Map;
}

export interface Params {
  updates: null;
  cloneFrom: null;
  encoder: Map;
  map: Map;
}