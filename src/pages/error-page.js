import React, { useContext } from 'react'
import { Image } from 'grommet'
import GlobalContext from '../global-context'


export const ErrorPage = () => {
    const GLOBAL = useContext(GlobalContext)
    const errorImageUrl = GLOBAL?.assets[2]?.fields?.Attachments[0].url

    return (
        <div style={{margin:'13vw'}}>
            <h2 style={{color:'grey'}}>OOPS, we couldn't find the page you were looking for</h2>
            <Image fit='contain' src={errorImageUrl} style={{ width: '-webkit-fill-available' }}></Image>
        </div>
    )
}