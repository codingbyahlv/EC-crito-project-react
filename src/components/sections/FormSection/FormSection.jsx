//TODO: Lägg in funtionaliteten

import ButtonGeneral from "@shared/Buttons/ButtonGeneral";
import InputField from "@shared/Inputs/InputField";
import TextArea from "@shared/Inputs/TextArea";
import "@styles/main.scss";
import "./FormSection.scss";

const FormSection = () => {
  return (
    <form className="formSection">
      <h3 className="heading">Leave us a message for any information.</h3>
      <InputField
        className="formInput"
        placeholder="Name*"
        id="name"
        name="name"
        required
      />
      <InputField
        className="formInput"
        placeholder="Email*"
        id="email"
        name="email"
        required
      />
      <TextArea
        className="formInput textArea"
        placeholder="Your message*"
        id="message"
        name="message"
        required
      />
      <ButtonGeneral
        className="btnYellow"
        value="Send message"
        iconName="arrow"
      />
    </form>
  );
};

export default FormSection;
