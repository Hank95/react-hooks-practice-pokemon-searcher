import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ handleSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    hp: undefined,
    frontUrl: "",
    backUrl: "",
  });
  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  console.log(formData);
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={() => {
          console.log("submitting form...");
          handleSubmit(formData);
        }}
      >
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            placeholder="Name"
            name="name"
            onChange={handleFormChange}
            value={formData.name}
          />
          <Form.Input
            fluid
            label="hp"
            placeholder="hp"
            name="hp"
            onChange={handleFormChange}
            value={formData.hp}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleFormChange}
            value={formData.frontUrl}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleFormChange}
            value={formData.backUrl}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
