export function Background({ children }) {
    return <>
        <div className='circle-right'></div>
        <div className='circle-left'></div>
        {children}
    </>
}