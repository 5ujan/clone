import React from "react";
import Preview from "../home/Preview";
import data from '../../data'
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";


const Two = () => {
  const {setType}=useGlobalContext()

  return (
    <section>
      <div className="projects-two">
        <div className="two-header">
          <h2 className="one-text-large blue">Our Developmental Works</h2>
          <h5 className="one-text black">
            We indicate our absolute interest in developing tangible
            applications in the fields of Physics and Tech.
          </h5>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignSelf: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <h4
            className="one-text-large light"
            style={{
              color: "black",
              fontSize: "2rem",
              textTransform: "capitalize",
            }}
          >
            Physics
          </h4>
          <div
            className="article-container"
            style={{ display: "flex", margin: "2rem 0", gap: "2rem" }}
          >
            {data.projects.map((item, id) => (
              <Link
                key={id}
                onClick={() => {
                  setType('project');
                }}
                to={`/projects/${item.id}`}
              >
                <Preview {...item}></Preview>{" "}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Two;
