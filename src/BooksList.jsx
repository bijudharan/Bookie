import Books from './Books';
import rich from './assets/rich.jpg';
import atomic from './assets/atomic.jpg';
import money from './assets/money.jpg';
import detox from './assets/detox.png';
import bed from './assets/bed.jpg';
import think from './assets/think.jpg';
import zero from './assets/zero.jpg';
import ego from './assets/ego.jpg';

function BooksList(){

        const books=[
            {
                id:1,
                name:"Rich Dad Poor Dad",
                price:"Rs. 139",
                image:rich
            },
            {
                id:2,
                name:"Atomic Habits",
                price:"Rs. 179",
                image:atomic
            },
            {
                id:3,
                name:"The pschology of money",
                price:"Rs. 159",
                image:money
            },
            {
                id:4,
                name:"Dopamine Detox",
                price:"Rs. 99",
                image:detox
            },
            {
                id:5,
                name:"Make your Bed",
                price:"Rs. 119",
                image:bed
            },
            {
                id:6,
                name:"Think and Grow Rich",
                price:"Rs. 149",
                image:think
            },
            {
                id:7,
                name:"Zero to One",
                price:"Rs. 179",
                image:zero
            },
            {
                id:8,
                name:"Ego is the Enemy",
                price:"Rs. 159",
                image:ego
            },
        ]
        


        return(
            <>
            <div className="books-list">
            {books.map((b) => <Books key={b.id} name={b.name} price={b.price} image={b.image} />)}
            </div>
            </>
        )
}


export default BooksList