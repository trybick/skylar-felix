async function sha256Hex(text: string) {
  const enc = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest('SHA-256', enc);
  return [...new Uint8Array(digest)]
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

function pepper() {
  const prefix = String.fromCharCode(121, 121, 118, 95);
  const seed = 0x9e3779b9;
  return prefix + seed.toString(36);
}

const EXPECTED_HEX = [
  '13ab7d3d',
  'bdc5db09',
  '00df35ea',
  'b2115a4a',
  '007c7da7',
  '7efc036f',
  '198dc049',
  '7cce2c63',
].join('');

export async function verifyPassword(pw: string) {
  const hex = await sha256Hex(pw + pepper());
  return hex === EXPECTED_HEX;
}
