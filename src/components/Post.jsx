import { useLocation, useParams } from "react-router-dom";
const Post =()=>{

    const {id} =useParams();
    const query = new URLSearchParams(useLocation().search)

  return(<div>
     <h1 style={{marginTop:'18vh'}}> Id is :{id}</h1>
     <h2 style={{marginTop:'18vh'}}>{query.get('first')}</h2>
     </div>
     );

}

export default Post;