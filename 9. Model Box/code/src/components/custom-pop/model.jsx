
import "./model.css"

const Model =({onCloseHandler})=>{
    return(
    <div className="model">
        <div className="modal-content">
            <div className="header">
            <span onClick={onCloseHandler}  className="close-modal-icon">&times;</span>
                header
                
            </div>
            <div className="body">
                Body
            </div>
            <div className="footer">
                Footer
            </div>
        </div>


    </div>)
}
export default Model