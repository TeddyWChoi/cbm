import './SubTop.css';

function SubTop(props) {
    return (
        <div className="SubTop">
            <div class="frame">
                <div class="main-bottom">
                    <div class="bottom"></div>
                    <div class="text-container">
                        <div class="heading">{props.heading}</div>
                        <p class="subtitle">{props.subtitle}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SubTop;
