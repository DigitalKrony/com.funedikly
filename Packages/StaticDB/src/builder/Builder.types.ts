/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

export type RandomProps = {
  type: 'connection';
  object: string;
} | {
  type: 'hex-key';

};

export interface BuildConfig {
  includeDefaults: boolean;
  extends: string[];
  destination: string;
  staticData: any;
}

export interface Defaults {

}

export interface PackageJson {
  name: string;
  version: string;
  description?: string;
  main?: string;
  scripts?: {
    [key: string]: string;
  };
  dependencies?: {
    [key: string]: string;
  };
  devDependencies?: {
    [key: string]: string;
  };
  // ... other properties
}