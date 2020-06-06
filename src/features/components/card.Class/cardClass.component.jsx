import React from "react";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "../Card/Card.jsx";
import CardBody from "../Card/CardBody.jsx";
import Button from "@material-ui/core/Button";
import image1 from "../../../../assets/img/bg.jpg";
import image2 from "../../../../assets/img/bg2.jpg";
import image3 from "../../../../assets/img/bg3.jpg";
import imagesStyles from "../../../../assets/jss/material-kit-react/imagesStyles.jsx";
import { cardTitle } from "../../../../assets/jss/material-kit-react.jsx";
import styles from "./cardClass.component.scss";

const style = {
  ...imagesStyles,
  cardTitle
};

class Cards extends React.Component {
  render() {
    const { classes, board, dontShowImage } = this.props;
    return (
      <div className={styles.card}>
        <Card>
       { !dontShowImage && board.images && <img
            
            className={styles.imgCardTop}
            src={
              board.images[0] ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIlnoLttdDOjv9SyNmIxM450ji7q1m_3Tki7YqdMwNo5IYU2jnWQ"
            }
            alt="Card-img-cap"
          />}
          <CardBody>
            {/* <p>ID: {board.id}</p> */}
            <h4 className={classes.cardTitle} style={{ color: "#a73a9d"}}>{board.brand || "Al Meric"}</h4>
            <p> {board.type}</p>
            <p> {board.model}</p>
            <p> {board.length || "length: will update"}</p>
            <p>  {board.tail} {board.finSetUp || "fcs * 3"} {board.construction}</p>
            <p> {board.location || "Ericeira Portugal"} </p>
            <h5>
              <span style={{ fontWeight: 700, color: "red" }}>
                {" "}
                13 us$ per day
              </span>
              <Button color="primary">Book Now</Button>
            </h5>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default withStyles(style)(Cards);
