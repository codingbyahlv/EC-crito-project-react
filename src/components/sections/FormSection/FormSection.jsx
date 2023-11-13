//TODO: Lägg in post bekräftelse
import { useState } from "react";
import { postForm as NewsAPI_postForm } from "@services/NewsAPI";
import ButtonGeneral from "@shared/Buttons/ButtonGeneral";
import InputField from "@shared/Inputs/InputField";
import TextArea from "@shared/Inputs/TextArea";
import {
  validateEmail,
  validateName,
  validateMessage,
} from "@utils/Validation";
import "@styles/main.scss";
import "./FormSection.scss";

const FormSection = () => {
  const [errorData, setErrorData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isValidated, setIsValidated] = useState(false);

  const setErrorMessage = (error, id) => {
    const errorMessage = {
      name: "Input must be at least 2 characters long",
      email: "Email has an invalid format",
      message: "Input must be at least 3 characters long",
    };

    if (error) {
      setErrorData({
        ...errorData,
        [id]: errorMessage[id],
      });
    } else {
      setErrorData({
        ...errorData,
        [id]: "",
      });
    }
  };

  //handle which validation the field should have
  const validateField = (id, value) => {
    let fieldValidation = false;
    switch (id) {
      case "name":
        fieldValidation = validateName(value);
        break;
      case "email":
        fieldValidation = validateEmail(value);
        break;
      case "message":
        fieldValidation = validateMessage(value);
        break;
    }

    let error = false;
    if (!fieldValidation) {
      error = true;
      setErrorMessage(error, id);
      return false;
    } else {
      setErrorMessage(error, id);
      return true;
    }
  };

  //update the data object
  const updateField = (id, value) => {
    setFormData({ ...formData, [id]: value });
  };

  //handle all field changes
  const handleFieldChange = (id, value) => {
    updateField(id, value);
    if (validateField(id, value)) {
      validateForm();
    } else {
      setIsValidated(false);
    }
  };

  //validate the form based on no empty fields
  const validateForm = () => {
    const values = Object.values(formData);
    const noEmptyValue = values.every((value) => value !== "");
    if (noEmptyValue) {
      return setIsValidated(true);
    } else {
      return setIsValidated(false);
    }
  };

  //reset form
  const resetForm = () => {
    const clearedForm = { ...formData };
    for (const key in clearedForm) {
      clearedForm[key] = "";
    }
    setFormData(clearedForm);
  };

  //post data
  const postData = async () => {
    try {
      const resp = await NewsAPI_postForm(formData);
      if (resp.status === 200) {
        console.log("Skickad");
        return true;
      }
    } catch (error) {
      alert("Oh shit! Something wrong!");
      return false;
    }
  };

  //handle the submit
  const submitForm = (e) => {
    e.preventDefault();
    if (postData()) {
      resetForm();
      setIsValidated(false);
    }
  };

  return (
    <form className="formSection" noValidate onSubmit={submitForm}>
      <h3 className="heading">Leave us a message for any information.</h3>
      <InputField
        className="formInput"
        placeholder="Name*"
        id="name"
        name="name"
        value={formData.name}
        required
        onChange={(e) => handleFieldChange(e.target.id, e.target.value)}
        error={errorData.name}
      />
      <InputField
        className="formInput"
        placeholder="Email*"
        id="email"
        name="email"
        value={formData.email}
        required
        onChange={(e) => handleFieldChange(e.target.id, e.target.value)}
        error={errorData.email}
      />
      <TextArea
        className="formInput textArea"
        placeholder="Your message*"
        id="message"
        name="message"
        value={formData.message}
        required
        onChange={(e) => handleFieldChange(e.target.id, e.target.value)}
        error={errorData.message}
      />
      <ButtonGeneral
        className="btnYellow"
        value="Send message"
        iconName="arrow"
        disabled={!isValidated}
      />
    </form>
  );
};

export default FormSection;
