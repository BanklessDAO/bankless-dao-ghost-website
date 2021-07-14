export default {
    global: {
        ":root": {
            "--accent-color": "#00e6cb"
        },
        ".global-underline": {
            paddingBottom: ".2%",
            transition: "background-size .6s ease-out",
            background: "linear-gradient(var(--accent-color), var(--accent-color)) no-repeat left 123%/0 40%"
        },
        ".global-underline:hover": {
            backgroundSize: "97% 40%"
        },
        ".global-meta, .global-tags": {
            fontFamily: "four",
            fontSize: "13px",
            position: "relative",
            zIndex: 1,
            width: "100%"
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
        ".is-hero": {
            flexBasis: "100%",
            maxW: "100%",
            marginTop: "10vh",
            padding: "50px"
        },
        body: {
            bg: "#182029",
            lineHeight: "1.5",
            wordWrap: "break-word",
            wordBreak: "break-word",
            fontSize: "19px"
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
        p: {
            lineHeight: "1.75",
            position: "relative",
            marginRight: "0",
            marginLeft: "0",
            marginBottom: "40px",
            "&::first-child": {
                marginTop: "0"
            }
        },
        blockquote: {
            fontSize: "30px",
            position:"relative",
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
            marginLeft: "-1px"
        },
        h3: {
            fontSize: "31px",
            marginTop: "45px"
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