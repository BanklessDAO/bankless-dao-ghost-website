export default {
    parts: [
        "container",
        "primarylink",
        "linkimage",
        "heading",
    ],
    baseStyle: {
        container: {
            base: {
                textAlign: "center",
            },
            sm: {
                paddingBottom: "25px",
                paddingRight: "12px",
                paddingLeft: "12px",
                maxW: "120px"
            },
            md: {
                maxW: "200px"
            }

        },
        primarylink: {
            display: "inline-flex"
        },
        linkimage: {
            base: {
                borderRadius: "100%",
                border: "var(--border) var(--color-three)",
                marginBottom: "2vh"
            },
            sm: {
                width: "78px",
                height: "78px",
                padding: "6px"
            }
        },
        heading: {
            base: {
                margin: "0 0 1vh"
            },
            sm: {
                fontSize: "small"
            },
            md: {
                fontsize: "med"
            }
        }
    },
    sizes: {
        small: {
            fontSize: '16px'
        },
        med: {
            fontSize: '20px'
        }
    },
    variants: {
    },
    defaultProps: {
        variant: "primary"
    }
}