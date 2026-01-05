import React from 'react'

const Container = ({children}) => {

    return (
        <div className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-8'> 

            {children}

        </div>
    );

};

// Container: the name of my component

// max-w-7xl = maximum width
// mx-auto: margin left and right auto
// px-4: padding left/right 16px
// sm: px-6: padding left/right 24px on medium screens
// lg: px-8: padding left/right 32px on large screen

export default Container;