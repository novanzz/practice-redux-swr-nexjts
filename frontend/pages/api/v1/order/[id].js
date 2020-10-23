import BaseApi from '@/lib/api/BaseApi';

export default async (req, res) => {
  try {
    const axiosRes = await new BaseApi(process.env.GENERAL_TOKEN).getDetailOrder(req.query.id);
    res.status(200).json(axiosRes.data);
  } catch (e) {
    res.status(e.status || 400).json({message: 'Api error'});
  }
}