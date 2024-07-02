function response(){
    console.log("Clicked");
}
function pdone(){
    console.log('Hovering over the paragraph')
}
export default function Button (){
    return (
        <div>
            <button onClick={response}>
                Click me!
            </button>
            <p onMouseOver={pdone}>
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Ad totam quis suscipit commodi
                provident, beatae fugiat explicabo at sequi 
                ea odio recusandae similique, dolorem hic 
                rem! Labore, sit. Eveniet, voluptas?
            </p>
        </div>
    )
}