import './form.css'
function Form(){
return(<div id="formwrapper">
    <h1 className="selhead">Contact us</h1>
    <form id="formcontainer">
        <label for="name">Name</label><br/>
        <input type="text" id="name"/><br/>
        <label for="email">Email</label><br/>
        <input type="email" id="email"/><br/>
        <label for="message">Message</label><br/>
        <textarea id="message"/><br/>
        <button type="button" className='subtn'>Submit</button>
    </form>
</div>)
}
export default Form;