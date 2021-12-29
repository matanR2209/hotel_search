import React from "react";
import {Button, StyleRulesCallback, Theme, withStyles} from "@material-ui/core";
import {IAccommodation} from "../interfaces/Hotels";
import ColorsPalette from "../assets/Colors";

interface IProps {
    classes: any;
    hotel: IAccommodation;
}
const styles: StyleRulesCallback<any, any> = (theme: Theme) => ({
    hotelItemContainer: {
        display: "flex",
        margin: "auto",
        flexDirection: "row",
        marginBottom: "1.5em",
        width: "100%",
        boxShadow: "4px 4px 11px 3px rgba(0,0,0,0.7)",
        borderRadius: 10,
        fontSize: 12
    },
    hotelImageContainer: {
        width: "33%"
    },
    hotelInfoContainer: {
        width: "34%",
        backgroundColor: ColorsPalette.white
    },
    hotelPriceContainer: {
        width: "33%",
        backgroundColor: ColorsPalette.lightGrey,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,

},
    hotelInfo: {
        marginTop: "1em",
        marginLeft: ".5em"
    },
    hotelName: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: ".2em"
    },
    hotelRankContainer: {
            display: "flex",
            flexDirection: "row"
    },
    hotelStart: {
        marginLeft: "1em",
        display: "flex",
        flexDirection: "row"
    },
    startContainer: {
      color: "gold",
      marginRight: ".3em",
      fontSize: 18
    },
    hotelLocation: {
        fontSize: 10
    },
    hotelPrice: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "end",
        marginRight: "1em",
    },
    price: {
        fontSize: 22,
        fontWeight: "bold",
        color: "red"
    },
    buttonContainer: {
        fontSize: 10,
        margin: ".5em 0"
    }
});

function HotelItem(props: IProps) {
    const { classes, hotel } = props;

    const getHotelMainImage = () => {
        return hotel.HotelDescriptiveContent.Images.filter(image => image.MainImage)[0]
    }

    const renderHotelStars = () => {
        return Array.from(Array(parseInt(hotel.HotelInfo.Rating)), (_, index) => index + 1).map(star => <div className={classes.startContainer}> * </div>)
    }

    const renderHotelImage = () => {
        return (<div className={classes.hotelImageContainer}>
                <img style={{height: "100%", width: "100%", borderBottomLeftRadius: 10, borderTopLeftRadius: 10}} alt={"hotel main image "} src={getHotelMainImage().URL}/>
            </div>)
    }

    const renderHotelInfo = () => {
        return ( <div className={classes.hotelInfoContainer}>
            <div className={classes.hotelInfo}>
                <div className={classes.hotelName}>{hotel.HotelName}</div>
                <div className={classes.hotelRankContainer}>
                    <div>{hotel.HotelCode}</div>
                    <div className={classes.hotelStart}>{renderHotelStars()}</div>
                </div>
                <div className={classes.hotelLocation}>
                    <div>{hotel.HotelCode} | HOTEL_LOCATION</div>
                </div>
            </div>
        </div>)
    }

    const renderHotelPriceSection = () => {
        return (<div className={classes.hotelPriceContainer}>
            <div className={classes.hotelPrice}>
                <div className={classes.price}>$ {hotel.PricesInfo.AmountBeforeTax}</div>
                <div>Total price per person</div>
                <div className={classes.buttonContainer}><Button variant={"contained"} color={"primary"}>View details</Button></div>
            </div>
        </div>)
    }

    return (
        <div className={classes.hotelItemContainer}>
            {renderHotelImage()}
            {renderHotelInfo()}
            {renderHotelPriceSection()}
        </div>
    );
}

export default withStyles(styles)(HotelItem);