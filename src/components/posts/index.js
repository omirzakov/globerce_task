import React, { useEffect } from "react";

// UI
import { Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { connect } from "react-redux";
import { loadPosts } from "src/redux/actions/posts";
import { useStylesMain } from "src/styles/main";
import PostItem from "./PostItem";

const Posts = ({ loadPosts, posts }) => {
    console.log(posts)
    const styles = useStylesMain();
    const { loading, data } = posts;

    useEffect(() => {
        loadPosts();
    }, []);



    return (
        <div className={styles.wrapper}>
            <Grid container spacing={2}>
                {
                    loading ? <Skeleton width="100%" height="100vh" /> :
                    <>
                        {
                            data.map((post, i) => (
                                <Grid item xl={4}  lg={4} md={6} sm={6} xs={12} key={i}>
                                    <PostItem post={post}  />
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
    return {
        posts: states.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadPosts: () => dispatch(loadPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);