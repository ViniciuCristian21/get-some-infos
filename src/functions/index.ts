import { getCep } from "./getCEP";
import { getCnpj } from "./getCNPJ";
import { getCpf } from "./getCPF";
import { getNomeAleatorio } from "./getName";
import { getPhone } from "./getPhone";

export function getAllInfos() {
    const cnpj = getCnpj();
    const cpf = getCpf();
    const cep = getCep();
    const phone = getPhone();
    const name = getNomeAleatorio();

    const data = JSON.stringify(
        {
            CNPJ: cnpj,
            CPF: cpf,
            CEP: cep,
            PHONE: phone,
            NAME: name
        })
    console.log(data)

    return data;
}