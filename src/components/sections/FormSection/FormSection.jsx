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
import Modal from "react-modal";
import { MdOutlineClose } from "react-icons/md";

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
  const [isOpen, setIsOpen] = useState(false);

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

  //function: handle which validation the field should have
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

  //function: update the data object
  const updateField = (id, value) => {
    setFormData({ ...formData, [id]: value });
  };

  //function: handle all field changes
  const handleFieldChange = (id, value) => {
    updateField(id, value);
    if (validateField(id, value)) {
      validateForm();
    } else {
      setIsValidated(false);
    }
  };

  //function: validate the form based on no empty fields
  const validateForm = () => {
    const values = Object.values(formData);
    const noEmptyValue = values.every((value) => value !== "");
    if (noEmptyValue) {
      return setIsValidated(true);
    } else {
      return setIsValidated(false);
    }
  };

  //function: reset form
  const resetForm = () => {
    const clearedForm = { ...formData };
    for (const key in clearedForm) {
      clearedForm[key] = "";
    }
    setFormData(clearedForm);
  };

  //function: post data
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

  //function: handle the submit
  const submitForm = (e) => {
    e.preventDefault();
    if (postData()) {
      openModal();
      resetForm();
      setIsValidated(false);
    }
  };

  //function: open the confirmation modal
  const openModal = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 4000);
  };

  return (
    <>
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
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        className="modal"
        overlayClassName="modalOverlay"
      >
        <MdOutlineClose onClick={() => setIsOpen(false)} className="icon" />
        <h2 className="bigTxt">Yeay!</h2>
        <p className="txt">Your message is on its way</p>
      </Modal>
    </>
  );
};

export default FormSection;
