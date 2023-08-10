// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: boolean;
  message: string;
  method: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>) 
  
  
  {

  console.log(process.env);



  res.status(200).json({ 
    name: true,
    message: 'jeje',
    method: req.method || 'no hay metodo'
  });
}

