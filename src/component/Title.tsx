import { Helmet } from 'react-helmet';

function Title() {
    return (
    <div>
        <Helmet>
            <meta name='description' content='메타 데이터 테스트입니다.'></meta>
        </Helmet>
        <h2>My Todo List</h2>
    </div>
)}

export default Title;