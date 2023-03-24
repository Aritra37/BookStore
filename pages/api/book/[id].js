//api/book
import {deleteBook, getBookById, updateBook} from '../../../api-helpers/controllers/books-controllers';
import {connecttoDatabase} from '../../../api-helpers/utils';
export default async function handler(req,res)
{
    await connecttoDatabase();
    if (req.method==='PUT')
    {
        return updateBook(req,res); 
    }
    else if(req.method==='DELETE')
    {
        return deleteBook(req,res);
    }
    else if(req.method==='GET')
    {
        return getBookById(req,res);
    }
};