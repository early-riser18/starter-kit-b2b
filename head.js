// Always need to be at very top of head tag
let Head = {
    title: 'it works',
    CSSFoot: '<link rel="stylesheet" href="footer.css" >',
    CSSHead: '<link rel="stylesheet" href="header-page.css" >',
    CSSMain: '<link rel="stylesheet" href="main.css" >',
    viewport: '<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>',
    favicon: '<link rel="icon" type="image/png" href="https://mystarterkit.nl/assets/favicon.ico">',
    charset: '<meta charset="UTF-8">',
    description: '<meta name="description" content="Starter Kit helps housing organizations operate smart and achieve more. Design your tenant`s Starter Kit and let us handle the rest!">',
    OGTitle: '<meta property="og:title" content="Starter Kit - Student Housing Provider" />',
    OGDescription: '<meta property="og:description" content="Starter Kit helps housing organizations operate smart and achieve more. Design your tenant`s Starter Kit and let us handle the rest" />',
    OGImg: '<meta property="og:image" content="./assets/og_image.main.jpg" />',
    canonical: `<link rel='canonical' href='https://mystarterkit.nl${window.location.pathname}'>`
};

// <link rel="canonical" href="https://yourwebsite.com/">
let headerStyle = '';


document.head.innerHTML = `
${Head.CSSMain}
${Head.CSSFoot}
${Head.CSSHead}
${Head.viewport}
${Head.favicon}
${Head.charset}
${Head.description}
${Head.OGTitle}
${Head.OGDescription}
${Head.OGImg}
${Head.canonical}
`;



