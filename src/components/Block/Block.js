import './Block.css';

export default function Block(props) {
    return (
        <div className="Block">
            <div class="frame-parent">
                <div class="vector-parent">
                    <img alt="" class="vector-icon" src={require('../../assets/images/ico_block.svg').default} />
                    <div class="container">
                        <b class="reason-payment">Reason : Payment Fraud</b>
                        <div class="reason-payment1">Reason : Payment Fraud</div>
                    </div>
                </div>
                <a href={props.url} class="button-2">
                    <b class="reason-payment">Contact us</b>
                </a>
            </div>
        </div>
    );
}
