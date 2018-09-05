import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import ControlledSelect from './ControlledSelect';
import Button from './Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});
 

class TextFields extends React.Component {
  state = {
    Disease: '',
    Gene: '',
    Gender: '',
    Age: '',
    Other: ''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
          <ControlledSelect/>
        <TextField
          id="age"
          label="Age"
          className={classes.textField}
          value={this.state.Age}
          onChange={this.handleChange('Age')}
          margin="normal"
        /> 
        <TextField
          id="disease"
          label="Disease"
          className={classes.textField}
          value={this.state.Disease}
          onChange={this.handleChange('Disease')}
          margin="normal"
        />
        <TextField
          id="gene"
          label="Gene"
          className={classes.textField}
          value={this.state.Gene}
          onChange={this.handleChange('Gene')}
          margin="normal"
        /> 
        <TextField
          id="other"
          label="Other"
          className={classes.textField}
          value={this.state.Other}
          onChange={this.handleChange('Other')}
          margin="normal"
        /> 

        <Button setDisplayTable={this.props.setDisplayTable} />
      </form>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);