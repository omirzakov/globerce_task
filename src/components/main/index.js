import React, { useEffect } from "react";

// UI
import { Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { connect } from "react-redux";
import { loadPhotos } from "src/redux/actions/photos";
import { useStylesMain } from "src/styles/main";
import PhotoItem from "./PhotoItem";

const Main = ({ loadPhotos, photos }) => {
    const styles = useStylesMain();
    const { loading, data } = photos;

    useEffect(() => {
        loadPhotos();
    }, []);



    return (
        <div className={styles.wrapper}>
            <Grid container spacing={2}>
                {
                    loading ? <Skeleton width="100%" height="100vh" /> :
                    <>
                        {
                            data.map((photo, i) => (
                                <Grid item xl={4}  lg={4} md={6} sm={6} xs={12} key={i}>
                                    <PhotoItem photo={photo}  />
                                </Grid>
                            ))
                        }
                    </>
                }

            </Grid>
        </div>
    )
}


const mapStateToProps = (states) => {
    console.log(states)

    return {
        photos: states.photos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadPhotos: () => dispatch(loadPhotos())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);