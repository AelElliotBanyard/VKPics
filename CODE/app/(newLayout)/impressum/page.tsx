const page = () => {
  return (
    <div className="impressum">
      <h1 className="impressum__title">Impressum</h1>
      <div className="impressum__sections">
        <div className="impressum__section">
          <h2 className="impressum__section__title">VKPics AG</h2>
          <div className="impressum__address">
            <p>Breitenweg 7</p>
            <p>8462 Rheinau</p>
            <p>Schweiz</p>
          </div>
          <div className="impressum__contact">
            <p>
              Tel: <a href="tel:+41766511227">+41 76 651 12 27</a>
            </p>
            <p>
              E-Mail:{" "}
              <a href="mailto:ael.banyard@gmail.com">ael.banyard@gmail.com</a>
            </p>
          </div>
        </div>
        <div className="impressum__section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2688.4291556803405!2d8.599015576723591!3d47.63722668586174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47907861b089adf3%3A0x2c86c72a1a7e9b6a!2sBreitenweg%207%2C%208462%20Rheinau!5e0!3m2!1sen!2sch!4v1688118902320!5m2!1sen!2sch"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default page;
