import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { FC } from "react";
import SectionHeader from "../../../shared/components/sectionheader/sectionheader";
import styles from "./contact.module.scss";
import { primaryColor, secondaryColor } from "../../../theme/colors";
import Assets from "../../../utils/assets";

const Contact: FC = () => {
  const emailStyle = {
    backgroundColor: "#3b4353",
    marginBottom: "3%",
    ".MuiFormLabel-root": {
      color: "white",
    },
    ".MuiInputBase-input": {
      color: "white",
    },

    "& .MuiFilledInput-root::before": {
      borderBottom: `2px solid #6f7b9b`,
    },

    "& .MuiFilledInput-root:hover::before": {
      borderBottom: `2px solid #6f7b9b`,
    },

    "& .MuiFilledInput-root:after": {
      borderBottom: `2px solid ${primaryColor}`,
    },
    "& .MuiInputLabel-root": {
      color: "white",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "white",
    },
  };
  return (
    <div className={styles["contact-form-wrapper"]}>
      <SectionHeader title={"Let's Chat"} />

      <form
        className={styles["contact-form"]}
        // onSubmit={submitForm}
        // action="https://formspree.io/mvolplar"
        method="POST"
      >
        <TextField
          className={styles["email"]}
          type="email"
          name="email"
          label="Email"
          sx={emailStyle}
          // value={emailText}
          // onChange={handleEmailChange}
          variant="filled"
        />
        <TextField
          // className={classes.message}
          type="text"
          name="message"
          label="Message"
          // value={messageText}
          // onChange={handleMessageChange}
          sx={emailStyle}
          multiline
          rows="5"
          variant="filled"
        />
        {false ? (
          <p className="email-success">Thanks!</p>
        ) : (
          <Button
            // className={classes.submit}

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
        )}
        {false && <p>Ooops! There was an error.</p>}
      </form>
    </div>
  );
};
export default Contact;
