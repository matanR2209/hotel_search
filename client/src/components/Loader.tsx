import React from "react";
import {StyleRulesCallback, Theme, withStyles} from "@material-ui/core";
import "react-datepicker/dist/react-datepicker.css";


interface IProps {
    classes: any
}

const styles: StyleRulesCallback<any, any> = (theme: Theme) => ({

});

function Loader(props: IProps) {
    const { classes } = props;
    return (
        <div className={classes.loader}>
            TODO: loader
        </div>

    );
}

export default withStyles(styles)(Loader);