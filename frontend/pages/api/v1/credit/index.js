import axios from 'axios';
import CelluarApi from '@/lib/api/celullar';

export default async (req, res) => {
  try {
    const axiosRes = await new CelluarApi(process.env.GENERAL_TOKEN).getProvider();
    res.status(200).json(axiosRes.data);
  } catch (e) {
    res.status(e.status || 400).json({message: 'Api error'});
  }
}