import React from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment/moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsAPI";

const { Text, Title } = Typography;
const { Options } = Select;

const News = ({ simplified }) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: "CryptoCurrency",
    count: simplified ? 10 : 100,
  });
  return <div>News</div>;
};

export default News;
