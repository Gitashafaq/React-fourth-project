import Footer from "./Footer";
import axios from "axios";
import Card from "./Card"
import { useEffect } from "react";
import { useState } from "react";


const Home = () => {
    let [books, setBooks] = useState([]);

    useEffect(() => {

        //  Get All Books
        const loadBooks = () => {
            axios.get("https://api.itbook.store/1.0/new").then((res) => {
                setBooks(res.data.books);
            })
        }
        loadBooks();
    },[]);


    return (
        <>
            {/*  CONTENT SECTION*/}
            <div className="container my-5">
                <div className="row">
            
                    {books.map((book) =>{
                            return(
                                <>
                                <div className="col-md-3 mb-4">
                                <Card image={book.image} title={book.title.slice(0,25)} subtitle={book.subtitle.slice(0,25)} isbn13={book.isbn13} price={book.price} url={book.url}/>;
                                </div>
                                 </> 
                            )
                        })}
                     
                    </div>
                </div>

   {/* FOOTER */}
           <Footer/>
        </>
    );

}
export default Home;