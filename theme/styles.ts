export default {
    global: {
        ":root": {
            "--bg-nav": "#242d39",
            "--accent-color": "#00e6cb",
            "--color-body": "#182029",
            "--color-details": "#b690ff",
            "--color-two": "#f7f9f9",
            "--color-three": "#485b73",
            "--border": "1px dashed",
            "--font-weight-four-medium": "500",
            "--color-font-two": "#182029"
        },
        ".global-underline": {
            paddingBottom: ".2%",
            transition: "background-size .6s ease-out",
            background: "linear-gradient(var(--accent-color), var(--accent-color)) no-repeat left 123%/0 40%"
        },
        ".global-underline:hover": {
            backgroundSize: "97% 40%"
        },
        ".global-special": {
            base: {
                margin: "10vh auto 25px",
                marginTop: 0,
                paddingTop: "10px",
                borderTop: "4px solid var(--color-details)",
                flexGrow: 1,
                position: "relative",
                flexWrap: "wrap",
                marginBottom: "10px"
            },
            sm: {
                marginTop: 0
            },
            md: {
                marginTop: 0
            },
            lg: {
                maxW: "100%"
            },
        },
        ".global-meta, .global-tags": {
            fontFamily: "four",
            fontSize: "13px",
            position: "relative",
            zIndex: 1,
            width: "100%"
        },
        ".global-tags": {
            "& a": {
                display: "inline-block",
                margin: "10px 1.5% 0 0"
            }
        },
        ".global-members-label": {
            fontFamily: "four",
            fontSize: "13px",
            lineHeight: "1.4",
            position: "absolute",
            top: "-30px",
            left: "-1px",
            color: "black",
            background: "var(--color-details)",
            textTransform: "capitalize"
        },
        ".global-image": {
            lineHeight: 0,
            position: "relative",
            zIndex: 1,
            float: "right",
            width: "125px",
            height: "125px",
            marginLeft: "7%",
            marginBottom: "15px",
            "&::after": {
                background: "orange"
            },
            ".is-hero &": {
                right: "40px",
                float: "none",
                flex: "0 0 350px",
                order: 2,
                width: "350px",
                height: "100%",
                margin: 0
            }
        },
        ".header-wrap": {
            minH: "60px",
            marginTop: "20px",
            marginBottom: "20px",
            alignItems: "center",
            position: "relative"
        },
        ".header-logo": {
            base: {
                flexBasis: "75%"
            },
            md: {
                flexBasis: "50%"
            }
        },
        ".header-nav": {
            base: {
                fontFamily: "two",
                position: "relative",
                zIndex: 99,
                flex: "0 1 100%",
                textAlign: "right"
            },
            sm: {
                flexBasis: "25%"
            },
            md: {
                flexBasis: "50%"
            },
            lg: {
            }
        },
        ".header-checkbox": {
            display: "none",
            "&:checked~nav ul": {
                position: "relative"
            }
        },
        ".header-toggle": {
            display: "block",
            position: "relative",
            zIndex: "99",
            overflow: "visible",
            width: "25px",
            height: "25px",
            margin: "0",
            padding: "5px",
            cursor: "pointer",
            opacity: "1",
            border: "0",
            outline: "0",
            background: "transparent",
            "&>span": {
                top: "50%"
            },
            "& span": {
                display: "block",
                width: "100%"
            },
            "& .bar": {
                position: "absolute",
                display: "block",
                width: "100%",
                height: "3px",
                content: "''",
                transition: "transform .3s cubic-bezier(.645, .045, .355, 1), top .3s cubic-bezier(.645, .045, .355, 1) .2s",
                background: "var(--color-two)"
            },
            "& .bar:nth-of-type(1)": {
                top: "-10px"
            },
            "& .bar:nth-of-type(3)": {
                top: "10px"
            }
        },
        ".is-hero": {
            ".item&": {
                base: {
                    maxW: "100%",
                    marginTop: "10vh",
                    padding: "50px 0",
                    flexBasis: "100%"
                },
                sm: {
                    marginBottom: "20px"
                }
            },
            ".item&.is-first": {
                marginTop: 0
            }
        },
        ".pinned-section": {
            base: {
                marginBottom: "4vh",
                padding: "35px 5% 0",
                border: "var(--border) var(--color-three)",
                flexWrap: "wrap",
                boxSizing: "content-box"
            }
        },
        ".pinned-pages": {
            base: {
                boxSizing: "content-box"
            }
        },
        ".pinned-posts": {
            base: {
                marginLeft: 0,
                marginTop: "15px",
                boxSizing: "content-box"
            }
        },
        ".item": {
            maxW: "50%",
            marginTop: "12vh",
            paddingTop: "0",
            paddingBottom: "0",
            flexBasis: "100%"
        },
        ".item-excerpt": {
            base: {
                fontFamily: "two",
                fontSize: "13px",
                lineHeight: "1.6",
                width: "95%",
                maxW: "400px",
                marginTop: "0",
                marginBottom: "0",
                padding: "5px 0 10px"
            },
            lg: {
                maxW: "500px",
                paddingTop: "10px",
                paddingBottom: "3vh"
            },
            xl: {
                lineHeight: 1.7,
                columnCount: "1"
            }
        },
        ".loop-wrap": {
            marginBottom: "5vh",
            flexWrap: "wrap"
        },
        ".item-image": {
            base: {
                lineHeight: "0",
                position: "relative",
                zIndex: "1",
                float: "right",
                width: "125px",
                height: "125px",
                marginBottom: "15px",
                marginLeft: "7%",
                ".item.is-hero &": {
                    base: {
                        top: "0",
                        float: "none",
                        width: "350px",
                        height: "100%",
                        margin: "0",
                        order: "2",
                        flex: "0 0 350px"
                    },
                    sm: {
                        maxW: "100%",
                        marginBottom: "20px",
                        flexBasis: "100%",
                        order: 0
                    },
                    xl: {
                        right: 0
                    }
                }
            },
            md: {
                ".item.is-hero &": {
                    width: "290px",
                    flexBasis: "290px"
                }
            },
            lg: {
                width: "95px",
                height: "95px",
                marginTop: "6px",
                ".item.is-hero &": {
                    right: "0"
                }
            },
            xl: {
                right: "0"
            }
        },
        ".item-container": {
            base: {
                boxSizing: "border-box",
                maxW: "100%",
                flexWrap: "wrap",
                position: "relative"
            },
            md: {
                ".post-header.is-hero.is-image": {
                    minHeight: "45vh"
                }
            },
            sm: {
                ".post-header.is-hero &": {
                    alignItems: "center"
                }
            }
        },
        ".subscribe-wrap": {
            base: {
                marginTop: "8vh",
                margin: "0 auto",
                padding: "0 0 50px",
                alignItems: "center",
                flexWrap: "wrap"
            },
            md: {
                flexWrap: "nowrap"
            },
        },
        ".subscribe-wrap h3": {
            base: {
                fontSize: "28px",
                lineHeight: "1.1",
                boxSizing: "border-box",
                minWidth: "280px",
                margin: 0,
                padding: "25px 5% 25px 0",
                flex: "1 1 50%"
            },
            md: {
                fontSize: "35px"
            }
        },
        ".subscribe-form": {
            base: {
                height: "50px",
                width: "100%",
                flex: "0 0 auto"
            },
            md: {
                height: "60px",
            }
        },
        ".global-footer": {
            width: "100%",
            maxW: "1200px",
            marginRight: "auto",
            marginLeft: "auto",
            flexShrink: "0"
        },
        ".footer-section": {
            paddingTop: "7vh",
            paddingBottom: "6vh",
            borderTop: "1px dashed #485b73"
        },
        ".footer-wrap": {
            base: {
                width: "100%",
                margin: "0 auto",
                alignItems: "flex-start",
                boxSizing: "border-box",
                flexWrap: "wrap"
            },
            lg: {
                flexWrap: "nowrap"
            }
        },
        ".footer-data": {
            base: {
                boxSizing: "border-box",
                paddingRight: "5%",
                flex: "999 0 30%"
            },
            md: {
                flexBasis: "100%"
            }
        },
        ".footer-logo": {
            marginBottom: "15px",
            maxWidth: "350px",
            "& .is-image img": {
                maxW: "150px",
                maxH: "45px"
            }
        },
        ".footer-icons": {
            base: {
                marginTop: "30px",
                marginBottom: "30px",
                maxW: "340px"
            }
        },
        ".footer-nav": {
            base: {
                flex: "1 0 auto",
                flexWrap: "nowrap"
            },
            sm: {
                flexWrap: "wrap"
            },
            md: {
                maxW: "100%",
                flexWrap: "wrap"
            }
        },
        ".footer-nav-column": {
            base: {
                width: "150px",
                marginBottom: "30px"
            },
            sm: {
                flex: "1 0 50%"
            },
            md: {
                width: "100%"
            },
            "& ul": {
                base: {
                    margin: 0,
                    paddingLeft: "15%"
                },
                md: {
                    paddingRight: "20px",
                    paddingLeft: 0
                }
            },
            "& li": {
                base: {
                    fontFamily: "two",
                    fontSize: "13px",
                    lineHeight: "2",
                    marginBottom: "16px",
                    listStyle: "none"
                },
                lg: {
                    fontSize: "12px"
                }
            }
        },
        ".footer-copyright": {
            base: {
                display: "block",
                height: "25px",
                marginTop: "30px",
                padding: 0,
                fontFamily: "four",
                fontSize: "13px",
            }
        },
        ".footer-description": {
            margin: "0",
            maxW: "350px",
            fontFamily: "four",
            fontSize: "13px"
        },
        ".post-share-section": {
            "& a": {
                display: "flex",
                width: "85px",
                height: "64px",
                pointerEvents: "none",
                border: 0,
                justifyContent: "center",
                alignItems: "center"
            },
            "& a:first-of-type": {
                paddingLeft: "10px",
                borderLeft: "var(--border) var(--color-three)"
            },
            "& a:last-of-type": {
                paddingRight: "10px",
                borderRight: "var(--border) var(--color-three)"
            }
        },
        body: {
            bg: "#182029",
            lineHeight: "1.5",
            wordWrap: "break-word",
            wordBreak: "break-word",
            fontSize: "19px",
            color: "#f7f9f9"
        },
        hr: {
            marginTop: "6vmin",
            width: "100%",
            position: "relative",
            margin: "2.5em 0 3.5em",
            padding: "0",
            height: "1px",
            border: "0",
            borderTop: "1px solid #f0f0f0"
        },
        article: {
            base: {
                ".global-special &": {
                    boxSizing: "border-box",
                    padding: "10px 25px",
                    flex: "1 0 25%",
                    flexBasis: "100%",
                    paddingLeft: 0
                }
            }
        },
        p: {
            fontSize: "19px",
            fontWeight: "400",
            lineHeight: "1.75",
            position: "relative",
            fontFamily: "three",
            marginRight: "0",
            marginLeft: "0",
            marginBottom: "40px",
            "&::first-child": {
                marginTop: "0"
            }
        },
        blockquote: {
            fontSize: "30px",
            position: "relative",
            width: "100%",
            paddingLeft: "55px",
            lineHeight: "1.5",
            boxSizing: "border-box",
            fontFamily: "two",
            my: "75px",
            "&::before": {
                fontFamily: "two",
                position: "absolute",
                content: "'\"'",
            }
        },
        ul: {
            paddingLeft: "15px",
            listStyle: "disc outside",
            marginRight: "0",
            marginLeft: "15px",
            marginBottom: "40px",
            marginTop: "0"
        },
        li: {
            marginBottom: "10px"
        },
        "h1,h2,h3,h4,h5,h6": {
            fontFamily: "one",
        },
        h1: {
            fontSize: "55px",
            marginTop: "60px"
        },
        h2: {
            fontSize: "41px",
            marginTop: "55px",
            lineHeight: "1.4",
            marginBottom: "20px",
            marginLeft: "-1px",
            ".global-special &": {
                fontFamily: "four",
                fontSize: "13px",
                lineHeight: "1.4",
                position: "absolute",
                zIndex: 1,
                top: 0,
                left: 0,
                display: "inline-block",
                margin: 0,
                transform: "translateY(-100%)",
                letterSpacing: 0,
                color: "var(--color-font-two)"
            },
            ".global-special & span": {
                background: "var(--color-details)"
            }
        },
        h3: {
            base: {
                fontSize: "31px",
                marginTop: "45px",
                ".global-special &": {
                    fontSize: "20px",
                    marginTop: 0,
                    marginBottom: "1vh"
                }
            },
            sm: {
                ".global-special &": {
                    fontSize: "15px"
                }
            }
        },
        h4: {
            fontSize: "24px",
            marginTop: "40px"
        },
        h5: {
            fontSize: "20px",
            marginTop: "40px"
        },
        h6: {
            fontSize: "11px",
            marginTop: "45px",
            letterSpacing: "2px",
            textTransform: "uppercase"
        }
    }
}