import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import styles from "./create-board.page.scss";
import Boardsoptionslist from "../../components/boardsOptionsList/boardsOptionList.componet.jsx";
import queryString from "query-string";
import {
  FetchBoardsOptionsAction,
  FetchBoardByIdAction
} from "../../../common/state/board/board.actions";
import Typography from "@material-ui/core/Typography";
import { translate } from "react-i18next";
import BoardPriceFormComponent from "../../components/board-price-form/board-price-form.component.jsx";
import LocationSearchInput from "../../components/locationAutocomlete/locationAutocomlete.component.jsx";

class CreateBoardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: null,
      editPrice: false
    };
  }
  componentDidMount() {
    const values = queryString.parse(this.props.location.search);
    this.props.fetchBoardById(values.boardId).then(res => {
      this.setState({ board: res });
    });
    this.props.fetchBoardsOptions().then(res => {
      const suggestions = this.props.options.brand.map(suggestion => ({
        value: suggestion.label,
        label: suggestion.label
      }));
    });
  }

  togglePriceEdit() {
    let val = !this.state.editPrice;
    this.setState({ editPrice: val });
  }

  render() {
    const { boards, options, openDialog, editBoard } = this.props;
    const board = this.state.board;
    let place = "board.location"; // temp gal

    const setPlace = str => {
      place = str;
    };

    function ListItemLink(props) {
      return <ListItem button component="a" {...props} />;
    }

    return (
      <div className={styles.container }>
        <div className={styles.title_wrap}>
          <Typography variant="display1" component="h3">
            {board && board.name
              ? `${board.name}`
              : this.props.t("CREATE_BOARD_PAGE")}
          </Typography>
          <Typography variant="subheading" component="h4" color="textSecondary">
            {board && board.name ? `Edit ${board.name} detailes` : "NO BOARD"}
          </Typography>
        </div>
        <Button onClick={() => this.togglePriceEdit()}>
          details images / prices and location
        </Button>

        {this.state.editPrice ? (
          <Card>
            <div className={styles.prices_wraper}>
              <BoardPriceFormComponent />
              <div className={styles.location_wraper}>
              <LocationSearchInput place={place} setLocation={setPlace} />
              </div>
            </div>
          </Card>
        ) : (
          <Boardsoptionslist
            options={options}
            board={board}
            openDialog={openDialog}
          />
        )}
      </div>
    );
  }
}

CreateBoardPage.propTypes = {
  // boards: PropTypes.shape(boardModel).isRequired
};

CreateBoardPage.defaultProps = {
  boards: []
};

function mapStateToProps(state) {
  return {
    boards: state.board.boards,
    options: state.board.options,
    editBoard: state.board.newBoard
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchBoardsOptions: () => dispatch(new FetchBoardsOptionsAction()),
    fetchBoardById: id => dispatch(new FetchBoardByIdAction(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  translate()(CreateBoardPage)
);
