import React from "react";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import { DialogActions, DialogTitle, DialogContent } from "@material-ui/core";
import styles from "./dialog.component.scss";
import Button from "@material-ui/core/Button";
import { translate } from "react-i18next";

const DialogComponent = ({ component, title, closeDialog, open, isRtl, t, handler }) => (
  
  <Dialog
    style={isRtl ? { direction: "rtl" } : null}
    style={{ alignItems: 0 }}
    open={open}
    fullWidth={true}
    fullScreen={false}
    onClose={() => closeDialog()}
    className={styles.dialog}
  >
  {console.log(this)}
    <DialogTitle className={styles.title}>{title}</DialogTitle>

    <DialogContent className={styles.content}>{component}</DialogContent>
    <DialogActions>
      <Button onClick={()=>closeDialog()} color="primary">
        {t("SKIP")}
      </Button>
      <Button onClick={this.handleOk} color="primary">
        {t("OK")}
      </Button>
    </DialogActions>
  </Dialog>
);



DialogComponent.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  isRtl: PropTypes.bool,
  closeDialog: PropTypes.func.isRequired
};

DialogComponent.defaultProps = { title: "", isRtl: false };

export default translate()(DialogComponent)
