import React from "react";
import {StyleRulesCallback, Theme, withStyles} from "@material-ui/core";
import Loader from "react-loader-spinner";


interface IProps {
    classes: any
}

const styles: StyleRulesCallback<any, any> = (theme: Theme) => ({});

function HSLoader(props: IProps) {
    return ( <Loader
            type="Puff"
            color="#00BFFF"
            height={35}
            width={35}
        />
    );
}

export default withStyles(styles)(HSLoader);