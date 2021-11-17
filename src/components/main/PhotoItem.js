import React from "react";

// UI
import { CardContent, CardMedia, Typography } from "@material-ui/core";
import Card from "@mui/material/Card"
import { useStylesMain } from "src/styles/main";

const PhotoItem = ({photo}) => {
    const styles = useStylesMain();

    return (
        <Card className={styles.cardItem}>
            <CardMedia component="img" height="200" image={photo.url} alt={photo.title} />
            <CardContent>
                <Typography>
                    {photo.title}
                </Typography>
            </CardContent>
        </Card>
    );
}
export default PhotoItem;