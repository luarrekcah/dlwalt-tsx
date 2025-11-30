import Link from "next/link";

const BannerHeading = ({ title }: { title: string }) => {
  return (
    <div
      id="banner-area"
      className="banner-area"
      style={{ backgroundImage: "url(/images/banner/banner1.webp)" }}
    >
      <div className="banner-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-heading">
                <h1 className="banner-title">{title}</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <Link href="/">Página Principal</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {title}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerHeading;
