import { useState } from 'react'
import './random.css'

// const [quote,setQuote] = useState(handleGenerate())
export default function Random(){
    const [quote,setQuote] = useState('')
    const [author,setAuthor] = useState('')

    const handleGenerate = () => {
        const randomnum = Math.floor(Math.random()*10)
        const quotes = [
            "The only way to do great work is to love what you do.",
            "In the end, we will remember not the words of our enemies, but the silence of our friends.",
            "Life is what happens when you’re busy making other plans.",
            "The best way to predict the future is to invent it.",
            "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
            "You miss 100% of the shots you don’t take.",
            "The only limit to our realization of tomorrow is our doubts of today.",
            "Be the change that you wish to see in the world.",
            "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            "Happiness is not something ready made. It comes from your own actions."
        ]
        const author = [
            "Steve Jobs",
            "Martin Luther King Jr.",
            "John Lennon",
            "Alan Kay",
            "Ralph Waldo Emerson",
            "Wayne Gretzky",
            "Franklin D. Roosevelt",
            "Mahatma Gandhi",
            "Winston Churchill",
            "Dalai Lama"
        ]
        const randquote = quotes[randomnum]
        const randauthor = author[randomnum]
        setQuote(randquote)
        setAuthor(randauthor)
    }
    return(
        <>
        <div className='overallbox'>
        <div className='outerbox'>
            <p className='quote'>{quote}</p>
            <p className='author'>~ {author}</p>
            <button onClick={handleGenerate}>Generate</button>
        </div>
        </div>
        </>
    )
}