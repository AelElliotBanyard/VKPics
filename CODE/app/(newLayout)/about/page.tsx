const page = () => {
  return (
    <div className="about">
      <h1 className="about__title">About</h1>
      <div className="about__section">
        <h2 className="about__section__title">Who am I?</h2>
        <p className="about__section__text">
          I'm a independent developer who loves to create new things and learn
          new technologies. <br />
          I'm a self-taught developer who started learning programming in 2015.{" "}
          <br />I also love to take photos and have taught myself how to edit
          them. <br />
          I take photos of nature, landscapes, animals and people. <br />
          My photos are taken with a Nikon D60 and edited with Adobe Photoshop.
        </p>
      </div>
      <div className="about__section">
        <h2 className="about__section__title">How was this Company created?</h2>
        <p className="about__section__text">
          I started this website as a Project for a course at the BBW. <br />
          The assignment was to create a website showing Multimedia content.{" "}
          <br />
          I decided to create a website where I can show my photos created at
          the Albanifest in Winterthur. <br />
          I also wanted to create a website where I can show my skills as a
          developer. <br />
          I created this website with NextJS and Typescript. <br />
        </p>
      </div>

      <div className="about__section">
        <h2 className="about__section__title">What's my Mission?</h2>
        <p className="about__section__text">
          My mission is to create a website where I can show my skills as a
          developer and my photos. <br />
          I also want to find out how to display my photos in a way that they
          look good on all devices. <br />
          I want to learn how to create a website that is accessible for
          everyone. <br />I want to learn how to create a website that is fast
          and easy to use. <br />
        </p>
      </div>
    </div>
  );
};

export default page;
