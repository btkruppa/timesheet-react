import axios, { AxiosPromise } from 'axios';
import { timesheetUrls } from './url.service';
import { Credential } from '../model/credential';

export function login(creds: Credential): AxiosPromise<string> {
  return axios.post<string>(timesheetUrls.users.login(), creds);
}
