import Link from "next/link";

const HeaderCarrossel = () => {
  return (
    <div className="banner-carousel banner-carousel-1 mb-0">
      <div
        className="banner-carousel-item"
        style={{
          backgroundImage:
            "url(/images/header/header-1.jpg)",
        }}
      >
        <div className="slider-content">
          <div className="container h-100">
            <div className="row align-items-center h-100">
              <div className="col-md-12 text-center">
                <h2 className="slide-title" data-animation-in="slideInLeft">
                  9 anos de excelência em
                </h2>
                <h3
                  className="slide-sub-title"
                  data-animation-in="slideInRight"
                >
                  Energia Solar
                </h3>
               {/**
                *  <p
                  data-animation-in="slideInRight"
                  style={{
                    color: "#fff",
                    fontSize: 20,
                    fontWeight: "bold",
                    borderRadius: 50,
                    margin: 0,
                  }}
                >
                  Elétrica & Civil
                </p>
                */}
                <p data-animation-in="slideInLeft" data-duration-in="1.2">
                  <Link href="/servicos" className="slider btn btn-primary">
                    Nossos serviços
                  </Link>
                  <Link href="/contato" className="slider btn btn-primary border">
                    Entrar em contato agora
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="banner-carousel-item"
        style={{
          backgroundImage:
            "url(/images/header/header-2.jpg)",
        }}
      >
        <div className="slider-content">
          <div className="container h-100">
            <div className="row align-items-center h-100">
              <div className="col-md-12 text-center">
                <h2 className="slide-title" data-animation-in="slideInLeft">
                  EM TODA
                </h2>
                <h3
                  className="slide-sub-title"
                  data-animation-in="slideInRight"
                >
                  RONDÔNIA
                </h3>
                <p data-animation-in="slideInLeft" data-duration-in="1.2">
                  <Link href="/servicos" className="slider btn btn-primary">
                    Nossos serviços
                  </Link>
                  <Link href="/contato" className="slider btn btn-primary border">
                    Entrar em contato agora
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="banner-carousel-item"
        style={{
          backgroundImage:
            "url(/images/header/header-3.jpg)",
        }}
      >
        <div className="slider-content">
          <div className="container h-100">
            <div className="row align-items-center h-100">
              <div className="col-md-12 text-center">
                <h2 className="slide-title" data-animation-in="slideInLeft">
                  Orçamento
                </h2>
                <h3
                  className="slide-sub-title"
                  data-animation-in="slideInRight"
                >
                  Prático e rápido
                </h3>
                <p data-animation-in="slideInLeft" data-duration-in="1.2">
                  <Link href="/servicos" className="slider btn btn-primary">
                    Nossos serviços
                  </Link>
                  <Link href="/contato" className="slider btn btn-primary border">
                    Entrar em contato agora
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="banner-carousel-item"
        style={{
          backgroundImage:
            "url(/images/header/header-4.jpg)",
        }}
      >
        <div className="slider-content">
          <div className="container h-100">
            <div className="row align-items-center h-100">
              <div className="col-md-12 text-center">
                <h2 className="slide-title" data-animation-in="slideInLeft">
                  Energia solar para seu
                </h2>
                <h3
                  className="slide-sub-title"
                  data-animation-in="slideInRight"
                >
                  estabelecimento
                </h3>
                <p data-animation-in="slideInLeft" data-duration-in="1.2">
                  <Link href="/servicos" className="slider btn btn-primary">
                    Nossos serviços
                  </Link>
                  <Link href="/contato" className="slider btn btn-primary border">
                    Entrar em contato agora
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCarrossel;
