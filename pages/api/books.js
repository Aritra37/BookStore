import {getAllBooks, PostBook} from '../../api-helpers/controllers/books-controllers';
import {connecttoDatabase} from '../../api-helpers/utils';
export default async function  handler(req,res)
{
    await connecttoDatabase();
    if(req.method==="GET")
    {
        return getAllBooks(req,res);
    }
    else if (req.method==="POST")
    {
        return PostBook(req,res);
    }
}