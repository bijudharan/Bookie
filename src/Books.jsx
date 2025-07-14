

function Books(props){

    let purchased=false
    function buyBook(){
        console.log(purchased=true)
    }


    return(
        <>
        <div className="whole-con">
            <div className="book-con">
                <img className="book-img" src={props.image} alt="" />
                <div className="book-contain">
                <p>{props.name}</p>
                <p>{props.price}</p>
                <button className="buy-but" onClick={buyBook}>Add to Cart</button>
                </div>
            </div>
        </div>
        
        
        </>
    )
}


export default Books