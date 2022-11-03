import { useState } from "react";
import { records } from "../data/Mockdata";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "./Homepage.css";

const Homepage = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="homepage">
      <h1 className="heading"> Toolhub Records</h1>
      <p className="home-para"> Welcome to Toolhub Records</p>
      <p>
        Toolhub Records is a tool that one can be able to search for various
        tools, add tools and edit tools. It has a representation of all users
        that have engeaged with it and one can be able to access the total
        amount of records, missing records and edited records. A chart has been
        used for visual representation to view the accessible data.
      </p>

      <Form className="form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Search for a tool by name :</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enters tool"
            onChange={(e) => setSearch(e.target.value)}
          />
        </Form.Group>

        <div className="head">
          {records
            .filter((record) => {
              if (search === "") {
                return;
              } else if (
                record.name
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase())
              ) {
                return record;
              }
            })
            ?.map((record, i) => (
              <Link to="/dashboard" key={i}>
                {record.name}
              </Link>
            ))}
        </div>
      </Form>
    </div>
  );
};

export default Homepage;
