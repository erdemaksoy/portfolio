const Info = () => {
  return (
    <>
      <div className="about__info grid">
        <div className="about__box">
          <i className="bx bx-award about__icon"></i>
          <h3 className="about__title">Languages</h3>
          <span className="about__subtitle">
            C, C++, C#, React, Flutter, Dart, ASP.NET, HTML, CSS, JavaScript,
            TypeScript, PHP, Python, Java, SQL
          </span>
          <h3 className="about__title">Tools</h3>
          <span className="about__subtitle">
            VsCode, Visual Studio, Android Studio, MsSQL, MySQL, PostgreSQL,
            Firebase, Matlab, NetBeans, IntelliJ, Redis
          </span>
        </div>
        <div className="about__box">
          <i className="bx bx-briefcase-alt about__icon"></i>
          <h3 className="about__title">Completed</h3>
          <span className="about__subtitle"> 15 + Projects</span>
        </div>

        <div className="about__box">
          <i className="bx bxs-graduation about__icon"></i>
          <h3 className="about__title">Learns Easily</h3>
          <span className="about__subtitle">Experienced in all fields</span>
        </div>
      </div>
    </>
  );
};

export default Info;
