/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                "mobile": { "min": "375px", "max": "480px" },
                "xmobile": { "min": "481px", "max": "639px" },
            },
            fontSize: {
                "headline-1": "64px",
                "headline-2": "48px",
                "headline-3": "40px",
                "headline-4": "32px",
                "headline-5": "24px",
                "headline-6": "18px",
                "headline-7": "16px",
            },
            colors: {
                "primary": {
                    "main": "#E6B185",
                    "surface": "#F2EEFF",
                    "hover": "#B59FFE",
                    "pressed": "#6547C8",
                    "focus": "#E5DEFE",
                    "border": "#CFC3F6",
                    "dark": "#6638FA"
                },
                "secondary": "#FF601B",
                "semantic": {
                    "success": {
                        "main": "#37C99E",
                        "surface": "#EBFAF5",
                        "border": "#AFE9D8",
                        "hover": "#87DFC5",
                        "pressed": "#32B58E",
                        "focus": "#D7F4EC",
                    },
                    "info": {
                        "main": "#0099FF",
                        "surface": "#E6F5FF",
                        "border": "#99D6FF",
                        "hover": "#66C2FF",
                        "pressed": "#007ACC",
                        "focus": "#CCEBFF",
                    },
                    "warning": {
                        "main": "#FFDA54",
                        "surface": "#FFFBEE",
                        "border": "#FFF0BB",
                        "hover": "#FFE998",
                        "pressed": "#E6C44C",
                        "focus": "#FFF8DD",
                    },
                    "danger": {
                        "main": "#FE585B",
                        "surface": "#FFEEEF",
                        "border": "#FFBCBD",
                        "hover": "#FE8A8C",
                        "pressed": "#E54F52",
                        "focus": "#FFDEDE",
                    },
                },
                "neutral": {
                    "10": "#FFFFFF",
                    "20": "#E9E9E9",
                    "30": "#D2D2D2",
                    "40": "#A5A5A5",
                    "50": "#8F8F8F",
                    "60": "#797979",
                    "70": "#626262",
                    "80": "#4C4C4C",
                    "90": "#353535",
                    "100": "#1F1F1F",
                }
            },
        },
    },
    plugins: [],
}