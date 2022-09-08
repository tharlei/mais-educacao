export class Document {
  static validCpf(cpf: string): boolean {
    cpf = cpf.replace(/\D/g, '');
    let sum = 0;
    let rest, interactive;
    if (cpf == '00000000000') return false;

    for (interactive = 1; interactive <= 9; interactive++)
      sum +=
        parseInt(cpf.substring(interactive - 1, interactive)) *
        (11 - interactive);
    rest = (sum * 10) % 11;

    if ([10, 11].includes(rest)) rest = 0;
    if (rest != parseInt(cpf.substring(9, 10))) return false;

    sum = 0;
    for (interactive = 1; interactive <= 10; interactive++)
      sum +=
        parseInt(cpf.substring(interactive - 1, interactive)) *
        (12 - interactive);
    rest = (sum * 10) % 11;

    if ([10, 11].includes(rest)) rest = 0;
    if (rest != parseInt(cpf.substring(10, 11))) return false;
    return true;
  }
}
