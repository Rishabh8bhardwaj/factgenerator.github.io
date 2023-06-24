const quotes = [{
    quote: `"You only live once, but if you do it right, once is enough."`,
    writer: `– Mae West`
}, {
    quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
    writer: `– Albert Einstein`
}, {
    quote: `"Never let the fear of striking out keep you from playing the game."`,
    writer: `– Babe Ruth`
}, {
    quote: `"Your time is limited, so don’t waste it living someone else’s life."`,
    writer: `– Steve Jobs`
}, {
    quote: `"In order to write about life first you must live it."`,
    writer: `– Ernest Hemingway`
}, {
    quote: `"Life is not a problem to be solved, but a reality to be experienced."`,
    writer: `– Soren Kierkegaard`
}, {
    quote: `"The unexamined life is not worth living."`,
    writer: `– Socrates`
}, {
    quote: `"Turn your wounds into wisdom."`,
    writer: `– Oprah Winfrey`
}, {
    quote: `"The purpose of our lives is to be happy."`,
    writer: `- Dalai Lama`
}, 
{
    quote: `"ऐ मन, ज़रा सा झूम ले तू,
    ज़रा गुनगुना, ज़रा घूम ले तू;
    मंजिल है दूर, चलना ही है तुझे,
    उड़कर हवाओं को चूम ले तू"`,
    writer: `- Neelam Saxena Chandra    `
}, 
{
    quote: `"अपने रहस्यों को किसी पर भी उजागर मत करो। यह आदत स्वयं के लिए ही घातक सिद्ध होगी।"`,
    writer: `–चाणक्य `
},
{
    quote: `"हार मत मानो, हमेशा अगला मौका ज़रूर आता है।"`,
    writer: `–मैरी कॉम `
},
{
    quote: `"असंभव की सीमा जानने का एक ही तरीका है असंभव से भी आगे निकल जाना"`,
    writer: `– स्वामी विवेकानंद`
},{
    quote: `"No tears in the writer, no tears in the reader. No surprise in the writer, no surprise in the reader"`,
    writer: `– Robert Frost`
},{
    quote: `"It is never too late to be what you might have been"`,
    writer: `George Eliot `
},{
    quote: `"Amateurs sit and wait for inspiration, the rest of us just get up and go to work"`,
    writer: `– Stephen King `
},

]





let btn = document.querySelector("#Qbtn");

let quote = document.querySelector(".quote");

let writer = document.querySelector(".writer");






btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    
    
    quote.innerHTML = quotes[random].quote;

    
    writer.innerHTML = quotes[random].writer;
})