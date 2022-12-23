import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { FC, useRef, useState } from "react";
import SectionHeader from "../../../shared/components/sectionheader/sectionheader";
import styles from "./contact.module.scss";
import { primaryColor, secondaryColor } from "../../../theme/colors";
import { Element } from "react-scroll";
import * as yup from "yup";
import { ValidationError } from "yup";
import parseYupError from "../../../utils/yupErrorParser";
import { CircularProgress, Fade, alpha } from "@mui/material";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import FutureStatus from "../../../utils/FutureStatus";
import { sleep } from "../../../utils/common_functions";

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
  const containerRef = useRef<HTMLFormElement>(null);
  const helloRef = useRef<HTMLDivElement>(null);
  const goodbyeRef = useRef<HTMLDivElement>(null);
  const [futureStatus, setFutureStatus] = useState<FutureStatus>(
    FutureStatus.initialized
  );

  const isSuccess = futureStatus === FutureStatus.success;
  const isLoading = futureStatus === FutureStatus.loading;
  const nodeRef = isSuccess ? goodbyeRef : helloRef;

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
        ref={containerRef}
        className={styles["contact-form"]}
        // onSubmit={submitForm}
        // action="https://formspree.io/mvolplar"
        onSubmit={async (e: React.SyntheticEvent) => {
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
            setFormErrors({});
            setFutureStatus((val) => FutureStatus.loading);
            await sleep(2000);
            setFutureStatus((val) => FutureStatus.success);
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
            <Fade in={formErrors.email != null} timeout={700}>
              <p className={styles.errormessage}>{formErrors.email[0]}</p>
            </Fade>
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
            <Fade in={formErrors.message != null} timeout={700}>
              <p className={styles.errormessage}>{formErrors.message[0]}</p>
            </Fade>
          )}
        </div>
        <div className={styles["submit-wrapper"]}>
          <SwitchTransition>
            <CSSTransition
              key={isSuccess ? "contactsuccess" : "contactfailure"}
              nodeRef={nodeRef}
              addEndListener={(done) => {
                nodeRef.current!.addEventListener("transitionend", done, false);
              }}
              classNames={{
                // appear: 'my-appear',
                // appearActive: 'my-active-appear',
                // appearDone: 'my-done-appear',
                enter: styles["fade-enter"],
                enterActive: styles["fade-enter-active"],
                // enterDone: "my-done-enter",
                exit: styles["fade-exit"],
                exitActive: styles["fade-exit-active"],
                // exitDone: "my-done-exit",
              }}
            >
              <div ref={nodeRef}>
                {isSuccess ? (
                  <div
                    className={styles["request-success-message"]}
                    style={{ height: 50 }}
                  >
                    <CheckCircleOutlineIcon style={{ color: primaryColor }} />
                    <div style={{ width: "8px" }} />
                    <p>
                      You request has been sent successfully.
                      {/* I'll get to you as soon as
                      possbile */}
                    </p>
                  </div>
                ) : (
                  <Button
                    className={styles.submit}
                    disabled={isLoading}
                    sx={{
                      backgroundColor: secondaryColor,
                      "&:hover": {
                        backgroundColor: primaryColor,
                      },
                      "&.Mui-disabled": {
                        backgroundColor: alpha(primaryColor, 0.5),
                      },
                    }}
                    style={{ height: 50 }}
                    type="submit"
                    variant="contained"
                  >
                    {isLoading ? (
                      <CircularProgress
                        sx={{ color: "white" }}
                        style={{ width: 30, height: 30 }}
                      />
                    ) : (
                      "Submit"
                    )}
                  </Button>
                )}
              </div>
            </CSSTransition>
          </SwitchTransition>

          {formErrors.unknown != null && (
            <p className={styles.errormessage}>{formErrors.unknown[0]}</p>
          )}
        </div>
      </form>
    </Element>
  );
};
export default Contact;
