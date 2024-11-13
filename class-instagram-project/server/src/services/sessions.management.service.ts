type UsersSessionsAndTokens = {
  [key: string]: { accessToken: string, refreshToken: string, lastActivity: number };
}

//'<userId>': { accessToken, refreshToken, lastActivity }
export const ACTIVE_USERS_SESSIONS_AND_TOKENS: UsersSessionsAndTokens = {};