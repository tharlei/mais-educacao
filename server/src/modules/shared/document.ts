export class Document {
  static validCpf(cpf: string): boolean {
    cpf = cpf.replace(/\D/g, '');
    let sum = 0;
    let rest, interactive;

    if (![10, 11].includes(cpf.length)) {
      return false;
    }

    if (cpf == '00000000000') {
      return false;
    }

    for (interactive = 1; interactive <= 9; interactive++)
      sum +=
        parseInt(cpf.substring(interactive - 1, interactive)) *
        (11 - interactive);
    rest = (sum * 10) % 11;

    if ([10, 11].includes(rest)) rest = 0;
    if (rest != parseInt(cpf.substring(9, 10))) {
      return false;
    }

    sum = 0;
    for (interactive = 1; interactive <= 10; interactive++)
      sum +=
        parseInt(cpf.substring(interactive - 1, interactive)) *
        (12 - interactive);
    rest = (sum * 10) % 11;

    if ([10, 11].includes(rest)) rest = 0;
    if (rest != parseInt(cpf.substring(10, 11))) {
      return false;
    }

    return true;
  }

  static format(value: string): string {
    const cpf = value.replace(/\D/g, '');

    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
  }
}
