import { Segment } from 'semantic-ui-react'

// Photo by <a href="https://unsplash.com/@adijoshi11?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Aditya Joshi</a> on <a href="https://unsplash.com/s/photos/white-cake?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
export default function Hero({image, height}) {
    return <Segment inverted style={{ minHeight: height, margin: 0, backgroundImage: image, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} basic>
        {/* <div className='hero-content'>
            <h1 className='new'>New</h1>
            <h1 className='product'>Puffy Cakes</h1>
            <h1 className='collections'>Collections</h1>
        </div> */}

    </Segment>
}