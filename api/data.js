import data from '../data/db.json';

export default function handler(req, res) {
  const { type } = req.query;

  if (type && data[type]) {
    return res.status(200).json(data[type]);
  }

  return res.status(200).json(data);
}
