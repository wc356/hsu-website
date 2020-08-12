// Libraries
import React from "react";
// Components
import Layout from "../src/components/00_template/Layout";

const BySerenaProjects = () => {
  function renderProjects() {
    return <ul className="projects-list">Hello From Projects</ul>;
  }
  return (
    <Layout>
      <div className="projects-container">{renderProjects()}</div>
      <style jsx>
        {`
          .projects-container {
            min-height: 90vh;
          }
        `}
      </style>
    </Layout>
  );
};

export default BySerenaProjects;
