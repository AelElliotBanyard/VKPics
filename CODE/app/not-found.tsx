const notFound = () => {
  return (
    <div className="not-found">
      <h1 className="not-found__title">Oops</h1>
      <h2 className="not-found__error">404 - Page not found</h2>
      <h3 className="not-found__message">
        The page you are looking for might have been removed, had it’s name
        changed or is temporarily unavailable.
      </h3>
    </div>
  );
};

export default notFound;
