const UNLOCKED_SESSION_KEY = 'sf_key_1938571983759187359817359873987598739875';

export function isUnlockedSession() {
  return localStorage.getItem(UNLOCKED_SESSION_KEY) === 'true';
}

export function setUnlockedSession() {
  localStorage.setItem(UNLOCKED_SESSION_KEY, 'true');
}
