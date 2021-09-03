export default {
    parts: [
        "container",
        "primarylink",
        "linkimage",
        "heading",
        "postcount"
    ],
    baseStyle: {
        container: {
            flex: "1 0 33.333%",
            maxW: {
                sm: "120px",
                md: "200px",
                "2xl": "400px"
            },
            padding: "0 30px 5vh",
            paddingBottom: {
                sm: "25px"
            },
            paddingRight: {
                sm: "12px"
            },
            paddingLeft: {
                sm: "12px"
            }
        },
        linkimage: {
            boxSizing: "content-box",
            objectFit: "cover",
            padding: {
                sm: "6px",
                md: "10px"
            },
            border: "var(--border) var(--color-three)",
            borderRadius: "100%",
            marginBottom: "2vh",
            width: {
                sm: "78px",
                md: "130px",
                lg: "170px"
            },
            height: {
                sx: "78px",
                md: "130px",
                lg: "170px"
            }
        },
        primarylink: {
            display: "inline-flex",
        },
        heading: {
            margin: 0,
            fontSize: {
                sm: "16px",
                md: "20px",
                xl: "30px"

            }
        },
        postcount: {
            fontFamily: "four",
            fontSize: "13px",
            boxSizing: {
                sm: "content-box",
                xl: "border-box"
            }
        }
    },
    sizes: {},
    variants: {
        primary: {
            container: {
                textAlign: "center",
            },
        },
        secondary: {
            container: {
                textAlign: "right",
                flexBasis: {
                    md: "20%",
                },
                maxW: {
                    md: "210px"
                },
                paddingBottom: "4vh"
            }
        }
    },
    defaultProps: {
        variant: "primary"
    }
}