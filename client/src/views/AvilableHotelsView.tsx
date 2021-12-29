import React from "react";
import {StyleRulesCallback, Theme, withStyles} from "@material-ui/core";
import {stores} from "../state";
import HotelItem from "../components/HotelItem";
import {Observer} from "mobx-react";
import HSLoader from "../components/HSLoader";

interface IProps {
    classes: any;
}

const styles: StyleRulesCallback<any, any> = (theme: Theme) => ({
    AvailableHotelsContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "60%",
        margin: " 2em auto",
        alignContent: "center"
    },
    loaderContainer: {
        display: "flex",
        margin: "auto"
    }
});

const hotelsStore = stores.hotelsStore;

function AvailableHotelsView(props: IProps) {
    const { classes } = props;

    const sortHotelsByPrice = () => {
        return hotelsStore.hotels.sort((a, b) => parseFloat(a.PricesInfo.AmountBeforeTax) - parseFloat(b.PricesInfo.AmountBeforeTax))
    }

    return (<Observer>
            {() => {
                return (<div className={classes.AvailableHotelsContainer}>
                    {sortHotelsByPrice().map((hotel, index)=> <HotelItem key={index} hotel={hotel}/>)}
                    {hotelsStore.isHotelsLoading? <div className={classes.loaderContainer}><HSLoader/></div> : null}
                </div>)
            }}
        </Observer>
    );
}


export default withStyles(styles)(AvailableHotelsView);