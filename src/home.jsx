import book1 from './assets/book1.jpg';

function Home(){
    return(
    <>
    <div className="book">
        <div className="img-con">
        <img src={book1} alt="" className="hb"></img>
        <h1 className="img-h">Go Beyond!</h1>
        <p className="img-text" >Swipe Less Read More</p>
        
        </div>
    </div>
    
    </>
    )
}

export default Home