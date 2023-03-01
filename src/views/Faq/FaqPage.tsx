import React, { useState } from "react";
import styles from "@/views/Faq/FaqPage.module.scss";
import classnames from "classnames";
export const FaqPage: React.FC = () => {
  const [isHideButton, setIsHideButton] = useState<boolean>(false);
  const [faqClass, setFaqClass] = useState<string>("AccordionTextHide");

  const buttonClickHandler = () => {
    setIsHideButton(!isHideButton);
    setFaqClass(!isHideButton ? "AccordionTextShow" : "AccordionTextHide");
  };

  const title = <h2>FAQ</h2>;
  const button = (
    <button
      onClick={buttonClickHandler}
      className={styles.button}
    >
      {isHideButton ? "Hide" : "Show"}
    </button>
  );
  const faqText = (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aliquid
      corporis dolore dolorem facere, hic id inventore iste iure modi molestiae
      natus nisi porro praesentium soluta totam veritatis, voluptatum.
    </p>
  );
  return (
    <div className={styles.Accordion}>
      <div className={styles.AccordionHead}>
        {title}
        {button}
      </div>
      <div
        className={classnames(styles.AccordionText, faqClass)}
        data-testid="faq-text"
      >
        {faqText}
      </div>
    </div>
  );
};
