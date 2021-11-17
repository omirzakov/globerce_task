import React from "react";

// UI
import { Card, CardContent, Divider, Typography } from "@material-ui/core";
import { useStylesMain } from "src/styles/main";
import { Box } from "@mui/system";


const PostItem = ({post}) => {
    const styles = useStylesMain();


    return (
        <Card variant="outlined" className={styles.cardItemPost}>
            <CardContent>
                <Box component="div" fontWeight="bold" marginBottom={3} >
                    {post.title}
                </Box>
                <Divider />
                <Box component="p" fontSize={14}>
                    { post.body.length > 70 ? post.body.slice(0, 70) + "..." : post.body}
                </Box>
            </CardContent>
        </Card>
    );
}
export default PostItem;