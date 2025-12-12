"use client"

/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "@/lib/api";
import { InputMask } from "@react-input/mask";
import { InputNumberFormat, unformat } from "@react-input/number-format";
import { useState } from "react";

async function handleCepChange(e: React.ChangeEvent<HTMLInputElement>) {
  const cep = e.target.value.replace(/\D/g, "");

  if (cep.length !== 8) return; // só busca quando tiver 8 dígitos

  try {
    const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await res.json();

    if (data.erro) {
      toast.error("CEP não encontrado");
      return;
    }

    // Preenche automaticamente os campos
    (document.querySelector("[name='street']") as HTMLInputElement).value =
      data.logradouro || "";

    (document.querySelector("[name='city']") as HTMLInputElement).value =
      data.localidade || "";

    (document.querySelector("[name='state']") as HTMLInputElement).value =
      data.uf || "";
  } catch (err) {
    toast.error("Erro ao buscar CEP: " + JSON.stringify(err));
  }
}

function validarCPF(cpf: string) {
  cpf = cpf.replace(/[^\d]+/g, "");

  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

  let soma = 0;
  let resto;

  for (let i = 1; i <= 9; i++)
    soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);

  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.substring(9, 10))) return false;

  soma = 0;
  for (let i = 1; i <= 10; i++)
    soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);

  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;

  return resto === parseInt(cpf.substring(10, 11));
}

declare let $: any;

const FinanciamentoComponent = () => {
  const [temEntrada, setTemEntrada] = useState("false");
  const [monthlyIncome, setMonthlyIncome] = useState("0");
  const [downPaymentValue, setDownPaymentValue] = useState("0");
  const [energyBillValue, setEnergyBillValue] = useState("0");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    let data = Object.fromEntries(new FormData(form).entries());

    data = {
      ...data,
      monthlyIncome,
      downPaymentValue,
      energyBillValue,
    };

    if (!validarCPF(data.cpf as string)) {
      toast.error("CPF inválido");
      return;
    }

    // 1. ABRE O MODAL DE LOADING
    $("#loadingModal").modal("show");

    try {
      const response = await api.post("/financial/credit-analysis", data);

      if (response.data.success) {
        // 2. AGUARDA 600ms PARA O LOADING APARECER SEM BUG
        setTimeout(() => {
          // 3. FECHA O MODAL DE LOADING
          $("#loadingModal").modal("hide");
          // 4. AGUARDA O LOADING SUMIR COM SEGURANÇA
          setTimeout(() => {
            // 5. MAIS UM PEQUENO DELAY PARA EVITAR CONFLITO DO BACKDROP
            setTimeout(() => {
              $("#successModal").modal("show");
            }, 300);
          }, 500); // tempo do close do loading
        }, 600);

        // Reset
        form.reset();
      }
    } catch (error) {
      $("#loadingModal").modal("hide");
      toast.error("Erro ao enviar dados: " + JSON.stringify(error));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="modal-body">
        <div className="row">
          {/* VALOR ENERGIA */}
          <div className="col-md-6 form-group">
            <label>Valor da conta de energia</label>

            <InputNumberFormat
              locales={"pt-BR"}
              format="currency"
              currency="BRL"
              name="energyBillValue"
              className="form-control"
              onChange={(event) => {
                const value = event.target.value;
                const number = unformat(value, "pt-BR");
                setEnergyBillValue(number);
              }}
              required
            />
          </div>

          {/* IMÓVEL */}
          <div className="col-md-6 form-group">
            <label>Imóvel</label>
            <select name="propertyType" className="form-control">
              <option value="own">Próprio</option>
              <option value="rented">Alugado</option>
            </select>
          </div>

          {/* NOME */}
          <div className="col-md-12 form-group">
            <label>Nome completo</label>
            <input name="fullName" className="form-control" required />
          </div>

          {/* TELEFONE */}
          <div className="col-md-6 form-group">
            <label>Telefone</label>

            <InputMask
              mask="(__) _____-____"
              replacement={{ _: /\d/ }}
              name="phone"
              className="form-control"
              required
            />
          </div>

          {/* CPF */}
          <div className="col-md-6 form-group">
            <label>CPF</label>
            <InputMask
              mask="___.___.___-__"
              replacement={{ _: /\d/ }}
              name="cpf"
              className="form-control"
              required
            />
          </div>

          {/* RG */}
          <div className="col-md-6 form-group">
            <label>RG</label>

            <input name="rg" className="form-control" required />
          </div>

          {/* NOME DA MÃE */}
          <div className="col-md-6 form-group">
            <label>Nome da mãe</label>
            <input name="motherName" className="form-control" required />
          </div>

          {/* NASCIMENTO */}
          <div className="col-md-6 form-group">
            <label>Data de nascimento</label>
            <input
              type="date"
              name="birthDate"
              className="form-control"
              required
            />
          </div>

          {/* PROFISSÃO */}
          <div className="col-md-6 form-group">
            <label>Profissão</label>
            <input name="profession" className="form-control" required />
          </div>

          {/* RENDA */}
          <div className="col-md-6 form-group">
            <label>Renda mensal</label>
            <InputNumberFormat
              locales={"pt-BR"}
              format="currency"
              currency="BRL"
              name="monthlyIncome"
              className="form-control"
              onChange={(event) => {
                const value = event.target.value;
                const number = unformat(value, "pt-BR");
                setMonthlyIncome(number);
              }}
              required
            />
          </div>

          {/* TEM ENTRADA */}
          <div className="col-md-6 form-group">
            <label>Tem valor de entrada?</label>
            <select
              name="hasDownPayment"
              className="form-control"
              onChange={(e) => setTemEntrada(e.target.value)}
            >
              <option value="false">Não</option>
              <option value="true">Sim</option>
            </select>
          </div>

          {/* VALOR ENTRADA (CONDICIONAL) */}
          {temEntrada === "true" && (
            <div className="col-md-6 form-group">
              <label>Valor de entrada</label>
              <InputNumberFormat
                locales={"pt-BR"}
                format="currency"
                currency="BRL"
                name="downPaymentValue"
                className="form-control"
                onChange={(event) => {
                  const value = event.target.value;
                  const number = unformat(value, "pt-BR");
                  setDownPaymentValue(number);
                }}
                required
              />
            </div>
          )}
        </div>

        <hr />

        <h5>Endereço</h5>

        <div className="row">
          {/* CEP */}
          <div className="col-md-4 form-group">
            <label>CEP</label>

            <InputMask
              mask="_____-___"
              replacement={{ _: /\d/ }}
              name="zipcode"
              className="form-control"
              onBlur={handleCepChange}
              required
            />
          </div>

          <div className="col-md-8 form-group">
            <label>Rua</label>
            <input name="street" className="form-control" required />
          </div>

          <div className="col-md-4 form-group">
            <label>Número</label>
            <input name="houseNumber" className="form-control" required />
          </div>

          <div className="col-md-4 form-group">
            <label>Cidade</label>
            <input name="city" className="form-control" required />
          </div>

          <div className="col-md-4 form-group">
            <label>Estado</label>
            <input name="state" className="form-control" required />
          </div>
        </div>
        <small>
          Ao fornecer seus dados para análise você aceita nosso termo de uso e
          política de privacidade.
        </small>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-dismiss="modal"
        >
          Cancelar Proposta
        </button>
        <button type="submit" className="btn btn-primary">
          Enviar Proposta
        </button>
      </div>
    </form>
  );
};

export default FinanciamentoComponent;
