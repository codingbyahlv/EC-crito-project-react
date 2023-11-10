import "@styles/main.scss";
import "./SignUpSection.scss";
import ButtonGeneral from "@shared/Buttons/ButtonGeneral";
import InputField from "../../shared/Inputs/InputField";

const SignUpSection = () => {
  return (
    <section className="signupSection">
      <div className="contentWrapper">
        <h2 className="sectionHeadingBig">Get News Updates By Signup</h2>
        <form>
          <InputField
            className="input"
            placeholder="username@domain.com"
            id="signup-email"
            name="signup-email"
          />
          <ButtonGeneral
            value="Subscribe"
            className="btnYellow alignSelfCenter"
            iconName="arrow"
          />
        </form>
      </div>
    </section>
  );
};

export default SignUpSection;
