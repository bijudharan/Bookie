function Header({onSignIn}){
    return(
        <>
        <header className="head">
        <a href="#header" className="logo">Bookie</a>
        <a href="#" className="sign" onClick={e =>{e.preventDefault(); if(onSignIn) onSignIn()}}>Sign In</a>
        </header>
        </>
    )
}

export default Header