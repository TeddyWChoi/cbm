import './Error.css';

export default function Error(props) {
    return (
        <div className="Error">
            <div class="frame-parent">
                <div class="vector-parent">
                    <img class="vector-icon" alt="" src={require('../../assets/images/ico_error.svg').default} />
                    <div class="container">
                        <b class="reason-payment">404 File Not Found</b>
                        <div class="reason-payment1">The page you requested may have been moved or deleted.</div>
                    </div>
                </div>
                <a href={props.url} class="button-2">
                    <b class="reason-payment">Go to Homepage</b>
                </a>
            </div>
        </div>
    );
}
