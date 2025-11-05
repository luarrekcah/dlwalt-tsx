import HelmetHeader from "../../components/HelmetHeader";

const Bv = () => {
  return (
    <div id="myDiv" style={{ display: "block" }}>
        <HelmetHeader
        title={`Integração Banco BV`}
        description="Simule aqui o seu financiamento com a D Walt!"
        url={`integracoes/banco-bv`}
      />
      <iframe
      title="Banco Bv"
        src="https://meufinanciamentosolar.com.br/iframe?token=5f07b609-3ac1-402f-99e4-b63f87eccb1e&origin=iframe"
        style={{ width: "100%", height: 1000, borderStyle: "none" }}
      />
      <div style={{ width: 1140 }}>
        <p style={{ textAlign: "center", color: "#666666" }}>
          {" "}
          Powered by PV Operation e{" "}
          <a
            href="https://meufinanciamentosolar.com.br"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "#666666" }}
          >
            Meu Financiamento Solar
          </a>
        </p>
      </div>
    </div>
  );
};

export default Bv;
