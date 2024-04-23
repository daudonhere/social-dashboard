import React, { useState } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { connect } from 'react-redux';
import { getData } from '../redux/actions/userAction';

function Index({ getData }) {
    const [loading, setLoading] = useState(true);
    

    return (
        <main className={styles.main}>
            <Head>
                <title>Hello World</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="#" />
            </Head>
            <Box>
            <Grid container spacing={0.5}>
                <Grid item xs={12} md={12}>
                    halo
                </Grid>
            </Grid>
            </Box>
        </main>
    )
}

const mapStateToProps = (state) => ({
    resultData: state.data.result
});

const mapDispatchToProps = {
    getData
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
