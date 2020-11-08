import BaseApi from '@/lib/api/BaseApi';

export default async (req, res) => {
  try {
    const axiosRes = await new BaseApi(req.body.token).getUser(req.body);
    res.status(200).json(axiosRes.data);
  } catch (e) {
    res.status(e.response.status || 400).json({message: e.response.statusText,status:e.response.status});
  }
}