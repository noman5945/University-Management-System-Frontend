export interface LoginRequest {
  id: string;
  password: string;
}

export interface LoginResponse {
  data?: any;
  accessToken: string;
  needsPasswordChange: boolean;
  // Add other response fields if necessary
}
