import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { FC, FormEvent, useState } from "react";
import SectionHeader from "../../../shared/components/sectionheader/sectionheader";
import styles from "./contact.module.scss";
import { primaryColor, secondaryColor } from "../../../theme/colors";
import { Element } from "react-scroll";
import * as yup from "yup";
import { ValidationError } from "yup";
import parseYupError from "../../../utils/yupErrorParser";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Please enter your email")
    .email("Please enter a valid email"),
  message: yup
    .string()
    .required("Please enter a message")
    .min(8, "Message must be at least 8 characters long"),
});
// type ContactData = InferType<typeof schema>;
const Contact: FC = () => {
  const [formErrors, setFormErrors] = useState<any>({});
  console.log("schema.fields", schema.type);
  const emailStyle = {
    backgroundColor: "#3b4353",
    marginBottom: "1.5%",
    ".MuiFormLabel-root": {
      color: "white",
    },
    ".MuiInputBase-input": {
      color: "white",
    },

    ".MuiFilledInput-root": {
      "&::before": {
        borderBottom: `2px solid #6f7b9b`,
      },
      "&:hover::before": {
        borderBottom: `2px solid #6f7b9b`,
      },
      "&::after": {
        borderBottom: `2px solid ${primaryColor}`,
      },
      "&.Mui-error:after": {
        borderBottomColor: "yellow",
      },
    },

    ".MuiInputLabel-root": {
      color: "white",
      "&.Mui-focused": {
        color: "white",
      },
      "&.Mui-error": {
        color: "yellow",
      },
    },
  };
  return (
    <Element name="contact" className={styles["contact-form-wrapper"]}>
      <SectionHeader title={"Let's Chat"} />
      <form
        className={styles["contact-form"]}
        // onSubmit={submitForm}
        // action="https://formspree.io/mvolplar"
        onSubmit={(e: React.SyntheticEvent) => {
          e.preventDefault();

          const target = e.target as typeof e.target & {
            email: { value: string };
            message: { value: string };
          };

          try {
            schema.validateSync(
              {
                email: target.email.value,
                message: target.message.value,
              },
              { abortEarly: false, strict: true }
            );
          } catch (e: any) {
            if (e instanceof ValidationError) {
              console.log(parseYupError(e));
              setFormErrors(parseYupError(e));
            } else {
              setFormErrors({
                unknown: [
                  "Oops! Something went wrong. Please try again later.",
                ],
              });
              console.log("Something went wrong");
            }
          }
        }}
        method="POST"
      >
        <div className={styles.textfield}>
          <TextField
            className={styles["email"]}
            // type="email"
            name="email"
            label="Email"
            sx={emailStyle}
            error={formErrors.email != null}
            // helperText={formErrors.email && formErrors.email[0]}
            // value={emailText}
            // onChange={handleEmailChange}
            variant="filled"
          />
          {formErrors.email != null && (
            <p className={styles.errormessage}>{formErrors.email[0]}</p>
          )}
        </div>

        <div className={styles.textfield}>
          <TextField
            className={styles.message}
            type="text"
            name="message"
            label="Message"
            // value={messageText}
            // onChange={handleMessageChange}
            sx={emailStyle}
            multiline
            rows="5"
            variant="filled"
            error={formErrors.message != null}
            // helperText={formErrors.message && formErrors.message[0]}
          />
          {formErrors.message != null && (
            <p className={styles.errormessage}>{formErrors.message[0]}</p>
          )}
        </div>
        <div className={styles["submit-wrapper"]}>
          <Button
            className={styles.submit}
            sx={{
              backgroundColor: secondaryColor,
              "&:hover": {
                backgroundColor: primaryColor,
              },
            }}
            type="submit"
            variant="contained"
          >
            Submit
          </Button>
          {formErrors.unknown != null && (
            <p className={styles.errormessage}>{formErrors.unknown[0]}</p>
          )}
        </div>
      </form>
    </Element>
  );
};
export default Contact;
