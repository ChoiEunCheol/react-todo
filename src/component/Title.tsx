import { Helmet } from 'react-helmet';

function Title() {
    return (
    <div>
        <Helmet>
            <title> 메타 데이터 제목 </title>
            <meta name='description' content='메타 데이터 테스트입니다.'></meta>
        </Helmet>
        <h2>My Todo List</h2>
    </div>
)}

export default Title;