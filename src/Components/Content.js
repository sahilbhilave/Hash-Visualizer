import './css/content.css'

function Content() {

    return (
        <div >
            <h2 id="title"><b>Hashing</b></h2> 
            <p id="function">position = element % size</p>
            <b id="credit">--Developed By Sahil Bhilave--</b>

            <input type="checkbox" id="toggle"></input>
            <label for="toggle">Toggle Steps</label>
            <div class="content" id = "content">
            <p id="calc"></p>
            </div>
            <hr/>

            <p id="result">Result</p>

        </div>
    );
}

export default Content;