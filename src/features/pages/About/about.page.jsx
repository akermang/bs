import React from "react";
import IntegrationReactSelect from "../../components/autoSelect/autoSelect.component.jsx";
import Typography from "@material-ui/core/Typography";
import styles from "./about.page.scss";
import image1 from "../../../../assets/img/bg6.jpg";
import image2 from "../../../../assets/img/bg8.jpg";


const AboutPage = () => (
  <div>
    <Typography variant="display1" component="h3">
      BoardShare - About Page
    </Typography>
    <Typography variant="subheading" component="p" color="textSecondary">
      Surfboard for your vacation.
    </Typography>
    <p> “Members were asking for more surfboards, more locations, the ability to
    book multiple surfboards for longer than 5 days, and for the flexibility to
    only pay for the days they used the boards.</p>
   
    {/* <IntegrationReactSelect /> */}
    <img className={styles.aboutImg} src={image1} alt="" />
    <img className={styles.aboutImg} src={image2} alt="" />
    <p>
      Since starting this platform, Brad has also added the role of Editor of
      Surfing Life Magazine and part-time commentator with the World Surf League
      to his media stable, uniquely dovetailing three areas of the action sports
      industry, establishing himself as an expert in the field.
    </p>
  </div>
);

export default AboutPage;
