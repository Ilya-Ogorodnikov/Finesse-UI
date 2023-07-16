import { Configuration } from "webpack";

export interface IENVList {
  mode: Configuration['mode'];
  port: number;
}

export interface IBaseConfigOptions {
  mode: Configuration['mode'];
  isDev: boolean;
  port: number;
}