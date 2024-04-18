let Data=[
    {
        quote:'In this life, we cannot do great things. We can only do small things with great love.” ',
        author:'Mother Teresa'
    },
    {
        quote:'Do not let making a living prevent you from making a life.”  ',
        author:'– John Wooden'
    },
    {
        quote:'Life itself is the most wonderful fairy tale.”  ',
        author:'– Hans Christian Andersen'
    },
    {
        quote:'Life is a long lesson in humility.  ',
        author:'-James M. Barrie”'
    },
    {
        quote:'Life is either a daring adventure or nothing.  ',
        author:'-Helen Keller”'
    },
    {
        quote:'In this life, we cannot do great things. We can only do small things with great love.” ',
        author:'Mother Teresa'
    },
    {
        quote:'In this life, we cannot do great things. We can only do small things with great love.” ',
        author:'Mother Teresa'
    },
   
    {
        quote:'Life is trying things to see if they work.',
        author:' -Ray Bradbury'
    },
    {
        quote:'In this life, we cannot do great things. We can only do small things with great love.” ',
        author:'Mother Teresa'
    },
    {
        quote:'The purpose of our lives is to be happy” ',
        author:'Dalai Lama'
    },
    {
        quote:'“You only live once, but if you do it right, once is enough.” ',
        author:'– Mae West'
    },    {
        quote:'It is better to fail in originality than to succeed in imitation.”  ',
        author:'– Herman Melville'
    },
    {
        quote:' “Everything you can imagine is real.”  ',
        author:'– Pablo Picasso'
    },
]



// access all-req the Html_elements into dom
const QuoteEle=document.getElementById('Quote')
const AuthorEle=document.getElementById('author')
const BtnEle=document.getElementById('btn')

// function to generate random Quotes 

function Quotegenerator(){
    let i=Math.floor(Math.random()*Data.length) // i store the index value of array
    console.log(i)
    QuoteEle.innerText=Data[i].quote
    AuthorEle.innerText=`~~ ${Data[i].author}`
}

BtnEle.addEventListener('click',Quotegenerator)