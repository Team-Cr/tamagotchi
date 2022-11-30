export const BASE_URL = 'https://ya-praktikum.tech/api/v2';
export const BASE_WS_URL = 'wss://ya-praktikum.tech/ws';
export const BASE_MEDIA_URL = `${BASE_URL}/resources/`;

const authAPI = {
  domain: '/auth',
  reg: '/signup/',
  auth: '/signin/',
  getProfile: '/user/',
  logout: '/logout/',
};

const chatAPI = {
  domain: '/chats',
  getDialogs: '/',
  createDialog: '/',
  deleteDialog: '/',
  getChatFiles: '/{id}/files/',
  archiveDialog: '/archive/',
  getArchiveDialogs: '/archive/',
  unarchiveDialog: '/unarchive/',
  getDialogDetails: '/common/',
  getChatUsers: '/{chatId}/users',
  getNewDialogMessages: '/new/{id}/',
  uploadChatAvatar: '/avatar/',
  addUsersToChat: '/users/',
  deleteUsersFromChat: '/users/',
  getChatToken: '/token/{id}/',
  connectToMessageServer: '/{userId}/{chatId}/{token}',
};

const userAPI = {
  domain: '/user',
  profile: '/profile/',
  avatar: '/profile/avatar/',
  search: '/search/',
  password: '/password/',
};

export const api = {
  auth: authAPI,
  chat: chatAPI,
  user: userAPI,
};
