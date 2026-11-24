
import { describe, it, expect } from 'vitest';

function validatePassword(password) {
  return typeof password === 'string' &&
         password.length >= 8 &&
         password.length <= 100;
}

describe('Validation du mot de passe', () => {
  it('accepte un mot de passe valide', () => {
    expect(validatePassword('Test12345')).toBe(true);
  });

  it('refuse un mot de passe trop court', () => {
    expect(validatePassword('abc')).toBe(false);
  });

  it('refuse un mot de passe vide', () => {
    expect(validatePassword('')).toBe(false);
  });

  it('refuse un mot de passe de plus de 100 caractères', () => {
    expect(validatePassword('a'.repeat(101))).toBe(false);
  });
});
