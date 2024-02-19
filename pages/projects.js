import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";

const Projects = () => {

    const photosIndexes = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
    ]

    return (
        <>
        <Head>
            <title>Dienstleistungen</title>
        </Head>
            <motion.div
              transition={{
                delay: 0.65,
                duration: 0.55,
                ease: [0.075, 0.82, 0.965, 1],
              }}
              style={{
                display: 'flex',
                height: '70px',
                width: '100dvw',
                background: 'black',
                color: 'whitesmoke',
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: '600',
                fontSize: '23px',
                boxShadow: '3px 0px 15px rgba(0, 0, 0, 0.5)'
              }}
            >Dienstleistungen</motion.div>
            <div
                className="image-gallery-body"
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    padding: '7px',
                    background: 'rgba(0, 0, 0, 0.9)',
                    gap: '7px'
                }}
            >
                {photosIndexes.map((photoNumber)=>{
                    return (
                        <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.65,
                            duration: 0.55,
                            ease: [0.075, 0.82, 0.965, 1],
                        }}
                        style={{
                            display: 'flex',
                            height: '400px',
                            flexGrow: '1',
                            flexShrink: '0',
                            flexBasis: '300px',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <img style={{height: '100%', width: '100%', objectFit: 'cover', objectPosition: 'center'}} src={`./projects/${photoNumber}.jpeg`}/>
                        </motion.div>
                    )
                })}
            </div>
        </>
    )
}

export default Projects;