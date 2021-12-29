import React from "react";
import {StyleRulesCallback, Theme, withStyles} from "@material-ui/core";
import {IAccommodation} from "../interfaces/Hotels";
import SearchView from "./SearchVIew";
import AvailableHotelsView from "./AvilableHotelsView";

interface IProps {
    classes: any;
    hotel: IAccommodation;
}
const styles: StyleRulesCallback<any, any> = (theme: Theme) => ({
    contentContainer: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#F0F0F0",
        height: "100vh",
        overflowY: "scroll"
}
});

function AppContent(props: IProps) {
    const { classes } = props;
    return (
        <div className={classes.contentContainer}>
            <SearchView/>
            <AvailableHotelsView/>
        </div>
    );
}

export default withStyles(styles)(AppContent);