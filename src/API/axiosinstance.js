import axios from "axios";

const projectid = "splo0dmf";
const dataset = "production";
const token =
  "skX4TQcJH7Unaj2YkoBowHHZZMRaA1LVDsArXT4mYTOesH6sXXa7ecm3PHbvZ5FSJro7LYWCHyaJ2IJm3PhjcSokOn6uWiKplB92lFQnzZTdAd6mC5ssS4GMVee9UQ8OibimrfrvEp3VlGIbQZPV9f2uhct3fqapYhXqorwEOGXkK0XLlb4f";

const url = `https://${projectid}.api.sanity.io/v1/data/query/${dataset}`;

const query = `*[_type == "product"] {
  productname,
  price,
  description,
  category,
  size,
  color,
  image,
  stock,
  sku,
  createdAt
}`;

export async function fetchSanity() {
  try {
    const response = await axios.post(
      url,
      { query },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response
  } catch (err) {
    console.log(err);
  }
}
