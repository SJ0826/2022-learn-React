import { createStandardAction } from 'typesafe-actions';
import { GithubProfile } from '../../api/github';
import { AxiosError } from 'axios';

export const GET_USER_PROFILE = 'github/GET_USER_PROFILE';
export const GET_USER_PROFILE_SUCCESS = 'github/GET_USER_PROFILE_SUCCESS';
export const GET_USER_PROFILE_ERROR = 'github/GET_USER_PROFILE_ERROR';

export const getUserProfile = createStandardAction(GET_USER_PROFILE)();
export const getUserProfileSuccess = createStandardAction(GET_USER_PROFILE_SUCCESS)<GithubProfile>();
export const getUserProfileError = createStandardAction(GET_USER_PROFILE_ERROR)<AxiosError>();