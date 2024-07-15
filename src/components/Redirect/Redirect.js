// import { useNavigate } from 'react-router-dom';

export default function Redirect(props) {
    // const navigate = useNavigate();
    window.location.href = props.url;
    // const isLoggedIn = true; // 로그인 상태 여부에 따라 리다이렉트 처리

    // if (isLoggedIn) {
    //     navigate('/dashboard');
    // }
    // navigate(props.url);
    return;
}
