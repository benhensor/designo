# Frontend Mentor - Designo agency website solution

This is a solution to the [Designo agency website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/designo-multipage-website-G48K6rfUT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size ✅
- See hover states for all interactive elements throughout the site ✅
- Receive an error message when the contact form is submitted if:
  - The `Name`, `Email Address` or `Your Message` fields are empty should show "Can't be empty" ✅
  - The `Email Address` is not formatted correctly should show "Please use a valid email address" ✅
- **Bonus**: View actual locations on the locations page maps (we recommend [Leaflet JS](https://leafletjs.com/) for this) ✅

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/benhensor/designo.git)
- Live Site URL: [Add live site URL here](https://bhfm-designo.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- React-Helmet for page metadata
- React Leaflet for map API
- React Hook Form for form handling and input validation
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

This design is complex and filled with small details to trip you up. I've never worked with styled components before so this was primarily an excercise in learning a new way to apply styles. 

I can see many advantages to styled components, mainly how much cleaner the component jsx becomes and the simplicity of sharing thematic elements across a site. I'll probably adopt styled components as my method of choice going forwards as there is still so much to learn. 



There are a number of elements I please with such as this method for introducing variations into structurally identical divs using a combination of props and conditional styling. What's great is this eliminates the need to create multiple styled elements that share common attributes:

```js
const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 60%;
    background: ${props => {
        if (props.$id === 'first') return `url(${props.$patternBG})`;
        if (props.$id === 'second' || props.$id === 'third') return null;
    }};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: ${props => {
        if (props.$id === 'first') return props.theme.primaryColors.peach;
        if (props.$id === 'second' || props.$id === 'third') return props.theme.secondaryColors.lighterPeach;
        return 'white';
    }};
    color: ${props => {
        if (props.$id === 'first') return props.theme.primaryColors.white;
        if (props.$id === 'second' || props.$id === 'third') return props.theme.primaryColors.black;
        return 'white';
    }};
    padding: 57px 10%;
    gap: 24px;
    h1 {
        color: ${props => props.theme.primaryColors.white};
    }
    h2 {
        color: ${props => props.theme.primaryColors.peach};
    }

    @media (max-width: 768px) {
        flex: 1;
        align-items: center;
        text-align: center;
        padding: 57px 0;
        h1, h2, p {
            padding: 0 10%;
        }
    
    }

    @media (max-width: 375px) {
        h1, h2 {
            font-size: 3.2rem;
            line-height: 3.4rem;
        }
        p {
            font-size: 1.5rem;
        }
    }
`
```

### Continued development

I constructed this solution in part due to the assets provided. Having the images, icons and text elements as a JSON packet would allow for a more efficient component tree.

## Author

- Website - [Ben Hensor](https://benhensordev.netlify.app/)
- Frontend Mentor - [@ybenhensor](https://www.frontendmentor.io/profile/benhensor)
- LinkedIn - [Ben Hensor](www.linkedin.com/in/benhensor)