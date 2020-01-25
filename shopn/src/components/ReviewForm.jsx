import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import ShopForm from "./ShopForm";
import TookForm from "./TookForm";

function ReviewRadio() {
  const [took, setTook] = React.useState("false");

  const handleChange = event => {
    setTook(event.target.value);
  };
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">labelPlacement</FormLabel>
      <RadioGroup
        aria-label="position"
        name="position"
        value={took}
        onChange={handleChange}
        row
      >
        <FormControlLabel
          value="false"
          control={<Radio color="primary" />}
          label="Shopping"
          labelPlacement="end"
        />
        <FormControlLabel
          value="true"
          control={<Radio color="primary" />}
          label="Took"
          labelPlacement="end"
        />
      </RadioGroup>
    </FormControl>
  );
}

export default function ReviewForm() {
  const [took, setTook] = React.useState("false");

  const handleChange = event => {
    setTook(event.target.value);
  };
  return (
    <>
      <FormControl component="fieldset">
        <FormLabel component="legend">labelPlacement</FormLabel>
        <RadioGroup
          aria-label="position"
          name="position"
          value={took}
          onChange={handleChange}
          row
        >
          <FormControlLabel
            value="false"
            control={<Radio color="primary" />}
            label="Shopping"
            labelPlacement="end"
          />
          <FormControlLabel
            value="true"
            control={<Radio color="primary" />}
            label="Took"
            labelPlacement="end"
          />
        </RadioGroup>
      </FormControl>
      <div>{took === "true" ? <TookForm /> : <ShopForm />}</div>
    </>
  );
}
