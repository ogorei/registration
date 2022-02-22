import * as Random from 'expo-random';
import * as Crypto from 'expo-crypto';

/**
 * Returns a promise that generates cryptographic random hash digest.
 */
export async function randomSHA256Async() {
  const bytes = Random.getRandomBytes(32);
  const value = bytes.reduce((accumulator, value) => accumulator + String.fromCharCode(value), '');

  const result = await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, value);
  console.log(256, result);
  
  return result;
}