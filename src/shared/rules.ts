import { Document } from './document';

export const rules = {
  name: [
    (v: string) => !!v.trim() || 'Nome é obrigatório',
    (v: string) =>
      v.split(' ').length >= 2 || 'Nome e sobrenome são obrigatórios',
  ],
  email: [
    (v: string) => !!v.trim() || 'E-mail é obrigatório',
    (v: string) => v.search('@') != -1 || 'E-mail inválido',
  ],
  ra: [(v: string) => !!v.trim() || 'Registro Acadêmico é obrigatório'],
  document: [
    (v: string) => !!v || 'CPF é obrigatório',
    (v: string) => Document.validCpf(v) || 'CPF inválido',
  ],
};
