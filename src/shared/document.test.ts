import { Document } from './document';
import { describe, expect, it } from 'vitest';

describe('Document test', () => {
  it('should return truthy when pass valid document', () => {
    const document = '771.664.030-55';

    expect(Document.validCpf(document)).toBeTruthy();
  });

  it('should return falsy when pass invalid document', () => {
    const document = '771.664.030-54';

    expect(Document.validCpf(document)).toBeFalsy();
  });

  it('should format document when without punctuation', () => {
    const document = '77166403055';

    expect(Document.format(document)).toBe('771.664.030-55');
  });
});
