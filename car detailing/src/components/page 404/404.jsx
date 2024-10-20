export default function PageNotFound() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>404 - Не е намерено</title>
      <link rel="stylesheet" href="styles.css" />
      <div className="error-page">
        <div className="content">
          <h1>404</h1>
          <p>Това, което търсите, не беше намерено.</p>
          <a href="/" className="back-btn">
            Назад
          </a>
        </div>
      </div>
    </>
  );
}
