
import NFP from '../images/NFP.png'

function NotFoundPage() {
  return (
    <div className='content'>
      <h1>Этой страницы, как и призаков, не существует</h1>
      <img width={400} src={NFP}/>
    </div>
  );
}

export default NotFoundPage;
