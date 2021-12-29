import React from "react";
import {Button, StyleRulesCallback, Theme, withStyles} from "@material-ui/core";
import {IAccommodation} from "../interfaces/Hotels";

interface IProps {
    classes: any;
    hotel: IAccommodation;
}
const styles: StyleRulesCallback<any, any> = (theme: Theme) => ({
    hotelItemContainer: {
        display: "flex",
        margin: "auto",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: "1em",
        width: "100%",
        boxShadow: "0 2px 4px 0 rgba(226, 230, 236, 0.5)",
    },
    gridItem: {
        flex: "1 0 30%",
    },
    hotelInfo: {
        fontSize: 12,
        backgroundColor: "#FFF",
        height: "100%",
        paddingLeft: "1em"
    },
    hotelName: {
        fontWeight: "bold",
        marginBottom: ".5em",
        paddingTop: "1em"
    },
    hotelRank: {
        display: "flex",
        flexDirection: "row"
    },
    hotelStart: {
        marginLeft: ".5em"
    },
    hotelPrice: {
        display: "flex",
        flexDirection: "column",
        marginTop: "auto",
        textAlign: "end",
        backgroundColor: "lightGrey",
        height: "100%",
        justifyContent: "end",
        paddingRight: "1em"
    },
    price: {
        color: "red",
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: ".2em"
    },
    detailsButtonContainer: {
        margin:  ".5em 0"
    }
});


function HotelItem(props: IProps) {
    const { classes, hotel } = props;

    const getHotelMainImage = () => {
        return hotel.HotelDescriptiveContent.Images.filter(image => image.MainImage)[0]
    }

    const renderHotelStars = () => {
        return "****"
    }
    return (
        <div className={classes.hotelItemContainer}>
            <div className={classes.gridItem}>
                <img style={{height: "auto", width: "100%"}} alt={"hotel main image "} src={getHotelMainImage().URL}/>
            </div>
            <div className={classes.gridItem}>
                <div className={classes.hotelInfo}>
                    <div className={classes.hotelName}>{hotel.HotelName}</div>
                    <div className={classes.hotelRank}>
                        <div>{hotel.HotelCode}</div>
                        <div className={classes.hotelStart}>{renderHotelStars()}</div>
                    </div>
                    <div className={classes.hotelLocation}>
                        <div>{hotel.HotelCode} | HOTEL_LOCATION</div>
                    </div>
                </div>
            </div>
            <div className={classes.gridItem}>
                <div className={classes.hotelPrice}>
                    <div className={classes.price}>$ {hotel.PricesInfo.AmountBeforeTax}</div>
                    <div>Total price per person</div>
                    <div className={classes.detailsButtonContainer}><Button variant={"contained"} color={"primary"}>View details</Button></div>
                </div>

            </div>

        </div>
    );
}

export default withStyles(styles)(HotelItem);